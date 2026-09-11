import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { CONTACT } from '../data/constants';
import { CheckCircle, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const ThankYou = () => {
  return (
    <main>
      <SEO title="Thank You" description="Thank you for contacting us. We will get back to you shortly." url="/thank-you" noindex={true} />
      <Section className="min-h-[70vh] flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 mx-auto">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Thank You for Contacting Us
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          We have received your enquiry. Our team will review your requirement and contact you soon.
        </p>

        <div className="bg-slate-50 p-6 md:p-8 rounded-sm border border-slate-100 max-w-xl mx-auto w-full mb-10">
          <p className="text-slate-900 font-bold mb-4 text-lg">Need immediate help?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href={CONTACT.phoneUrl} icon={Phone} className="w-full sm:w-auto">
              Call Now
            </Button>
            <Button href={CONTACT.whatsapp} variant="whatsapp" icon={MessageCircle} className="w-full sm:w-auto">
              Chat on WhatsApp
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6 italic">
            Please keep your phone available so our team can reach you.
          </p>
        </div>

        <Link to="/" className="text-slate-600 hover:text-orange-600 font-medium flex items-center transition-colors">
          &larr; Back to Home
        </Link>
      </Section>
    </main>
  );
};

export default ThankYou;
