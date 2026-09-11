import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ScrollToTop from './components/ScrollToTop';
import { Suspense, lazy } from 'react';

// Pages - Code splitting
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const Workflow = lazy(() => import('./pages/Workflow'));
const Industries = lazy(() => import('./pages/Industries'));
const Contact = lazy(() => import('./pages/Contact'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AppRoutes() {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div></div>}>
            <div key={location.pathname} className="animate-fade-in">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/workflow" element={<Workflow />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Suspense>
        </div>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
