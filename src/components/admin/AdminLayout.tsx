
import { useState } from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu, X, Settings, Grid, Image } from "lucide-react";

const AdminLayout = () => {
  const { user, isAdmin, signOut, isLoading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Show loading state
  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Redirect if not logged in or not an admin
  if (!user) {
    return <Navigate to="/auth" />;
  }

  if (!isAdmin) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
        <p className="text-gray-600 mb-6 text-center">
          You don't have permission to access the admin panel. Please contact an administrator.
        </p>
        <Button onClick={() => signOut()}>Return to Home</Button>
      </div>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleSidebar}
          className="bg-white"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static h-full w-[240px] bg-white shadow-md z-20 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <Link 
              to="/admin" 
              className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Grid size={20} className="mr-2" /> Dashboard
            </Link>
            <Link 
              to="/admin/collections" 
              className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Image size={20} className="mr-2" /> Collections
            </Link>
            <Link 
              to="/admin/settings" 
              className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Settings size={20} className="mr-2" /> Settings
            </Link>
          </nav>

          <div className="p-4 border-t">
            <Button variant="outline" className="w-full" onClick={() => signOut()}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
