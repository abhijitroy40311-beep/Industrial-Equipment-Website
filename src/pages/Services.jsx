import Section, { SectionHeader } from '../components/Section';
import Button from '../components/Button';
import { services } from '../data/services';
import { Factory, Settings, Wrench, CheckCircle, PenTool, Users } from 'lucide-react';
import SEO from '../components/SEO';

const iconMap = {
  'factory': Factory,
  'settings': Settings,
  'wrench': Wrench,
  'check-circle': CheckCircle,
  'tool': PenTool,
  'users': Users
};

const Services = () => {
  return (
    <main>
      <SEO title="Industrial Machinery Services & Support" description="Professional installation, maintenance, and support services for your industrial machinery and equipment." url="/services" />
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/services-hero.webp"
            width="1200"
            height="600"
            loading="eager" 
            fetchPriority="high"
            alt="Services background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Industrial Services & Support
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Beyond manufacturing, we provide complete support to ensure your equipment runs efficiently and reliably.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Settings;
            return (
              <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 group hover:border-orange-500 transition-colors">
                <div className="w-14 h-14 bg-slate-50 text-orange-600 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section bg="light" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Need Help With a Machinery Requirement?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your project, production capacity, and application. Our team will help you understand the available options.
          </p>
          <Button to="/contact" className="px-8 text-lg">Contact Our Team</Button>
        </div>
      </Section>
    </main>
  );
};

export default Services;
