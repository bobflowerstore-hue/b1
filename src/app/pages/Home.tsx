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
  "https://scontent.famm9-1.fna.fbcdn.net/v/t51.82787-15/630001742_17911082136309220_3273409095490570896_n.jpg?stp=dst-jpegr_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGBfBSUkDNkh9Tczb1RJlsk3a47bJ5VSFTdrjtsnlVIVPWpf-Gl5dgxB0Jr9RnDO7pA72fL5kgI2RcYI3aOAChl&_nc_ohc=3gCmRjiqrigQ7kNvwH1QvoJ&_nc_oc=Adraxycyp0rFUbmZ8dq42DHyka-q_j0rDO36T4agEk2hTMEkbdV7Ms6vUGqcs5LPxao&_nc_zt=23&se=-1&_nc_ht=scontent.famm9-1.fna&_nc_gid=86KORojKlZt5dhQLx7Z-KQ&_nc_ss=7b2a8&oh=00_Af5h74kOXSVUaV34BQ6O-RoXYLo2gXUdVv6zu6DWCTwGOQ&oe=6A08015F",
  "https://scontent.famm2-3.fna.fbcdn.net/v/t51.82787-15/627865290_17910718830309220_6255008861173746238_n.jpg?stp=dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGgWDX5y1O2AqU9b57Xapp6i8CYfr9tRl-LwJh-v21GXwe_PzZKeKUCBb8WOlqcOT0nA3m8VrtYSw6HhxndSjTy&_nc_ohc=1cessldK4sMQ7kNvwETfp1U&_nc_oc=AdrDx1m8Zg-XupieQITFREEWr7uJtl2Z7Btlt9-wkckza6ZEXXt7MOLKJeARzlhxF4Q&_nc_zt=23&se=-1&_nc_ht=scontent.famm2-3.fna&_nc_gid=uDALSV14NL1hPzKy9UrIQQ&_nc_ss=7b2a8&oh=00_Af6L-GZJVE7uWFLA7bA3JEG2WLZb1fnvKHeit4StexEScw&oe=6A07EBA3",
  "https://scontent.famm2-3.fna.fbcdn.net/v/t39.30808-6/618770316_122196961430498856_3412782017732780429_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEoelgKAZ3yPgF2fgzdfwD8diRIMxGZz6t2JEgzEZnPq0Xz4Rzl_c3g5VHmj9bA_b79-oFqltf9ijY8KuDCIDAh&_nc_ohc=IRJN5PNf1y4Q7kNvwExewB9&_nc_oc=Adqh1vaL_u1XujrMrOqONbcDqmqIKnPDBra5gCuc7KguJHNJAcL6VHafKZFJjve8NuE&_nc_zt=23&_nc_ht=scontent.famm2-3.fna&_nc_gid=W2dE0KNV3ClvLUeIvpVNUw&_nc_ss=7b2a8&oh=00_Af6CDvvcDd1B-o8VjzQfdOIN3E9zla_f1NdHz-dhqq5xbw&oe=6A07F5E3"
];

const products = [
  {
    id: 1,
    nameKey: 'productPinkElegance',
    category: 'Roses',
    image: 'https://scontent.famm12-1.fna.fbcdn.net/v/t39.30808-6/655305732_122204549354498856_678498842098484629_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeE39-OVFeaC-TAVZyTXrxlvYhiMi5rRSwZiGIyLmtFLBmIXwJAa0Sste09GnP2lLcbCba_cyTZq4k1-Wa1KRA0G&_nc_ohc=wHgp9MOlC08Q7kNvwHQsJTR&_nc_oc=AdrAmnQJMfR767_y5hS0qG96OUyy39vR7OlbOu6WD1z_yPlOjJ-lo2QIu2G70SEUGS4&_nc_zt=23&_nc_ht=scontent.famm12-1.fna&_nc_gid=-DeBE8XRx29XWu3ryAvMNg&_nc_ss=7b2a8&oh=00_Af4cttg4JFXO2SeFy5TYIs3LdpcHuApDyBzksjuw3PXg8g&oe=6A080F06',
    rating: 4.8
  },
  {
    id: 2,
    nameKey: 'productBlushBouquet',
    category: 'Bouquets of flowers',
    image: 'https://scontent.famm9-1.fna.fbcdn.net/v/t39.30808-6/656481328_122204690582498856_4658411384429805310_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFcFHuTe8opeUk3oz7L9OSoIUYJspFXa9chRgmykVdr112V-ka-ZEJlzdVvXH9rGcrCWhrW3DFZYm6joPV6hC5t&_nc_ohc=kweppTIM-foQ7kNvwGcvdYo&_nc_oc=AdoudUzvvCCS6WxOlkZ9tO-cLmOgpKUZToGTTzBxbte9zYXvPajpMao-uqCQKPkjQ8c&_nc_zt=23&_nc_ht=scontent.famm9-1.fna&_nc_gid=Z3f73A7LROOWMPzgrlJgPw&_nc_ss=7b2a8&oh=00_Af4YXcmJKn4zsYukrDgVcSLaQlbBQRdVBX2DcGXRcCrmqQ&oe=6A081262',
    rating: 4.9
  },
  {
    id: 3,
    nameKey: 'productRoseDelight',
    category: 'Roses',
    image: 'https://scontent.famm12-1.fna.fbcdn.net/v/t39.30808-6/659117177_122204919578498856_2539364044619553435_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHZAh5XexXaZ5LY6ThbIMLG5pSngnmDRA7mlKeCeYNEDhg39DTBlL8RaFeZf81qOB0aJ-RFKt4KzJBJKRsxg35l&_nc_ohc=4brSVBa2WKEQ7kNvwHyEbxf&_nc_oc=AdrbpTtbTW08Kh4uY1yo7M4NHQpB6TMts5EMNimO8sLf_IhR8buQjx8RGZdwUgTJEdo&_nc_zt=23&_nc_ht=scontent.famm12-1.fna&_nc_gid=9JSu-CwCFisy-AqVGQ0TJg&_nc_ss=7b2a8&oh=00_Af48odGLSFVx5WfwBBU8W212jXk8QwGESMwJS9rStbTv_w&oe=6A07FF3F',
    rating: 4.7
  },
  {
    id: 4,
    nameKey: 'productSoftPeonies',
    category: 'Occasions',
    image: 'https://scontent.famm9-1.fna.fbcdn.net/v/t39.30808-6/658141543_122205248600498856_2769302875691567087_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF86BksV1h136GJN_nhxjDTvl04vp6_Q9a-XTi-nr9D1njCbQFeWlw-TjBjya0pkkoGnVYZPP4gS_pwL8Q67P6o&_nc_ohc=jwQeBoYh7pUQ7kNvwGvwxMG&_nc_oc=AdprTi_YuFQUTjRnuuTwgJkFHcAaWgd5FH-PSklHxn2PbTDUlEDqBv5NpSDhZmQawTI&_nc_zt=23&_nc_ht=scontent.famm9-1.fna&_nc_gid=jL7HdUFzzVxonlVITmTx9A&_nc_ss=7b2a8&oh=00_Af5Q6csfWLfabqW0wr5LkTGQ3coMH4vv-fKHUDaB1JQKEw&oe=6A07F855',
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
