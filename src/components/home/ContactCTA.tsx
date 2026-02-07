import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  const { language } = useLanguage();

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Primary/10 Background */}
      <div className="absolute inset-0 bg-primary/10" />
      
      {/* Optional Subtle Pattern - Using simpler approach */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,#000000_1px,transparent_0)] bg-[length:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            {language === 'en' 
              ? 'Ready for a Premium Wash?' 
              : 'مستعد لغسيل متميز؟'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/80 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Book your appointment today and experience the difference of professional car care.'
              : 'احجز موعدك اليوم واستمتع بتجربة العناية الاحترافية بالسيارات.'}
          </p>
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="primary" 
                size="xl" 
                className="btn-shine text-lg px-10 py-6 rounded-full shadow-lg"
              >
                {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
      />
    </section>
  );
};

export default ContactCTA;