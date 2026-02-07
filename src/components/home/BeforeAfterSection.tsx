import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BeforeAfterSection = () => {
  const { language } = useLanguage();
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
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const beforeImage = 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&auto=format&fit=crop';
  const afterImage = 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&auto=format&fit=crop';

  return (
    <section className="relative py-16 bg-secondary overflow-hidden">
      <div className="container-premium px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
            {language === 'en' ? 'OUR RESULTS' : 'نتائجنا'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {language === 'en' ? 'Before & After' : 'قبل وبعد'}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className="absolute inset-0">
              <img
                src={beforeImage}
                alt="Before"
                className="w-full h-full object-cover grayscale-[30%]"
                draggable={false}
              />
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={afterImage}
                alt="After"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            <div className="absolute top-6 left-6 z-20">
              <span 
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white/30 uppercase tracking-wider"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                {language === 'en' ? 'BEFORE' : 'قبل'}
              </span>
            </div>

            <div className="absolute bottom-6 right-6 z-20">
              <span 
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white/30 uppercase tracking-wider"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                {language === 'en' ? 'AFTER' : 'بعد'}
              </span>
            </div>

            <div
              className="absolute top-0 bottom-0 z-30 flex flex-col items-center"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-0.5 h-full bg-white/80" />
              <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing">
                <ChevronLeft className="w-4 h-4 text-secondary" />
                <ChevronRight className="w-4 h-4 text-secondary" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/60 mt-6 text-sm"
        >
          {language === 'en' 
            ? 'Drag the slider to compare before and after' 
            : 'اسحب الشريط للمقارنة بين قبل وبعد'}
        </motion.p>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
