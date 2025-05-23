import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CollectionCard from "@/components/CollectionCard";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredCollections = [
    {
      id: "bridal-1",
      title: "Bridal Collection",
      description: "Timeless elegance for your special day",
      imageUrl: "/lovable-uploads/d4cadf05-d803-4e06-b9de-b9c208bd095a.png",
      category: "Bridal",
    },
    {
      id: "evening-1",
      title: "Evening Wear",
      description: "Sophisticated designs for memorable nights",
      imageUrl: "/lovable-uploads/402c8ba8-9df7-4374-9e51-25f71d107e55.png",
      category: "Evening",
    },
    {
      id: "custom-3",
      title: "Custom Designs",
      description: "Bespoke creations tailored to your vision",
      imageUrl: "/lovable-uploads/46492e91-7d6c-4080-9ec3-5a64f9322682.png",
      category: "Custom",
    },
  ];

  const services = [
    {
      title: "Bridal Couture",
      description: "Bespoke wedding gowns designed with love and crafted with precision for your perfect day.",
      icon: "👰‍♀️",
    },
    {
      title: "Custom Design",
      description: "Transform your vision into reality with our personalized design service for any occasion.",
      icon: "✏️",
    },
    {
      title: "Alterations",
      description: "Expert alterations to ensure the perfect fit for your most treasured garments.",
      icon: "🧵",
    },
    {
      title: "Styling",
      description: "Professional styling advice to help you curate a wardrobe that reflects your unique personality.",
      icon: "👗",
    },
  ];

  return (
    <main className="page-transition">
      <HeroSection
        title="Elegance Crafted for You"
        subtitle="Discover the artistry of bespoke fashion, where each design tells a unique story of style and sophistication."
        ctaText="Explore Collections"
        ctaLink="/collections"
        minHeight={isMobile ? "min-h-[60vh]" : "min-h-[80vh]"}
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-medium">Featured Collections</h2>
            <div className="divider"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-2">
              Discover our signature designs, meticulously crafted with attention to detail and a passion for timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredCollections.map((collection, index) => (
              <div 
                key={collection.id}
                className={cn(
                  "transition-all duration-700 transform",
                  isLoaded 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-20",
                  { "transition-delay-300": index === 1, "transition-delay-600": index === 2 }
                )}
              >
                <CollectionCard
                  id={collection.id}
                  title={collection.title}
                  description={collection.description}
                  imageUrl={collection.imageUrl}
                  category={collection.category}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/collections"
              className="inline-flex items-center text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              <span>View All Collections</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6">The Art of Bespoke Fashion</h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                At Design By Derby, we believe that fashion is a form of self-expression, a canvas for your unique style and personality.
              </p>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Each piece is thoughtfully designed and meticulously crafted in our Sunyani Accra studio, blending traditional techniques with contemporary aesthetics to create timeless elegance that transcends trends.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-black text-white px-4 py-2 md:px-6 md:py-3 hover:bg-gray-800 transition-colors"
              >
                <span>About Derby</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="/lovable-uploads/d4cadf05-d803-4e06-b9de-b9c208bd095a.png"
                  alt="Design By Derby Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-medium">Our Services</h2>
            <div className="divider"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-2">
              From concept to creation, we offer a range of services to bring your fashion vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl md:text-4xl mb-4 md:mb-5">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/booking"
              className="inline-flex items-center bg-black text-white px-4 py-2 md:px-6 md:py-3 hover:bg-gray-800 transition-colors"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-medium">Client Stories</h2>
            <div className="divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <blockquote key={item} className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 text-sm md:text-base">
                  "Design By Derby created my dream wedding gown. The attention to detail and personalized experience exceeded all my expectations."
                </p>
                <footer className="font-medium text-sm md:text-base">— Sarah Johnson</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6">Ready to Create Your Perfect Look?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-2">
            Book a consultation with our design team and start your journey towards a unique, personalized fashion experience.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center bg-white text-black px-6 py-2 md:px-8 md:py-3 hover:bg-gray-100 transition-colors"
          >
            <span>Book Now</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
