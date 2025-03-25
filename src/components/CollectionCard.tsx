
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface CollectionCardProps {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
}

const CollectionCard = ({
  id,
  title,
  description,
  imageUrl,
  category,
}: CollectionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { toast } = useToast();

  const handleImageError = () => {
    console.error(`Failed to load image: ${imageUrl}`);
    setImageError(true);
    toast({
      title: "Image loading error",
      description: `Could not load image for: ${title}`,
      variant: "destructive",
    });
  };

  return (
    <Link 
      to={`/collections/${id}`}
      className="group block relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
        {!isImageLoaded && !imageError && (
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        )}
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            <span className="text-sm">Image unavailable</span>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 ease-out",
              isHovered ? "scale-105" : "scale-100",
              isImageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsImageLoaded(true)}
            onError={handleImageError}
          />
        )}
      </div>
      
      <div 
        className={cn(
          "absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "group-hover:opacity-100"
        )}
      ></div>

      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 ease-out",
          isHovered ? "translate-y-0" : "translate-y-8 group-hover:translate-y-0"
        )}
      >
        {category && (
          <div 
            className={cn(
              "text-xs uppercase tracking-wider text-white/80 mb-2 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            {category}
          </div>
        )}
        
        <h3 className="text-xl font-medium text-white">{title}</h3>
        
        {description && (
          <p 
            className={cn(
              "text-sm text-white/80 mt-2 line-clamp-2 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default CollectionCard;
