import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import { CONTACT } from '../data/constants';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    industry: '',
    requirement: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!formData.company.trim()) newErrors.company = 'Please enter your company name.';
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.city.trim()) newErrors.city = 'Please enter your city.';
    if (!formData.requirement.trim()) newErrors.requirement = 'Please select a requirement type.';
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your requirement.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError('');
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsSubmitting(false);
        navigate('/thank-you');
      } catch (err) {
        setIsSubmitting(false);
        setSubmitError('We could not send your enquiry. Please try again or call 8777202487.');
      }
    }
  };

  return (
    <main>
      <SEO title="Contact Us | Industrial Machinery Manufacturer" description="Get in touch for quotes, specifications, or support for our industrial machinery and equipment." url="/contact" />
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/contact-hero.webp"
            width="1200"
            height="600"
            loading="eager" 
            fetchPriority="high"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Let's Discuss Your Requirement
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tell us what machine or equipment you are looking for. Our team will get back to you with a practical solution.
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-1">Phone</h3>
                  <a href={CONTACT.phoneUrl} className="text-slate-600 hover:text-orange-600 text-lg">{CONTACT.phoneFormatted}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-1">WhatsApp</h3>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600 text-lg">{CONTACT.phoneFormatted}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-1">Email</h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-slate-600 hover:text-orange-600">{CONTACT.email}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-1">Location & Hours</h3>
                  <p className="text-slate-600 mb-2">{CONTACT.address}</p>
                  <p className="text-sm font-medium text-slate-500">{CONTACT.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send an Enquiry</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-sm border border-red-200" role="alert">
                    {submitError}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-sm border ${errors.name ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="Enter your name"
                    />
                    {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                    <input id="company" type="text" name="company" value={formData.company} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-sm border ${errors.company ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                      placeholder="Your company name"
                    />
                    {errors.company && <p id="company-error" className="text-red-500 text-xs mt-1" role="alert">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-sm border ${errors.phone ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                      placeholder="Enter your 10-digit mobile number"
                    />
                    {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-sm border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                    <input id="city" type="text" name="city" value={formData.city} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-sm border ${errors.city ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                      placeholder="Delivery city"
                    />
                    {errors.city && <p id="city-error" className="text-red-500 text-xs mt-1" role="alert">{errors.city}</p>}
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
                    <select id="industry" name="industry" value={formData.industry} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    >
                      <option value="">Select Industry</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Construction">Construction</option>
                      <option value="Packaging">Packaging</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Food Processing">Food Processing</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Warehousing">Warehousing</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <label htmlFor="requirement" className="block text-sm font-medium text-slate-700 mb-2">Requirement *</label>
                    <select id="requirement" name="requirement" value={formData.requirement} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-sm border ${errors.requirement ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white`}
                    >
                      <option value="">Select Option</option>
                      <option value="Machine Quotation">Machine Quotation</option>
                      <option value="Custom Project">Custom Project</option>
                      <option value="Distributor Enquiry">Distributor Enquiry</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                    {errors.requirement && <p id="requirement-error" className="text-red-500 text-xs mt-1" role="alert">{errors.requirement}</p>}
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">Interested Product</label>
                    <input id="product" type="text" name="product" value={formData.product} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Machine name (Optional)"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">Quantity</label>
                    <input id="quantity" type="number" name="quantity" min="1" value={formData.quantity} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="e.g. 1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4"
                    className={`w-full px-4 py-3 rounded-sm border ${errors.message ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    placeholder="Describe your capacity, space, and application requirements..."
                  ></textarea>
                  {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-sm transition-colors text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
