
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Grid2X2, ImageIcon, Users } from "lucide-react";

const AdminDashboard = () => {
  const [collectionsCount, setCollectionsCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const { count } = await supabase
          .from("collections")
          .select("*", { count: "exact", head: true });
        
        setCollectionsCount(count || 0);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-500">Manage your fashion collection</p>
      </div>

      {loading ? (
        <div className="grid place-items-center h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Grid2X2 className="h-5 w-5 mr-2 text-primary" />
                Collections
              </CardTitle>
              <CardDescription>Manage your fashion collections</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{collectionsCount}</p>
              <p className="text-sm text-gray-500">Total collections</p>
            </CardContent>
            <CardFooter>
              <Link to="/admin/collections">
                <Button variant="outline" size="sm">Manage Collections</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <ImageIcon className="h-5 w-5 mr-2 text-primary" />
                Images
              </CardTitle>
              <CardDescription>Manage collection images</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">-</p>
              <p className="text-sm text-gray-500">Upload and manage images</p>
            </CardContent>
            <CardFooter>
              <Link to="/admin/collections">
                <Button variant="outline" size="sm">Manage Images</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Site Settings
              </CardTitle>
              <CardDescription>Manage website settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">-</p>
              <p className="text-sm text-gray-500">Update site configuration</p>
            </CardContent>
            <CardFooter>
              <Link to="/admin/settings">
                <Button variant="outline" size="sm">Site Settings</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
