import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const portfolioImages = [
  { id: 1, url: 'https://scontent.fadj1-1.fna.fbcdn.net/v/t39.30808-6/659520722_122205151700498856_221797605128655691_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFstOFrGO_q2LT1dXlFf0wwduRiwyn0Hxl25GLDKfQfGahiO86yGIpE5lrRCYoV24Hf6aDttdaIIoSzvWg9ylxu&_nc_ohc=jpgDRT8wEBoQ7kNvwG2cdTS&_nc_oc=AdrmvpavPoEKCrkvUXfN1Ap5cL9Z4V99cG0yuCIXG-pztDr8j93zAf0z3-fAZFPDy6c&_nc_zt=23&_nc_ht=scontent.fadj1-1.fna&_nc_gid=-9tG6c6u7ELhK4FoM5Nfcg&_nc_ss=7b2a8&oh=00_Af7dyCJfwSx1OM49FMiPEA5mSj9YlYx1ewEWHIEyyXX4Pw&oe=6A07FD3F', title: 'Pink Roses' },
  { id: 2, url: 'https://scontent.fadj1-1.fna.fbcdn.net/v/t39.30808-6/658916732_122204916080498856_5436379757486246401_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHUCTpwIGB3Fh9DuT2JvYKe9ZB23IMl-M_1kHbcgyX4zztutS5ra-lhThu6OASuNye5CJ9GHBNmxIM1HwwM1PL0&_nc_ohc=pbX49mtj2BMQ7kNvwGgdpKM&_nc_oc=Ado2UBFpxXsRCuimYehJKHQAZK1J_mSCbtiHvq5_lXzsXKj5O-DJznom6uPQXHOT_Z4&_nc_zt=23&_nc_ht=scontent.fadj1-1.fna&_nc_gid=Z06h4S7nmeqzXappqUZJ0Q&_nc_ss=7b2a8&oh=00_Af6R8Vysy7JC2K1lrbACxNUsZqOQeXdk6hW3JDObuQz3tw&oe=6A080E46', title: 'Wedding Bouquet' },
  { id: 3, url: 'https://scontent.famm12-1.fna.fbcdn.net/v/t39.30808-6/654217659_122204175842498856_6650518824819890279_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEM2jBxRWa8PCp0ngmbp1CigWTTDRM7hEmBZNMNEzuESY0D7FSdwcfUte07dzeLoskV1naBNWyooLP2f9pkOFaC&_nc_ohc=-QgjuNolYvgQ7kNvwG0Z-ue&_nc_oc=AdqtFu2xD0peRcaGJuHp7LbEZKTM4JPOk5n-Pqc_Z4IyHtj6coVB6FvHR3YURuQ3aZM&_nc_zt=23&_nc_ht=scontent.famm12-1.fna&_nc_gid=jtR8sf65T91kSudNcIYUjg&_nc_ss=7b2a8&oh=00_Af5BfAo-o_YGZr2G_Fzc5d_G5WPEnKdsHjQbq2K0B4jhsQ&oe=6A07EB97', title: 'Rose Delight' },
  { id: 4, url: 'https://scontent.fadj1-1.fna.fbcdn.net/v/t39.30808-6/652313414_122203606772498856_5771495969311760004_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGO1_CjqcCMhbsw2CHsQ-SZcpkSPgL3Cw1ymRI-AvcLDaHNhbmfoh0Hd-KBbbOMpbYx3loxOcKnTH_tdfXcXRDL&_nc_ohc=4NnLYi5WnsMQ7kNvwGBJvCh&_nc_oc=AdpQ-W5dEFirVt8172po0kZYy4XxJRLFniMi5tZ_CkRmjrKDr-bsquBxyKi6_yonyUg&_nc_zt=23&_nc_ht=scontent.fadj1-1.fna&_nc_gid=N7ieLA9CKG_V_7P6wD7Pdg&_nc_ss=7b2a8&oh=00_Af7rRwTsO2TtdHKddRbZydjZ8Z98EROoNGDWKKho0C-QUA&oe=6A07E87A', title: 'Soft Peonies' },
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
