
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Kids", path: "/kids" },
    { name: "Booking", path: "/booking" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-3 md:py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink to="/" className="z-50">
          <img
            src="/lovable-uploads/7b4fa566-915f-49fa-a789-682508232654.png"
            alt="Design By Derby"
            className="h-8 md:h-12"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm uppercase tracking-wide font-medium relative transition-colors hover:text-black",
                  isActive
                    ? "text-black after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:-bottom-1 after:left-0"
                    : "text-gray-600"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ease-in-out md:hidden z-40",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-lg uppercase tracking-wide font-medium relative transition-colors",
                  isActive
                    ? "text-black after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:-bottom-1 after:left-0"
                    : "text-gray-600"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
