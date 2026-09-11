import Section, { SectionHeader } from '../components/Section';
import Button from '../components/Button';
import { COMPANY, CONTACT } from '../data/constants';
import { CheckCircle2, Factory, Settings, Users, PenTool, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const values = [
    { icon: ShieldCheck, title: "Quality", desc: "We focus on reliable materials and proper testing before any machine is dispatched." },
    { icon: Settings, title: "Reliability", desc: "We build machines engineered specifically for regular, demanding industrial use." },
    { icon: Users, title: "Customer Focus", desc: "We first understand what the customer actually needs before suggesting a solution." },
    { icon: PenTool, title: "Support", desc: "We stay available for questions, guidance, and service requirements post-delivery." }
  ];

  return (
    <main>
      <SEO title="About Us | Industrial Machinery Manufacturer" description="Learn more about our manufacturing capabilities, experience, and commitment to quality industrial equipment." url="/about" />
      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/about-hero.webp"
            width="1200"
            height="600"
            loading="eager" 
            alt="Manufacturing background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Engineering Reliable Equipment for Growing Industries
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Manufacturing practical, heavy-duty industrial machinery designed for daily production use.
          </p>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Who We Are</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We are an established industrial equipment manufacturer dedicated to supplying reliable machinery for businesses across India. With {COMPANY.established} of experience, we understand the realities of the factory floor.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight mt-12">What We Do</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We design, manufacture, and supply robust industrial equipment for fabrication, material handling, packaging, and processing. Our focus is on building machines that perform consistently without unnecessary complexity.
            </p>
            <ul className="space-y-4 mt-8">
              {['Practical engineering over complex features', 'Heavy-duty materials for long life', 'Thorough testing before delivery', 'Transparent pricing and timelines'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/images/about-factory.webp" alt="Factory floor" width="600" height="400" loading="lazy" className="rounded-sm w-full h-64 object-cover" />
            <img src="/images/about-equipment.webp" alt="Industrial equipment" width="600" height="400" loading="lazy" className="rounded-sm w-full h-64 object-cover sm:translate-y-8" />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section bg="light">
        <SectionHeader 
          title="Our Core Values" 
          subtitle="The principles that guide our manufacturing and customer service."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-900 text-white p-10 rounded-sm">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              To provide reliable, practical machines that help businesses work better, increase production efficiency, and reduce downtime through strong engineering and dedicated support.
            </p>
          </div>
          <div className="bg-orange-600 text-white p-10 rounded-sm">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
            <p className="text-lg text-orange-100 leading-relaxed">
              To become the most trusted industrial equipment partner for businesses across India, known for delivering straightforward solutions that perform consistently.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="light" className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Discuss Your Requirement With Us</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Our technical team is ready to understand your application and suggest the right machinery for your facility.
        </p>
        <Button to="/contact">Contact Our Team</Button>
      </Section>
    </main>
  );
};

export default About;
