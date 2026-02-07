import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const SpecialServiceSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
            {language === 'en' ? 'Special Service' : 'خدمة خاصة'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' 
              ? 'Complete Interior Dry Cleaning' 
              : 'تنظيف داخلي جاف كامل'}
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            {language === 'en'
              ? 'Heightened care services focus on every detail, ensuring your car gets a spotless and thorough wash. Our expert team uses premium products for exceptional results.'
              : 'خدمات العناية المكثفة تركز على كل التفاصيل، لضمان حصول سيارتك على غسيل شامل ونظيف. يستخدم فريقنا الخبير منتجات متميزة للحصول على نتائج استثنائية.'}
          </p>
          <Link to="/services">
            <Button variant="primary" size="xl" className="btn-shine rounded-full px-10">
              {language === 'en' ? 'Read More' : 'اقرأ المزيد'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialServiceSection;
