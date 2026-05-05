import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon } from './Icons';
import logo from '../assets/MXMDEV-LOGO.svg'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-theme-muted shadow-sm z-50 border-b border-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-4">
               <img 
              src={logo} 
              alt="MXMDEV Logo" 
              className="h-10 w-13 object-contain drop-shadow-sm text-theme-dark"
            />
            <span className="font-bold text-3xl tracking-tight text-theme-dark">MXM DEV</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`font-bold transition-colors ${
                  location.pathname === link.path 
                    ? 'text-theme-dark drop-shadow-sm hover:scale-105 underline underline-offset-4 decoration-2' // Active state: White text
                    : 'text-gray-800 hover:text-theme-accent hover:scale-105' // Inactive: Dark text, turns white on hover
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-800 hover:text-white transition-colors p-2"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-dark/20 p-4 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="block px-3 py-3 rounded-md font-bold text-gray-800 hover:bg-primary-dark hover:text-white transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;