
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";

const Collections = () => {
  const collections = [
    {
      id: "bridal-1",
      title: "Elegance in White",
      description: "A stunning bridal gown with delicate detailing",
      imageUrl: "/lovable-uploads/7b4fa566-915f-49fa-a789-682508232654.png",
      category: "Bridal",
    },
    {
      id: "bridal-2",
      title: "Classic Romance",
      description: "Timeless bridal design with elegant silhouette",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Bridal",
    },
    {
      id: "bridal-3",
      title: "Modern Sophistication",
      description: "Contemporary bridal wear for the modern bride",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      category: "Bridal",
    },
    {
      id: "bridal-4",
      title: "Royal Wedding",
      description: "Luxurious design fit for royalty",
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "Bridal",
    },
    {
      id: "bridal-5",
      title: "Dream Collection",
      description: "Ethereal designs for your perfect day",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      category: "Bridal",
    },
    {
      id: "evening-1",
      title: "Midnight Glamour",
      description: "A sophisticated evening gown with delicate beading",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Evening",
    },
    {
      id: "evening-2",
      title: "Scarlet Romance",
      description: "A show-stopping red gown with dramatic silhouette",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      category: "Evening",
    },
    {
      id: "custom-1",
      title: "Modern Minimalist",
      description: "A clean, contemporary design with architectural elements",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Custom",
    },
    {
      id: "custom-2",
      title: "Vintage Revival",
      description: "A bespoke piece inspired by classic 1950s aesthetics",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      category: "Custom",
    },
    {
      id: "ready-1",
      title: "Urban Chic",
      description: "A versatile piece for the modern city dweller",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Ready-to-Wear",
    },
    {
      id: "ready-2",
      title: "Weekend Retreat",
      description: "Comfortable yet stylish design for leisure time",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Ready-to-Wear",
    },
    {
      id: "accessories-1",
      title: "Statement Piece",
      description: "A bold accessory to elevate any outfit",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      category: "Accessories",
    },
  ];

  return (
    <main className="page-transition">
      <HeroSection
        title="Our Collections"
        subtitle="Explore our carefully curated collections, each piece a testament to craftsmanship and timeless style."
        backgroundImage="/lovable-uploads/7b4fa566-915f-49fa-a789-682508232654.png"
        minHeight="min-h-[60vh]"
      />

      <div className="container mx-auto px-4 md:px-6 py-8">
        <GalleryGrid
          collections={collections}
          columns={3}
          filter={true}
        />
      </div>
    </main>
  );
};

export default Collections;
