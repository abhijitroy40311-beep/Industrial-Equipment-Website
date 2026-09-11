import { Link } from 'react-router-dom';
import { CONTACT } from '../data/constants';
import { Phone, MessageCircle } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p>Manufacturing Reliable Industrial Equipment | Fast Response | Pan India Support</p>
        <div className="flex items-center space-x-6">
          <a href={CONTACT.phoneUrl} className="flex items-center hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2 text-orange-500" />
            <span>Call: {CONTACT.phoneFormatted}</span>
          </a>
          <a 
            href={CONTACT.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-2 text-green-500" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
