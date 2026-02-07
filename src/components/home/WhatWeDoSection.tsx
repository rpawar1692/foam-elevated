import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WhatWeDoSection = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: { en: 'Exterior Washing', ar: 'الغسيل الخارجي' },
      duration: '30 min',
      description: {
        en: 'Automatic car washes combine convenience and efficiency, offering quick cleaning solutions for busy drivers.',
        ar: 'غسيل السيارات الآلي يجمع بين الراحة والكفاءة، ويقدم حلول تنظيف سريعة للسائقين المشغولين.',
      },
      features: [
        { en: 'Seats washing', ar: 'غسيل المقاعد' },
        { en: 'Vacuum cleaning', ar: 'التنظيف بالمكنسة' },
        { en: 'Interior wet cleaning', ar: 'التنظيف الداخلي الرطب' },
        { en: 'Window wiping', ar: 'مسح النوافذ' },
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      title: { en: 'Interior Detailing', ar: 'تفصيل داخلي' },
      duration: '60 min',
      description: {
        en: 'Complete interior restoration with deep cleaning of all surfaces, leather conditioning and sanitization.',
        ar: 'استعادة داخلية كاملة مع تنظيف عميق لجميع الأسطح وترطيب الجلد والتعقيم.',
      },
      features: [
        { en: 'Deep vacuuming', ar: 'تنظيف عميق بالمكنسة' },
        { en: 'Leather treatment', ar: 'معالجة الجلد' },
        { en: 'Dashboard polish', ar: 'تلميع لوحة القيادة' },
        { en: 'Air freshening', ar: 'تعطير الهواء' },
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      title: { en: 'Ceramic Coating', ar: 'طلاء سيراميك' },
      duration: '120 min',
      description: {
        en: 'Professional ceramic coating that provides long-lasting protection and an incredible shine for your vehicle.',
        ar: 'طلاء سيراميك احترافي يوفر حماية طويلة الأمد ولمعانًا رائعًا لسيارتك.',
      },
      features: [
        { en: 'Paint correction', ar: 'تصحيح الطلاء' },
        { en: '9H hardness coating', ar: 'طلاء بصلابة 9H' },
        { en: 'Hydrophobic finish', ar: 'طبقة طاردة للماء' },
        { en: '3-year warranty', ar: 'ضمان 3 سنوات' },
      ],
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      title: { en: 'Full Detailing', ar: 'تفصيل كامل' },
      duration: '180 min',
      description: {
        en: 'Complete car transformation with exterior wash, interior deep clean, polish and protection.',
        ar: 'تحول كامل للسيارة مع غسيل خارجي وتنظيف داخلي عميق وتلميع وحماية.',
      },
      features: [
        { en: 'Exterior hand wash', ar: 'غسيل خارجي يدوي' },
        { en: 'Interior detailing', ar: 'تفصيل داخلي' },
        { en: 'Engine cleaning', ar: 'تنظيف المحرك' },
        { en: 'Wax protection', ar: 'حماية بالشمع' },
      ],
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop',
    },
    {
      id: 5,
      title: { en: 'Premium Polish', ar: 'تلميع متميز' },
      duration: '90 min',
      description: {
        en: 'Professional polishing to remove scratches, swirl marks and restore your paint to showroom condition.',
        ar: 'تلميع احترافي لإزالة الخدوش وعلامات الدوران واستعادة الطلاء لحالة صالة العرض.',
      },
      features: [
        { en: 'Scratch removal', ar: 'إزالة الخدوش' },
        { en: 'Swirl mark removal', ar: 'إزالة علامات الدوران' },
        { en: 'Paint enhancement', ar: 'تحسين الطلاء' },
        { en: 'Mirror finish', ar: 'لمعان مرآة' },
      ],
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&auto=format&fit=crop',
    },
  ];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const currentService = services[currentIndex];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark Background with diagonal pattern */}
      <div className="absolute inset-0 bg-secondary">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 container-premium px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
            {language === 'en' ? 'WHAT WE DO' : 'ماذا نفعل'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {language === 'en' ? 'Premium Washing Services' : 'خدمات غسيل متميزة'}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {language === 'en' 
              ? "Car washes using natural cleaners help maintain your vehicle's finish while being environmentally responsible."
              : 'غسيل السيارات باستخدام المنظفات الطبيعية يساعد في الحفاظ على لمعان سيارتك مع كونه صديقاً للبيئة.'}
          </p>
        </motion.div>

        {/* Content Box - 60/40 Split */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-card rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left - Image (60%) */}
            <div className="lg:col-span-3 relative h-[300px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  src={currentService.image}
                  alt={currentService.title[language]}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Arrow Icon Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.div>

              {/* Navigation Arrows */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={goToPrev}
                  className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <span className="text-white font-bold text-lg">
                  {currentIndex + 1} / {services.length}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Right - Content (40%) */}
            <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {currentService.title[language]}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">{currentService.duration}</span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {currentService.description[language]}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {currentService.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-card-foreground">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {feature[language]}
                      </li>
                    ))}
                  </ul>

                  <Link to="/packages">
                    <Button variant="primary" size="lg" className="btn-shine rounded-full px-8">
                      {language === 'en' ? 'Get Plan' : 'احصل على الخطة'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
