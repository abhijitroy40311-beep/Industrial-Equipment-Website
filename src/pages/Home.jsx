import { Link } from 'react-router-dom';
import Section, { SectionHeader } from '../components/Section';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { products } from '../data/products';
import { industries } from '../data/industries';
import { workflowSteps, services } from '../data/services';
import { faqs } from '../data/faqs';
import { CONTACT, COMPANY } from '../data/constants';
import { ShieldCheck, Settings, PenTool, Wrench, Clock, Truck, ChevronDown, ChevronUp, Factory, CheckCircle, Users } from 'lucide-react';

const iconMap = {
  'factory': Factory,
  'settings': Settings,
  'wrench': Wrench,
  'check-circle': CheckCircle,
  'tool': PenTool,
  'users': Users
};
import { useState } from 'react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const whyChooseUs = [
    { icon: ShieldCheck, title: "Strong Build", desc: "Machines designed with durable materials and practical engineering." },
    { icon: Settings, title: "Quality Checked", desc: "Every machine is thoroughly checked before delivery." },
    { icon: PenTool, title: "Custom Solutions", desc: "We can adapt machines to specific production requirements." },
    { icon: Wrench, title: "Easy Maintenance", desc: "Designed for practical servicing and maintenance." },
    { icon: Clock, title: "Fast Support", desc: "Our technical team is available to help when you need us." },
    { icon: Truck, title: "Reliable Delivery", desc: "Clear communication from initial enquiry to final delivery." }
  ];

  return (
    <main>
      <SEO 
        title="Industrial Equipment & Machinery Manufacturer in India" 
        description="We manufacture and supply dependable industrial equipment designed for daily factory and business use."
        url="/"
      />
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
              Built for Indian Industries
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Reliable Industrial Machinery Built for Real Work
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              We manufacture and supply dependable industrial equipment designed for daily factory and business use. Built with strong materials, practical engineering, and quality checks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button to="/contact">Request a Quote</Button>
              <Button href={CONTACT.whatsapp} variant="whatsapp">WhatsApp Us</Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-orange-500" /> Quality Checked
              <span className="mx-3 text-slate-300">|</span>
              <Wrench className="w-4 h-4 mr-1.5 text-orange-500" /> Pan India Support
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative">
              <img
                src="/images/home-hero.webp"
                width="800"
                height="600"
                loading="eager" 
                alt="Industrial manufacturing facility with heavy machinery" 
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-orange-600/10 rounded-sm -z-10"></div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS SECTION */}
      <section className="bg-slate-900 py-12 border-b-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{COMPANY.established}</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Industry Experience</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{COMPANY.machinesSupplied}</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Machines Supplied</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{COMPANY.applications}</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Industrial Applications</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">Pan India</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS PREVIEW */}
      <Section id="products-preview" bg="light">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Industrial Equipment</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Explore practical machinery built for reliable performance, easy operation, and long working hours.
            </p>
          </div>
          <Link to="/products" className="text-orange-600 font-medium hover:text-orange-700 transition-colors inline-flex items-center flex-shrink-0">
            View All Equipment &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      {/* 3.5 SERVICES PREVIEW */}
      <Section id="services-preview">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Industrial Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Beyond manufacturing, we provide complete support to ensure your equipment runs efficiently and reliably.
            </p>
          </div>
          <Link to="/services" className="text-orange-600 font-medium hover:text-orange-700 transition-colors inline-flex items-center flex-shrink-0">
            View All Services &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, idx) => {
            const Icon = iconMap[service.icon] || Settings;
            return (
              <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 group hover:border-orange-500 transition-colors">
                <div className="w-12 h-12 bg-slate-50 text-orange-600 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 4. WHY CHOOSE US */}
      <Section bg="light">
        <SectionHeader 
          title="Why Businesses Choose Us" 
          subtitle="We focus on engineering practical solutions that improve your production efficiency without unnecessary complexity."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:border-orange-500/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-50 text-orange-600 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 5. INDUSTRIES SECTION */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Industries We Serve</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Providing reliable manufacturing and equipment solutions across diverse industrial sectors.
            </p>
          </div>
          <Link to="/industries" className="text-orange-600 font-medium hover:text-orange-700 transition-colors inline-flex items-center flex-shrink-0">
            View All Industries &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.slice(0, 8).map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Link key={index} to="/industries" className="group relative block overflow-hidden rounded-sm bg-slate-900 aspect-square">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-300 group-hover:scale-105"
                  loading="lazy" width="600" height="600"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <Icon className="w-10 h-10 text-white mb-3 opacity-90" />
                  <h3 className="text-lg font-bold text-white tracking-wide">{industry.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* 6. WORKFLOW PREVIEW */}
      <Section bg="dark">
        <SectionHeader 
          title="From Enquiry to Delivery" 
          subtitle="A clear and simple process to ensure you get the right equipment for your production needs."
          centered
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {workflowSteps.slice(0, 3).map((step, index) => (
            <div key={index} className="relative p-6 border border-slate-800 bg-slate-800/50 rounded-sm">
              <span className="absolute -top-5 -left-5 w-10 h-10 bg-orange-600 text-white font-bold flex items-center justify-center rounded-sm shadow-lg text-lg">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button to="/workflow" variant="primary">View Complete Process</Button>
        </div>
      </Section>

      {/* 7. TESTIMONIALS (Placeholder approach as requested) */}
      <Section bg="light">
        <SectionHeader 
          title="What Our Clients Say" 
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm relative">
            <div className="text-orange-500/20 absolute top-4 left-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <p className="text-lg text-slate-700 italic mb-6 relative z-10 pt-6">
              "The team understood our requirement clearly and delivered a practical solution for our production setup. The machinery is sturdy and reliable for daily use."
            </p>
            <div>
              <p className="font-bold text-slate-900">Purchase Manager</p>
              <p className="text-sm text-slate-500">Manufacturing Company, Pune</p>
            </div>
          </div>
          <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm relative">
            <div className="text-orange-500/20 absolute top-4 left-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <p className="text-lg text-slate-700 italic mb-6 relative z-10 pt-6">
              "Delivery was on time and the installation support was excellent. The equipment is performing exactly as specified without any major maintenance issues."
            </p>
            <div>
              <p className="font-bold text-slate-900">Plant Head</p>
              <p className="text-sm text-slate-500">Fabrication Unit, Chennai</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. FAQ SECTION */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            title="Frequently Asked Questions" 
            centered
          />
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-sm overflow-hidden"
              >
                <button 
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 bg-white hover:bg-slate-50 flex justify-between items-center transition-colors focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'py-4 border-t border-slate-100 opacity-100 max-h-96' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. FINAL CTA */}
      <section className="bg-orange-600 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Looking for the Right Industrial Machine?</h2>
          <p className="text-xl text-orange-100 mb-10">
            Tell us what you need. Our team will understand your requirement and suggest the right solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" variant="white" className="text-lg px-8">Request a Quote</Button>
            <Button href={CONTACT.phoneUrl} variant="outlineWhite" className="text-lg px-8">Call {CONTACT.phoneFormatted}</Button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
