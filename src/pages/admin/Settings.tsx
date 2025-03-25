
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClearCache = () => {
    setIsLoading(true);
    // Simulate clearing cache
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Cache cleared",
        description: "Application cache has been cleared successfully"
      });
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-500">Manage your admin preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>View your account details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p>{user?.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">User ID</p>
              <p className="truncate">{user?.id}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Role</p>
            <p>Administrator</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>System</CardTitle>
          <CardDescription>Manage system settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Clear Application Cache</h3>
              <p className="text-sm text-gray-500">
                Clear cached data to refresh the application state
              </p>
            </div>
            <Button onClick={handleClearCache} disabled={isLoading}>
              {isLoading ? "Clearing..." : "Clear Cache"}
            </Button>
          </div>
          
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">System Information</h3>
              <p className="text-sm text-gray-500">Current system information</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-500">Database Status</p>
              <p className="text-green-600">Connected</p>
            </div>
            <div>
              <p className="font-medium text-gray-500">Storage Status</p>
              <p className="text-green-600">Available</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
