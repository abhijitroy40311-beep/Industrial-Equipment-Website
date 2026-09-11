import { useState } from 'react';
import Button from './Button';
import { CONTACT } from '../data/constants';
import { X, CheckCircle2 } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pre-fill WhatsApp message for this specific product
  const productWhatsAppUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello, I am interested in the ${product.name}. Please share the details and quotation.`)}`;

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={product.image}
            width="600"
            height="450" 
            alt={product.name} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-xs font-semibold text-orange-600 tracking-wider uppercase mb-2 block">{product.category}</span>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
          <p className="text-slate-600 mb-4 text-sm flex-grow">{product.summary}</p>
          
          <div className="pt-4 border-t border-slate-100 flex gap-3 mt-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex-1 text-center py-2.5 border-2 border-slate-900 text-slate-900 font-medium text-sm hover:bg-slate-900 hover:text-white transition-colors rounded-sm"
            >
              View Details
            </button>
            <Button to="/contact" className="flex-1 py-2.5">Quote</Button>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl flex flex-col md:flex-row">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              aria-label="Close product details" className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-2/5 bg-slate-100 min-h-[300px]">
              <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              width="800"
              height="600"
              loading="lazy"
              />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
              <span className="text-xs font-semibold text-orange-600 tracking-wider uppercase mb-2">{product.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{product.name}</h2>
              <p className="text-slate-600 mb-6">{product.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 border-b pb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 border-b pb-2">Applications</h4>
                  <ul className="space-y-2">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-3 border-b pb-2">Technical Specifications</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <tbody>
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx} className="border-b border-slate-100 last:border-0">
                          <th className="py-2 pr-4 font-medium text-slate-700 w-1/3">{spec.label}</th>
                          <td className="py-2 text-slate-600">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <Button to="/contact" className="flex-1">Request Product Quote</Button>
                <Button href={productWhatsAppUrl} variant="whatsapp" className="flex-1">
                  Ask on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
