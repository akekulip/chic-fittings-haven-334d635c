
import { useState, useEffect } from "react";
import CollectionCard from "./CollectionCard";
import { cn } from "@/lib/utils";

interface Collection {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
}

interface GalleryGridProps {
  collections: Collection[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  filter?: boolean;
}

const GalleryGrid = ({
  collections,
  title,
  subtitle,
  columns = 3,
  filter = true,
}: GalleryGridProps) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredCollections, setFilteredCollections] = useState(collections);
  const [animate, setAnimate] = useState(false);

  const categories = [
    "all",
    ...Array.from(new Set(collections.map((c) => c.category || ""))).filter(Boolean),
  ];

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredCollections(collections);
    } else {
      setFilteredCollections(
        collections.filter((c) => c.category === activeFilter)
      );
    }
    
    // Trigger animation
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  }, [activeFilter, collections]);

  return (
    <div className="w-full py-16">
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-medium">{title}</h2>}
          {subtitle && (
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">{subtitle}</p>
          )}
          {title && <div className="divider"></div>}
        </div>
      )}

      {filter && categories.length > 1 && (
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-4 py-2 text-sm uppercase tracking-wider transition-colors",
                  activeFilter === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      <div 
        className={cn(
          "grid gap-6 md:gap-8",
          columns === 2 && "grid-cols-1 sm:grid-cols-2",
          columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          animate ? "opacity-100 transition-opacity duration-500" : "opacity-0"
        )}
      >
        {filteredCollections.map((collection) => (
          <CollectionCard
            key={collection.id}
            id={collection.id}
            title={collection.title}
            description={collection.description}
            imageUrl={collection.imageUrl}
            category={collection.category}
          />
        ))}
      </div>

      {filteredCollections.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
