
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
  centered?: boolean;
  minHeight?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink = "/collections",
  backgroundImage = "/lovable-uploads/17c52977-1b62-4434-bed6-befeffad36a8.png",
  overlay = true,
  centered = true,
  minHeight = "min-h-[80vh]",
}: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className={cn(
        "relative w-full flex items-center overflow-hidden",
        minHeight
      )}
    >
      {/* Background Image with Lazy Loading and Blur Effect */}
      <div className="absolute inset-0 w-full h-full bg-gray-200">
        <div
          className={cn(
            "absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      )}

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6 mx-auto">
        <div 
          className={cn(
            "max-w-3xl space-y-4 md:space-y-6",
            centered ? "text-center mx-auto" : "text-left"
          )}
        >
          <h1 
            className={cn(
              "text-3xl md:text-5xl lg:text-6xl font-semibold text-white hero-text-shadow",
              isLoaded ? "animate-slide-down" : "opacity-0"
            )}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p 
              className={cn(
                "text-base md:text-xl text-white/90 text-balance leading-relaxed px-2 md:px-0",
                isLoaded ? "animate-fade-in" : "opacity-0",
                "animation-delay-200"
              )}
            >
              {subtitle}
            </p>
          )}
          
          {ctaText && (
            <div 
              className={cn(
                "pt-4",
                isLoaded ? "animate-fade-in" : "opacity-0",
                "animation-delay-300"
              )}
            >
              <Link
                to={ctaLink}
                className="inline-flex items-center bg-white text-black px-5 py-2 md:px-6 md:py-3 rounded-none border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300"
              >
                <span>{ctaText}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
