import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, Heart, SlidersHorizontal, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Roses', 'Lilies', 'Orchids', 'Tulips', 'Daisies'];

const products = [
  {
    id: 1,
    name: 'Pink Elegance',
    category: 'Roses',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1974&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Blush Bouquet',
    category: 'Lilies',
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1974&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Rose Delight',
    category: 'Roses',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1974&auto=format&fit=crop',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Soft Peonies',
    category: 'Daisies',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1974&auto=format&fit=crop',
    rating: 5.0
  }
];

export function Home() {
  const { t, language, toggleLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FDF8F9] pb-24 font-sans text-gray-800">
      
      {/* Top Header - App Style */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 pt-8 pb-4 flex justify-between items-center"
      >
        <div>
          <h1 className="text-gray-500 text-sm font-medium">Welcome to</h1>
          <h2 className="text-2xl font-bold text-gray-900">Bob Flower Store</h2>
        </div>
        <motion.button 
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-50"
        >
          <Globe className="w-5 h-5 text-pink-500" />
          <span className="text-sm font-semibold text-gray-700">{language === 'ar' ? 'English' : 'العربية'}</span>
        </motion.button>
      </motion.header>

      {/* Search Bar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="container mx-auto px-6 mb-8"
      >
        <div className="flex gap-4">
          <div className="flex-1 bg-white rounded-2xl flex items-center px-4 py-3 shadow-sm border border-pink-50">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search beautiful flowers..." 
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <motion.button 
            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 p-4 rounded-2xl text-white shadow-md shadow-pink-200"
            title="Reset Filters"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-6 mb-10"
      >
        <div className="bg-pink-100 rounded-3xl p-8 relative overflow-hidden flex items-center justify-between">
          <div className="relative z-10 w-2/3">
            <span className="bg-white/80 text-pink-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block backdrop-blur-sm">
              Limited Offer
            </span>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
              Get 20% Off <br/>On Roses
            </h3>
            <p className="text-gray-600 mb-6 text-sm">Make someone smile today.</p>
            <motion.a 
              href="tel:0791809728"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-xl font-medium text-sm shadow-lg shadow-gray-900/20"
            >
              Order Now
            </motion.a>
          </div>
          {/* Decorative Flower Graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-90 mix-blend-multiply">
            <img 
              src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop" 
              alt="Roses" 
              className="w-full h-full object-cover rounded-l-full scale-125 translate-x-8"
            />
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex overflow-x-auto hide-scrollbar px-6 gap-3 pb-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-200' 
                  : 'bg-white text-gray-600 border border-pink-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Popular Products Header */}
      <div className="container mx-auto px-6 flex justify-between items-end mb-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-gray-900"
        >
          Popular
        </motion.h2>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-pink-500 font-medium text-sm hover:underline"
        >
          View All
        </motion.button>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
          }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-3 shadow-sm border border-pink-50 relative group"
              >
                {/* Heart Button */}
                <button className="absolute top-5 right-5 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                
                {/* Image */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-pink-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="px-2 pb-2 text-center">
                  <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
                </div>
              </motion.div>
            ))}
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-12 text-center text-gray-500"
              >
                No flowers found matching your search.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

    </div>
  );
}
