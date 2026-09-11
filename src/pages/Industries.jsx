import Section, { SectionHeader } from '../components/Section';
import Button from '../components/Button';
import { industries } from '../data/industries';
import SEO from '../components/SEO';

const Industries = () => {
  return (
    <main>
      <SEO title="Industries We Serve | Industrial Equipment" description="We provide specialized industrial equipment solutions for manufacturing, construction, packaging, food processing, and more." url="/industries" />
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/industries-hero.webp"
            width="1200"
            height="600"
            loading="eager" 
            fetchPriority="high"
            alt="Industries background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Providing reliable manufacturing and equipment solutions across diverse industrial sectors.
          </p>
        </div>
      </section>

      <Section bg="light">
        <div className="space-y-16">
          {industries.map((industry, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = industry.icon;
            
            return (
              <div key={industry.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                <div className="w-full md:w-1/2 relative">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                    <img
                    src={industry.image}
                    width="600"
                    height="400" loading="lazy"
                     
                      alt={`${industry.name} equipment`} 
                      className="w-full h-full object-cover"
                      
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-600 rounded-sm flex items-center justify-center text-white shadow-xl hidden sm:flex">
                    <Icon className="w-10 h-10" />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{industry.name}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="bg-white p-6 rounded-sm border border-slate-100 mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2">Common Requirements:</h4>
                    <p className="text-slate-600 text-sm mb-4">{industry.requirements}</p>
                    
                    <h4 className="font-semibold text-slate-900 mb-2">Suitable Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.categories.map((cat, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 text-xs px-3 py-1.5 rounded-sm font-medium">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button to="/contact" variant="outline">Enquire for {industry.name}</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </main>
  );
};

export default Industries;
