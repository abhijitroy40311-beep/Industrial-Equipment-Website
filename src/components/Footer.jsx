import { Link } from 'react-router-dom';
import { Factory, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT, COMPANY } from '../data/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="bg-blue-900 p-2 rounded-sm">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">INDUSTRIAL<span className="text-orange-500">MFG</span></span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              {COMPANY.shortDescription} Built with strong materials, practical engineering, and quality checks.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>{CONTACT.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Products & Machinery</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services & Support</Link></li>
              <li><Link to="/workflow" className="hover:text-orange-500 transition-colors">Our Workflow</Link></li>
              <li><Link to="/industries" className="hover:text-orange-500 transition-colors">Industries We Serve</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Equipment</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Fabrication Equipment</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Material Handling</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Packaging Machinery</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Processing Equipment</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Industrial Automation</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Custom Machinery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={CONTACT.phoneUrl} className="flex items-center hover:text-orange-500 transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-orange-500" />
                  <span className="font-medium text-white text-lg">{CONTACT.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block text-green-400 hover:text-green-300 font-medium transition-colors">
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center hover:text-orange-500 transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-orange-500" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <p className="text-sm font-medium text-white mb-3">Need an industrial machine?</p>
              <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-sm font-medium transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} {COMPANY.name}. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
