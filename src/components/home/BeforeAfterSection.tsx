import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Sparkles, Wind, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BeforeAfterSection = () => {
  const { language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  const containerRef = useRef<HTMLDivElement>(null);

  const imageSets = [
    {
      before: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/Before_01.jpg',
      after: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/After_01.jpg',
      title: {
        en: 'Trunk and Pile Rug Car Cleaning Service',
        ar: 'خدمة تنظيف صندوق السيارة والسجاد'
      },
      description: {
        en: 'Deep cleaning of trunk spaces and pile rugs to remove embedded dirt and stains.',
        ar: 'تنظيف عميق لمساحات الصندوق والسجاد لإزالة الأوساخ والبقاء المترسخة.'
      }
    },
    {
      before: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/Before_02.jpg',
      after: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/After_02.jpg',
      title: {
        en: 'Stain Removal and Upholstery Restoration',
        ar: 'إزالة البقع واستعادة التنجيد'
      },
      description: {
        en: 'Professional stain removal and restoration of car upholstery to like-new condition.',
        ar: 'إزالة البقع المحترفة واستعادة تنجيد السيارة إلى حالة تشبه الجديدة.'
      }
    },
    {
      before: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/Before_04.jpg',
      after: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/After_04.jpg',
      title: {
        en: 'Comprehensive Interior Detailing',
        ar: 'تفصيل شامل للداخلية'
      },
      description: {
        en: 'Complete interior detailing including dashboard, seats, carpets and all surfaces.',
        ar: 'تفصيل داخلي كامل يشمل لوحة القيادة والمقاعد والسجاد وجميع الأسطح.'
      }
    }
  ];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  useEffect(() => {
    const move = (e: MouseEvent) => isDragging && handleMove(e.clientX);
    const up = () => setIsDragging(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
  }, [isDragging]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + imageSets.length) % imageSets.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % imageSets.length);
  };

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
    <section className="relative bg-secondary text-secondary-foreground py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* LEFT CONTENT - Increased height */}
        <div className="lg:col-span-3 px-8 h-full min-h-[500px] flex flex-col justify-center">
          <span className="text-primary uppercase text-sm tracking-wider font-semibold">
            Dry Cleaning
          </span>

          <div className="relative h-[200px] mt-4 mb-6 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                initial={{ 
                  opacity: 0, 
                  x: direction > 0 ? 100 : direction < 0 ? -100 : 0 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                exit={{ 
                  opacity: 0,
                  x: direction > 0 ? -100 : 100,
                  transition: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  {imageSets[currentImageIndex].title[language]}
                </h2>

                <p className="text-secondary-foreground/70">
                  {imageSets[currentImageIndex].description[language]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* CENTER IMAGE CARD - Increased height */}
        <div className="lg:col-span-6 flex justify-center px-6">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            className="relative w-full max-w-[850px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize"
          >
          

            {/* BEFORE IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${imageSets[currentImageIndex].before})`
              }}
            />

            {/* AFTER IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${imageSets[currentImageIndex].after})`,
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            />

            {/* SLIDER LINE */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-white z-20"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ChevronLeft className="w-4 h-4 text-black" />
                <ChevronRight className="w-4 h-4 text-black -ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES - Styled icons */}
        <div className="lg:col-span-3 px-8 space-y-10">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <f.icon className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">{f.title[language]}</h4>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                  {f.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;