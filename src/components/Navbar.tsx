
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 backdrop-blur-md z-50 shadow-lg shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">Oyeniyi Omotola</Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-purple-200 transition-colors">Home</Link>
              <Link to="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-purple-100 hover:text-white transition-colors">Projects</Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-purple-100 hover:text-white transition-colors">About</Link>
              <Button variant="secondary" asChild className="bg-white/10 text-white hover:bg-white/20 shadow-md">
                <Link to="/contact" className="px-3 py-2">Contact</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-100 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-purple-600 to-indigo-700 shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-500/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-purple-100 hover:bg-purple-500/20 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-purple-100 hover:bg-purple-500/20 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-purple-100 hover:bg-purple-500/20 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
