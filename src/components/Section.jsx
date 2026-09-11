const Section = ({ 
  children, 
  className = '', 
  bg = 'white', 
  id 
}) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
    accent: 'bg-blue-900 text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ title, subtitle, centered = false, light = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default Section;
