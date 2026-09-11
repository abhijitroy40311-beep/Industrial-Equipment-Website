import { useState } from 'react';
import Section, { SectionHeader } from '../components/Section';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import SEO from '../components/SEO';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main>
      <SEO title="Industrial Equipment & Machinery" description="Browse our extensive range of high-quality industrial equipment and machinery manufactured for diverse industries." url="/products" />
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/products-hero.webp"
            width="1200"
            height="600"
            loading="eager" 
            fetchPriority="high"
            alt="Products background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Industrial Equipment & Machinery
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our range of industrial equipment designed for different production and business needs. Built for reliability.
          </p>
        </div>
      </section>

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-sm font-medium text-sm transition-colors border-2 ${
                activeCategory === cat 
                  ? 'border-orange-600 bg-orange-600 text-white' 
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
            <p className="text-slate-600">Please check back later or contact us for custom requirements.</p>
          </div>
        )}
      </Section>
    </main>
  );
};

export default Products;
