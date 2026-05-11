import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, Heart, SlidersHorizontal, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  { id: 'All', tKey: 'catAll' },
  { id: 'Bouquets of flowers', tKey: 'catBouquets' },
  { id: 'Roses', tKey: 'catRoses' },
  { id: 'Occasions', tKey: 'catOccasions' }
];

const carouselImages = [
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1600&auto=format&fit=crop"
];

const products = [
  {
    id: 1,
    nameKey: 'productPinkElegance',
    category: 'Roses',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1974&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: 2,
    nameKey: 'productBlushBouquet',
    category: 'Bouquets of flowers',
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1974&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 3,
    nameKey: 'productRoseDelight',
    category: 'Roses',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1974&auto=format&fit=crop',
    rating: 4.7
  },
  {
    id: 4,
    nameKey: 'productSoftPeonies',
    category: 'Occasions',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1974&auto=format&fit=crop',
    rating: 5.0
  }
];

export function Home() {
  const { t, language, toggleLanguage } = useLanguage();

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'All' || product.category === activeCategory;

    const translatedName = t(product.nameKey).toLowerCase();

    const matchesSearch = translatedName.includes(
      searchQuery.toLowerCase()
    );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FDF8F9] pb-24 font-sans text-gray-800">

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 pt-8 pb-4 flex justify-between items-center"
      >
        <div>
          <h1 className="text-gray-500 text-sm font-medium">
            {t('welcome')}
          </h1>

          <h2 className="text-2xl font-bold text-gray-900">
            {t('shopName')}
          </h2>
        </div>

        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-50"
        >
          <Globe className="w-5 h-5 text-pink-500" />

          <span className="text-sm font-semibold text-gray-700">
            {language === 'ar' ? 'English' : 'العربية'}
          </span>
        </motion.button>
      </motion.header>

      {/* Search */}
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
              placeholder={t('searchPlaceholder')}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <motion.button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 p-4 rounded-2xl text-white shadow-md shadow-pink-200"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </motion.button>

        </div>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-6 mb-10"
      >
        <div className="bg-pink-100 rounded-3xl p-8 relative overflow-hidden min-h-[320px] flex items-center">

          {/* Background Carousel */}
          <div className="absolute inset-0 opacity-25 overflow-hidden">

            <AnimatePresence mode="wait">

              <motion.img
                key={currentImageIndex}
                src={carouselImages[currentImageIndex]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                alt="Flowers"
                className="w-full h-full object-cover"
              />

            </AnimatePresence>

          </div>

          {/* Content */}
          <div className="relative z-10 max-w-md">

            <span className="bg-white/80 text-pink-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block backdrop-blur-sm">
              {t('limitedOffer')}
            </span>

            <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight whitespace-pre-line">
              {t('discountTitle')}
            </h3>

            <p className="text-gray-700 mb-6 text-sm">
              {t('smileToday')}
            </p>

            <motion.a
              href="tel:0791809728"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-xl font-medium text-sm shadow-lg"
            >
              {t('shopNow')}
            </motion.a>

          </div>

        </div>
      </motion.div>

      {/* Categories */}
      <div className="flex overflow-x-auto hide-scrollbar px-6 gap-3 pb-4 mb-8">

        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-pink-500 text-white shadow-md shadow-pink-200'
                : 'bg-white text-gray-600 border border-pink-100'
            }`}
          >
            {t(category.tKey)}
          </motion.button>
        ))}

      </div>

      {/* Section Header */}
      <div className="container mx-auto px-6 flex justify-between items-end mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          {t('popular')}
        </h2>

        <button className="text-pink-500 font-medium text-sm hover:underline">
          {t('viewAllPortfolio')}
        </button>

      </div>

      {/* Products */}
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

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

                <button className="absolute top-5 right-5 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-pink-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-pink-50">

                  <img
                    src={product.image}
                    alt={t(product.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                </div>

                <div className="px-2 pb-2 text-center">

                  <h3 className="font-semibold text-gray-900 text-sm">
                    {t(product.nameKey)}
                  </h3>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>

        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            {t('noFlowersFound')}
          </div>
        )}

      </div>

    </div>
  );
}
