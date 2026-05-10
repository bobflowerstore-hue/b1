import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Home as HomeIcon, Grid, User, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/portfolio', icon: Grid, label: 'Portfolio' },
    { path: '/contact', icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F9] flex flex-col relative">
      
      {/* Main Content Area */}
      <main className="flex-1 pb-24">
        <Outlet />
      </main>

      {/* Floating Bottom Navigation (App Style) */}
      <div className="fixed bottom-6 left-0 right-0 px-6 z-50 flex justify-center">
        <motion.nav 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          className="bg-white px-6 py-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-pink-50 flex items-center gap-8 md:gap-12 w-full max-w-md justify-between"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className="relative flex flex-col items-center justify-center w-12 h-12"
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-pink-100 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <Icon 
                  className={`relative z-10 w-6 h-6 transition-colors ${
                    isActive ? 'text-pink-600 fill-pink-600/20' : 'text-gray-400'
                  }`} 
                />
              </Link>
            );
          })}
        </motion.nav>
      </div>

      {/* WhatsApp Floating Button - Kept for utility but restyled to fit */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/962791809728"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-6 z-40 bg-pink-500 text-white p-4 rounded-full shadow-lg shadow-pink-200"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

    </div>
  );
}
