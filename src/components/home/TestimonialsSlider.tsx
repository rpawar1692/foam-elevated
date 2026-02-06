import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: { en: 'Ahmed Al-Rashid', ar: 'أحمد الراشد' },
    role: { en: 'Mercedes-Benz Owner', ar: 'مالك مرسيدس بنز' },
    content: {
      en: "The best car wash experience I've ever had. The attention to detail is incredible, and my car looks showroom new every time. Highly recommended for anyone who values their vehicle.",
      ar: 'أفضل تجربة غسيل سيارات مررت بها. الاهتمام بالتفاصيل مذهل، وسيارتي تبدو جديدة كصالة العرض في كل مرة. موصى به بشدة لكل من يقدر سيارته.',
    },
    avatar: 'A',
  },
  {
    id: 2,
    name: { en: 'Sarah Johnson', ar: 'سارة جونسون' },
    role: { en: 'Porsche Enthusiast', ar: 'عاشقة بورشه' },
    content: {
      en: "FOAM Car Wash treats my Porsche like royalty. Their ceramic coating service is absolutely worth every dirham. The team's professionalism is unmatched in Dubai.",
      ar: 'فوم غسيل السيارات يعامل سيارتي البورشه كالملكية. خدمة الطلاء السيراميكي تستحق كل درهم. احترافية الفريق لا مثيل لها في دبي.',
    },
    avatar: 'S',
  },
  {
    id: 3,
    name: { en: 'Mohammed Hassan', ar: 'محمد حسن' },
    role: { en: 'Range Rover Owner', ar: 'مالك رينج روفر' },
    content: {
      en: "Professional service, premium products, and a team that genuinely cares about your vehicle. This is the only place I trust with my Range Rover. Five stars!",
      ar: 'خدمة احترافية، منتجات متميزة، وفريق يهتم حقاً بسيارتك. هذا المكان الوحيد الذي أثق به لسيارتي الرينج روفر. خمس نجوم!',
    },
    avatar: 'M',
  },
  {
    id: 4,
    name: { en: 'Fatima Al-Maktoum', ar: 'فاطمة المكتوم' },
    role: { en: 'BMW Owner', ar: 'مالكة بي إم دبليو' },
    content: {
      en: "From the moment I drove in, I knew this was different. The premium experience matches the premium results. Outstanding service every single time!",
      ar: 'من اللحظة التي دخلت فيها، علمت أن هذا مختلف. التجربة المتميزة تتناسب مع النتائج المتميزة. خدمة رائعة في كل مرة!',
    },
    avatar: 'F',
  },
];

const TestimonialsSlider = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background - Car Interior */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Navigation Arrows - Sides */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Content */}
      <div className="relative z-10 container-premium px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-3">
            {t('testimonials')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {language === 'en' ? 'What our clients say' : 'ماذا يقول عملاؤنا'}
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Large Quote Marks */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 flex items-center gap-2 z-0">
            <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <svg className="w-16 h-16 text-primary rotate-180" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="pt-20"
            >
              {/* Quote Text */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 italic leading-relaxed mb-10 px-4">
                {testimonials[currentIndex].content[language]}
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold text-2xl mb-4">
                  {testimonials[currentIndex].avatar}
                </div>
                <h4 className="font-bold text-primary text-lg">
                  {testimonials[currentIndex].name[language]}
                </h4>
                <p className="text-white/60 text-sm">
                  {testimonials[currentIndex].role[language]}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
