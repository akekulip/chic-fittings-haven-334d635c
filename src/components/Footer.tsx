
import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

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
              bridal wear, high-end fashion pieces, and adorable children's clothing that celebrate elegance and individuality.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/designs_by_derby/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/designsbyderby" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@designs_by_derby" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="lucide lucide-tiktok"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
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
              <NavLink to="/kids" className="text-gray-300 hover:text-white transition-colors">
                Derby's Kids Avenue
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
                  Oti first gate, Sunyani, Ghana
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-300" />
                <a href="tel:+233240360092" className="text-gray-300 hover:text-white transition-colors">
                  +233 24 036 0092
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-300" />
                <a href="mailto:designsbyderby022@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  designsbyderby022@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider mt-12 mb-6 mx-0 w-full bg-white/10"></div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Design By Derby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
