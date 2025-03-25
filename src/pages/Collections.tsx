
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";

const Collections = () => {
  const collections = [
    {
      id: "bridal-1",
      title: "Elegant Black Ensemble",
      description: "Sophisticated black evening gown with lace details paired with classic suit",
      imageUrl: "/lovable-uploads/3250f859-766b-4436-a7d5-0c81cba8db65.png",
      category: "Bridal",
    },
    {
      id: "bridal-2",
      title: "Lakeside Romance",
      description: "Stunning red gown and emerald suit for pre-wedding photoshoot",
      imageUrl: "/lovable-uploads/e0251cd3-8c71-4580-9c6e-291e57908f4b.png",
      category: "Bridal",
    },
    {
      id: "bridal-3",
      title: "Tropical Elegance",
      description: "Vibrant red and green combination for destination weddings",
      imageUrl: "/lovable-uploads/b7649a28-e280-4b72-9ddd-617ce5c79eed.png",
      category: "Bridal",
    },
    {
      id: "bridal-4",
      title: "Classic White Wedding",
      description: "Traditional white gown with intricate lace detailing and matching veil",
      imageUrl: "/lovable-uploads/23b7d97f-9b79-495e-a5a0-f3252cc044ea.png",
      category: "Bridal",
    },
    {
      id: "bridal-5",
      title: "Traditional Elegance",
      description: "Vibrant cultural attire featuring yellow and teal with gold embellishments",
      imageUrl: "/lovable-uploads/89d5e5b6-2855-4481-a89a-48c3f480cc55.png",
      category: "Bridal",
    },
    {
      id: "bridal-6",
      title: "Fantasy in Purple",
      description: "Ethereal purple gown with flowing fabric and intricate beadwork",
      imageUrl: "/lovable-uploads/0f221b5f-8752-4a4f-84a8-5872d91c4eb5.png",
      category: "Bridal",
    },
    {
      id: "bridal-7",
      title: "Royal Blue Collection",
      description: "Stunning blue lace gown with dramatic train details",
      imageUrl: "/lovable-uploads/a315848a-7066-48b4-afab-6ba0a5f3c793.png",
      category: "Bridal",
    },
    {
      id: "bridal-8",
      title: "African Print Fusion",
      description: "Modern bridal wear featuring vibrant kente prints and contemporary design",
      imageUrl: "/lovable-uploads/76befe32-22eb-4360-8722-ce0e62f04767.png",
      category: "Bridal",
    },
    // Previous bridal items removed and replaced with the 8 new ones above
    
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
      id: "custom-3",
      title: "Matching Couple Designs",
      description: "Elegant matching outfits for couples with floral patterns",
      imageUrl: "/lovable-uploads/d8e34e8f-cd9b-4cb9-bfbc-6023ab50475c.png",
      category: "Custom",
    },
    {
      id: "custom-4",
      title: "Family Collection",
      description: "Coordinated floral designs for the whole family",
      imageUrl: "/lovable-uploads/d63cf1f6-fb41-409e-93f7-9fc25ca25f92.png",
      category: "Custom",
    },
    {
      id: "custom-5",
      title: "Fantasy Wings",
      description: "Dramatic design with statement mirror wings",
      imageUrl: "/lovable-uploads/18bec5d4-1f85-4da5-a67d-a6a5803afed5.png",
      category: "Custom",
    },
    {
      id: "custom-6",
      title: "Ethereal Elegance",
      description: "Delicate coral gown with sheer overlay",
      imageUrl: "/lovable-uploads/5327c84b-723c-4652-a69e-d9f4117623fd.png",
      category: "Custom",
    },
    // Ready-to-Wear collection with new uploads
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
      id: "ready-3",
      title: "Vibrant Print Dress",
      description: "Colorful paisley print dress with flared silhouette",
      imageUrl: "/lovable-uploads/0e80dced-a4c5-4fbf-9ad8-944cea141080.png",
      category: "Ready-to-Wear",
    },
    {
      id: "ready-4",
      title: "Coastal Elegance",
      description: "Flowing white halter dress perfect for beach getaways",
      imageUrl: "/lovable-uploads/9bb61cf7-d6f5-4a65-bbdc-4546c5eeb00f.png",
      category: "Ready-to-Wear",
    },
    {
      id: "ready-5",
      title: "Coral Lace Ensemble",
      description: "Sophisticated coral lace dress with bell sleeves",
      imageUrl: "/lovable-uploads/347a5c1b-3599-416a-9885-a0d23a7189a0.png",
      category: "Ready-to-Wear",
    },
    {
      id: "ready-6",
      title: "Burgundy Traditional Set",
      description: "Elegant burgundy outfit with traditional embroidery and matching headwrap",
      imageUrl: "/lovable-uploads/9626a430-ad39-4d8d-a562-45637d1923f7.png",
      category: "Ready-to-Wear",
    },
    {
      id: "ready-7",
      title: "Heritage Collection",
      description: "Rich burgundy ensemble featuring cultural patterns and symbols",
      imageUrl: "/lovable-uploads/8486a654-40b0-4189-8f67-70c230f7ae38.png",
      category: "Ready-to-Wear",
    },
    {
      id: "ready-8",
      title: "Sunshine Top",
      description: "Dramatic yellow ruffle top paired with a patterned mini skirt",
      imageUrl: "/lovable-uploads/e764a0b5-b039-4f31-8551-ecf8414840ab.png",
      category: "Ready-to-Wear",
    },
    {
      id: "ready-9",
      title: "Urban Tribal Mini",
      description: "Yellow ruffle top with geometric print mini skirt, perfect for summer events",
      imageUrl: "/lovable-uploads/77ecbc1d-f87e-414e-aaf4-86c68baaf7d6.png",
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
        backgroundImage="/lovable-uploads/3250f859-766b-4436-a7d5-0c81cba8db65.png"
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
