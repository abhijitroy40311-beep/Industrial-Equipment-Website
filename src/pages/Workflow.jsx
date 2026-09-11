import Section, { SectionHeader } from '../components/Section';
import Button from '../components/Button';
import { workflowSteps } from '../data/services';
import { CONTACT } from '../data/constants';
import SEO from '../components/SEO';

const Workflow = () => {
  return (
    <main>
      <SEO title="Our Manufacturing & Delivery Process" description="Understand our transparent workflow from initial enquiry to final delivery and installation of industrial machinery." url="/workflow" />
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/workflow-hero.webp"
            width="1200"
            height="600"
            loading="eager" 
            fetchPriority="high"
            alt="Workflow background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Our Workflow
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A Simple Process From Requirement to Delivery. We believe in clear communication at every step.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 md:-ml-px"></div>

            <div className="space-y-12 py-8">
              {workflowSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex items-center md:justify-between w-full min-h-[4rem]">
                    
                    {/* Number Badge */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center shadow-md border-4 border-white z-10 box-content">
                      <span className="text-xs">{step.num}</span>
                    </div>

                    {/* Content Box */}
                    <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                      <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-100 hover:border-orange-300 transition-colors">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="dark" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Clear Communication at Every Step</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 text-slate-300">
          <div>✓ Transparent discussions</div>
          <div>✓ Clear specifications</div>
          <div>✓ Regular updates</div>
          <div>✓ Quality checks</div>
          <div>✓ Delivery coordination</div>
          <div>✓ Support after delivery</div>
        </div>
        <Button to="/contact" variant="primary">Start Your Project</Button>
      </Section>
    </main>
  );
};

export default Workflow;
