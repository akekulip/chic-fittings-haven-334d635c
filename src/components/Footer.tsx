
import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <img
              src="/lovable-uploads/7b4fa566-915f-49fa-a789-682508232654.png"
              alt="Design By Derby"
              className="h-12 invert"
            />
            <p className="text-gray-300 mt-4 max-w-sm">
              Luxury fashion design in Sunyani Accra, specializing in bespoke gowns, 
              bridal wear, and high-end fashion pieces that celebrate elegance and individuality.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <NavLink to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </NavLink>
              <NavLink to="/collections" className="text-gray-300 hover:text-white transition-colors">
                Collections
              </NavLink>
              <NavLink to="/booking" className="text-gray-300 hover:text-white transition-colors">
                Book Fitting
              </NavLink>
              <NavLink to="/about" className="text-gray-300 hover:text-white transition-colors">
                About Derby
              </NavLink>
              <NavLink to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-300 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Design Studio, Sunyani Accra, Ghana
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-300" />
                <a href="tel:+233000000000" className="text-gray-300 hover:text-white transition-colors">
                  +233 00 000 0000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-300" />
                <a href="mailto:contact@designsbyderby.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@designsbyderby.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider mt-12 mb-6 mx-0 w-full bg-white/10"></div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Designs By Derby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
