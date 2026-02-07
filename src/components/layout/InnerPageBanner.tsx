import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface InnerPageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const InnerPageBanner = ({ title, subtitle, backgroundImage }: InnerPageBannerProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Default background image placeholder
  const bgImage = backgroundImage || 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&auto=format&fit=crop';

  // Get breadcrumb path
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || 'home';

  return (
    <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/90" />
      </div>

      {/* Red Line at Top */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left"
      />

      {/* Wave SVG at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-background"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        >
          {title}
        </motion.h1>
        
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3 mt-6 text-sm"
        >
          <Link to="/" className="text-primary/80 hover:text-primary transition-colors">
            {language === 'en' ? 'Home' : 'الرئيسية'}
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-white capitalize">
            {currentPage.replace('-', ' ')}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default InnerPageBanner;
