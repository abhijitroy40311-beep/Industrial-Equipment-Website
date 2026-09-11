import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '../data/constants';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <a
        href={CONTACT.phoneUrl}
        className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 hover:scale-110 transition-all duration-300 md:hidden"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5" />
      </a>
      
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20b858] hover:scale-105 transition-all duration-300"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6 md:w-5 md:h-5 md:mr-2" />
        <span className="hidden md:inline font-medium">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingContact;
