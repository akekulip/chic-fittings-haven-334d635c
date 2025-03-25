
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
      imageUrl: "/lovable-uploads/IMG_1413.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-3",
      title: "Modern Sophistication",
      description: "Contemporary bridal wear for the modern bride",
      imageUrl: "/lovable-uploads/IMG_1414.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-4",
      title: "Royal Wedding",
      description: "Luxurious design fit for royalty",
      imageUrl: "/lovable-uploads/IMG_1415.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-5",
      title: "Dream Collection",
      description: "Ethereal designs for your perfect day",
      imageUrl: "/lovable-uploads/IMG_1416.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-6",
      title: "Lace Perfection",
      description: "Intricate lace details for a romantic look",
      imageUrl: "/lovable-uploads/IMG_1417.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-7",
      title: "Timeless Beauty",
      description: "A classic silhouette with modern details",
      imageUrl: "/lovable-uploads/IMG_1418.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-8",
      title: "Enchanted Bride",
      description: "Magical details for your special day",
      imageUrl: "/lovable-uploads/IMG_1419.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-9",
      title: "Romantic Vision",
      description: "Soft and romantic bridal design",
      imageUrl: "/lovable-uploads/IMG_1420.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-10",
      title: "Ethereal Dream",
      description: "Flowing fabrics create an ethereal look",
      imageUrl: "/lovable-uploads/IMG_1421.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-11",
      title: "Majestic Bride",
      description: "Regal design for a statement entrance",
      imageUrl: "/lovable-uploads/IMG_1422.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-12",
      title: "Pure Elegance",
      description: "Simple and elegant bridal silhouette",
      imageUrl: "/lovable-uploads/IMG_1423.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-13",
      title: "Refined Grace",
      description: "Sophisticated design with refined details",
      imageUrl: "/lovable-uploads/IMG_1424.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-14",
      title: "Garden Romance",
      description: "Perfect for garden and outdoor weddings",
      imageUrl: "/lovable-uploads/IMG_1425.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-15",
      title: "Graceful Allure",
      description: "Graceful silhouette with alluring details",
      imageUrl: "/lovable-uploads/IMG_1426.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-16",
      title: "Delicate Details",
      description: "Intricate beadwork and delicate embellishments",
      imageUrl: "/lovable-uploads/IMG_1427.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-17",
      title: "Modern Princess",
      description: "Contemporary take on a princess silhouette",
      imageUrl: "/lovable-uploads/IMG_1428.JPG",
      category: "Bridal",
    },
    {
      id: "bridal-18",
      title: "Celestial Beauty",
      description: "Inspired by celestial elements for a magical look",
      imageUrl: "/lovable-uploads/IMG_1429.JPG",
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
