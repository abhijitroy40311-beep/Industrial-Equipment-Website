import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Factory } from 'lucide-react';
import TopBar from './TopBar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Workflow', path: '/workflow' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-blue-900 p-2 rounded-sm group-hover:bg-orange-600 transition-colors">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">INDUSTRIAL<span className="text-orange-600">MFG</span></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 ${location.pathname === link.path ? 'text-orange-600' : 'text-slate-700'}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link 
                to="/contact" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-sm font-medium text-sm transition-colors inline-block"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-3 text-base font-medium rounded-md ${location.pathname === link.path ? 'bg-slate-50 text-orange-600' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-orange-600 text-white px-4 py-3 rounded-sm font-medium"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
