import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import logo from '@/assets/logo1.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { items } = useCart();
  const location = useLocation();
  const heroPages = ['/about', '/services', '/packages', '/shop','/contact'];
const isHeroPage = heroPages.includes(location.pathname);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/services', label: t('services') },
    { path: '/shop', label: t('shop') },
    { path: '/packages', label: t('packages') },
    { path: '/contact', label: t('contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-secondary/95 backdrop-blur-xl shadow-lg'
            : isHeroPage
              ? 'py-4 bg-transparent'
              : 'py-4 bg-transparent'
        }`}
      >
      <div className="container-premium px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full py-1 group">
            <motion.img
              src={logo}
              alt="FOAM Car Wash"
              className={`transition-all duration-500 object-contain ${
                isScrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation - unchanged */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[15px] font-semibold transition-colors link-underline ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-primary-foreground/80 hover:text-primary'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Toggle - Show only icon on mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1 sm:gap-2 text-primary-foreground/80 hover:text-primary transition-colors"
            >
              <Globe className="w-5 h-5 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-[15px] font-medium hidden sm:block">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </motion.button>

            {/* Cart */}
            <Link to="/shop" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <ShoppingCart className="w-5 h-5 sm:w-5 sm:h-5" />
                {items.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-primary text-primary-foreground text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-bold"
                  >
                    {items.length}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Book Now Button - Hidden on small mobile, shown on tablet+ */}
            <Link to="/services" className="hidden md:block">
              <Button variant="primary" size="sm" className="btn-shine px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-[15px]">
                {t('bookNow')}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary-foreground ml-1"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Top से slide down, बिना close button के */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop - Click करने पर close हो जाएगा */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/50 lg:hidden z-40 top-16 sm:top-18"
              />
              
              {/* Mobile Menu Panel - Top से slide down, बिना close button */}
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-16 sm:top-18 left-0 right-0 bg-secondary/95 backdrop-blur-xl shadow-2xl lg:hidden z-50 px-6 py-8 border-t border-white/10"
              >
                {/* Close button remove कर दिया - सिर्फ backdrop click से close होगा */}

                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-center py-3 text-xl font-semibold transition-all ${
                          location.pathname === link.path
                            ? 'text-primary bg-white/5 rounded-lg'
                            : 'text-primary-foreground/90 hover:text-primary hover:bg-white/5 rounded-lg'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <div className="pt-8 border-t border-white/10">
                    {/* Mobile Book Now Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mb-6"
                    >
                      <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="primary" className="w-full btn-shine py-4 text-lg font-bold">
                          {t('bookNow')}
                        </Button>
                      </Link>
                    </motion.div>
                    
                    {/* Mobile Language Toggle */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center gap-3 w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <Globe className="w-6 h-6" />
                        <span className="text-lg font-medium">
                          {language === 'en' ? 'Switch to العربية' : 'Switch to English'}
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      
      {/* Animated Bottom Line - Inner Pages Only */}
      {isHeroPage && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary origin-left"
        />
      )}
    </motion.header>
    
    {/* Spacer for inner pages bottom line */}
    {isHeroPage && <div className="h-1" />}
    </>
  );
};

export default Header;