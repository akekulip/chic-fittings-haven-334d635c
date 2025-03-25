
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const { user, signIn, signUp } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [adminSetupComplete, setAdminSetupComplete] = useState(false);
  const { toast } = useToast();

  // Redirect if user is already logged in
  if (user) {
    return <Navigate to="/admin" />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signIn(username, password);
    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signUp(username, password);
    setIsLoading(false);
  };

  // Special function to create and set up admin user
  const createAdminUser = async () => {
    try {
      setIsLoading(true);
      
      // Create admin with username "admin"
      const adminEmail = "admin@derby.app";
      
      // Try to sign up the admin user
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: adminEmail,
        password: "admin",
        options: {
          emailRedirectTo: undefined,
          data: {
            username: "admin"
          }
        }
      });
      
      if (signUpError && signUpError.message !== "User already registered") {
        throw signUpError;
      }
      
      // If the user was created or already exists, try to sign in
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: adminEmail,
        password: "admin"
      });
      
      if (signInError) {
        throw signInError;
      }

      // Set the user as admin in the profiles table
      if (signInData.user) {
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ is_admin: true })
          .eq('id', signInData.user.id);
        
        if (updateError) {
          throw updateError;
        }
        
        toast({
          title: "Admin user created successfully",
          description: "Username: admin, Password: admin",
        });
        
        setAdminSetupComplete(true);
        
        // Sign out so the user can log in as admin
        await supabase.auth.signOut();
      }
    } catch (error: any) {
      toast({
        title: "Error setting up admin user",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
          <p className="text-gray-500">Please log in to access admin features</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4 mt-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="pt-4 border-t mt-4">
              <p className="text-sm text-gray-500 mb-2">Quick access for demo:</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={createAdminUser}
                disabled={isLoading || adminSetupComplete}
              >
                {isLoading ? "Setting up..." : adminSetupComplete ? "Admin user ready" : "Create admin user"}
              </Button>
              {adminSetupComplete && (
                <p className="text-xs text-green-600 mt-2">
                  Admin user created! Use username: admin / password: admin to log in
                </p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4 mt-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-username">Username</Label>
                <Input
                  id="signup-username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Auth;
