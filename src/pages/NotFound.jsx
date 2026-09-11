import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <main>
      <SEO title="Page Not Found" description="The requested page could not be found." url="/404" />
      <Section className="min-h-[70vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold text-slate-900 tracking-tight mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          The page you are looking for may have moved or does not exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">Contact Us</Button>
        </div>
      </Section>
    </main>
  );
};

export default NotFound;
