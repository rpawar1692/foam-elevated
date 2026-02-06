import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Sparkles, Wind, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BeforeAfterSection = () => {
  const { t, language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  const features = [
    {
      icon: Droplet,
      title: { en: 'Natural Cleaners', ar: 'منظفات طبيعية' },
      description: {
        en: 'Natural cleaners ensure your car is cleaned with eco-friendly, biodegradable products safe.',
        ar: 'المنظفات الطبيعية تضمن تنظيف سيارتك بمنتجات صديقة للبيئة وقابلة للتحلل وآمنة.',
      },
    },
    {
      icon: Sparkles,
      title: { en: 'Heightened Care', ar: 'عناية مكثفة' },
      description: {
        en: 'Heightened care services focus on every detail, ensuring your car gets a spotless and thorough wash.',
        ar: 'خدمات العناية المكثفة تركز على كل تفصيل، لضمان غسيل نظيف وشامل لسيارتك.',
      },
    },
    {
      icon: Wind,
      title: { en: 'Aromatization', ar: 'تعطير' },
      description: {
        en: 'Aromatization adds a pleasant, lasting fragrance to your car interior.',
        ar: 'التعطير يضيف رائحة لطيفة ودائمة لداخل سيارتك.',
      },
    },
  ];

  return (
    <section className="section-padding bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {language === 'en' ? 'Dry Cleaning' : 'التنظيف الجاف'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {language === 'en'
                ? 'Dry cleaning any dirt inside the car and trunk'
                : 'تنظيف جاف لأي أوساخ داخل السيارة والصندوق'}
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              {t('learnMore')}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            
            {/* Navigation arrows */}
            <div className="flex gap-3 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border-2 border-secondary-foreground/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border-2 border-secondary-foreground/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Center - Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* BEFORE / AFTER Labels */}
            <div className="absolute -top-4 left-0 right-0 flex justify-between text-6xl md:text-7xl font-bold opacity-10 pointer-events-none z-0">
              <span>BEFORE</span>
            </div>
            <div className="absolute -bottom-4 left-0 right-0 flex justify-end text-6xl md:text-7xl font-bold opacity-10 pointer-events-none z-0">
              <span>AFTER</span>
            </div>

            <div
              ref={containerRef}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none z-10"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* Before Image (Dirty) */}
              <div className="absolute inset-0">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop')`,
                    filter: 'sepia(30%) brightness(0.8)',
                  }}
                />
              </div>

              {/* After Image (Clean) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop')`,
                  }}
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <ChevronLeft className="w-4 h-4 text-secondary" />
                    <ChevronRight className="w-4 h-4 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-transparent border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary-foreground mb-1">
                    {feature.title[language]}
                  </h4>
                  <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                    {feature.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
