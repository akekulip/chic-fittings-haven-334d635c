
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Collection {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
}

const CollectionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [collection, setCollection] = useState<Collection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll just simulate fetching the collection from our data
    const fetchCollection = async () => {
      setIsLoading(true);
      try {
        // Import the collections data from Collections.tsx
        const { default: Collections } = await import("./Collections");
        // @ts-ignore - This is a hack to get the collections data
        const allCollections = Collections().props.children[1].props.children.props.collections;
        const found = allCollections.find((c: Collection) => c.id === id);
        
        if (found) {
          setCollection(found);
        }
      } catch (error) {
        console.error("Error fetching collection:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollection();
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <div className="w-12 h-12 border-4 border-black/10 border-t-black/30 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-medium mb-4">Collection Not Found</h1>
        <p className="text-gray-600 mb-8">The collection you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/collections" 
          className="inline-flex items-center text-black hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all collections
        </Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      <Link 
        to="/collections" 
        className="inline-flex items-center text-black hover:underline mb-8 group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to collections
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative overflow-hidden bg-gray-100">
          {!imageLoaded && (
            <div className="aspect-[4/5] w-full bg-gray-200 animate-pulse"></div>
          )}
          <img
            src={collection.imageUrl}
            alt={collection.title}
            className={cn(
              "w-full h-auto object-cover transition-opacity duration-300",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="flex flex-col justify-center">
          {collection.category && (
            <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              {collection.category} Collection
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-medium mb-4">{collection.title}</h1>
          
          {collection.description && (
            <p className="text-gray-600 mb-8 text-lg">{collection.description}</p>
          )}

          <Card className="bg-gray-50 border-gray-100 mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Schedule a consultation</h3>
              <p className="text-gray-600 mb-4">
                Interested in this piece? Schedule a consultation with our design team to discuss customization options.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
              >
                Book Appointment
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default CollectionDetail;
