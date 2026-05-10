import { ArrowLeft, User, MapPin, Phone, Mail, Instagram, Facebook, Settings, Bell, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function Contact() {
  return (
    <div className="min-h-screen bg-[#FDF8F9] pb-24 font-sans text-gray-800">
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 pt-8 pb-6 flex items-center gap-4"
      >
        <Link to="/">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white p-3 rounded-full shadow-sm border border-pink-50">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </motion.button>
        </Link>
        <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
      </motion.header>

      {/* Profile Card */}
      <div className="container mx-auto px-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-pink-50 flex items-center gap-6"
        >
          <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=200&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Bob Flowers</h3>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <MapPin className="w-4 h-4 text-pink-400" /> Amman, Jordan
            </p>
          </div>
        </motion.div>
      </div>

      {/* Contact Options List */}
      <div className="container mx-auto px-6 space-y-4 mb-8">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Contact Us</h3>
        
        <motion.a 
          href="tel:0791809728"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-pink-50"
        >
          <div className="flex items-center gap-4">
            <div className="bg-pink-50 p-3 rounded-full">
              <Phone className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-sm text-gray-500">0791809728</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </motion.a>

        <motion.a 
          href="mailto:info@bobflowerstore.com"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-pink-50"
        >
          <div className="flex items-center gap-4">
            <div className="bg-pink-50 p-3 rounded-full">
              <Mail className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-sm text-gray-500">info@bobflowerstore.com</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </motion.a>
      </div>

      {/* Social Links */}
      <div className="container mx-auto px-6 space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Social</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <motion.a 
            href="https://www.instagram.com/bob_bob_flower"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-md shadow-pink-200 flex flex-col items-center justify-center gap-3"
          >
            <Instagram className="w-8 h-8" />
            <span className="font-semibold">Instagram</span>
          </motion.a>

          <motion.a 
            href="https://www.facebook.com/p/Bob-flower-61564965696654"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1877F2] rounded-3xl p-6 text-white shadow-md shadow-blue-200 flex flex-col items-center justify-center gap-3"
          >
            <Facebook className="w-8 h-8" />
            <span className="font-semibold">Facebook</span>
          </motion.a>
        </div>
      </div>

    </div>
  );
}
