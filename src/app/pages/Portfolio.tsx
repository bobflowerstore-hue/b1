import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const portfolioImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1974&auto=format&fit=crop', title: 'Pink Roses' },
  { id: 2, url: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1974&auto=format&fit=crop', title: 'Wedding Bouquet' },
  { id: 3, url: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1974&auto=format&fit=crop', title: 'Rose Delight' },
  { id: 4, url: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1974&auto=format&fit=crop', title: 'Soft Peonies' },
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FDF8F9] pb-24 font-sans text-gray-800">
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 pt-8 pb-4 flex items-center gap-4"
      >
        <Link to="/">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white p-3 rounded-full shadow-sm">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </motion.button>
        </Link>
        <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
      </motion.header>

      {/* Description */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-6 mb-8"
      >
        <p className="text-gray-500">Explore our finest floral arrangements, handcrafted with love and care.</p>
      </motion.div>

      {/* Masonry-like Grid */}
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-2 gap-4"
        >
          {portfolioImages.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 15 } }
              }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl overflow-hidden shadow-sm bg-pink-50 ${
                index % 3 === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <ExternalLink className="text-white/80 w-5 h-5 mt-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
