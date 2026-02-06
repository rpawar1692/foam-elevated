 import { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
 import { useLanguage } from '@/contexts/LanguageContext';
 import { FaCarAlt } from 'react-icons/fa';
 
 
 const testimonials = [
   {
     id: 1,
     name: { en: 'Ahmed Al-Rashid', ar: 'أحمد الراشد' },
     role: { en: 'Mercedes-Benz Owner', ar: 'مالك مرسيدس بنز' },
     content: {
       en: "The best car wash experience I've ever had. The attention to detail is incredible, and my car looks showroom new every time.",
       ar: 'أفضل تجربة غسيل سيارات مررت بها. الاهتمام بالتفاصيل مذهل، وسيارتي تبدو جديدة كصالة العرض في كل مرة.',
     },
     rating: 5,
   },
   {
     id: 2,
     name: { en: 'Sarah Johnson', ar: 'سارة جونسون' },
     role: { en: 'Porsche Enthusiast', ar: 'عاشقة بورشه' },
     content: {
       en: "FOAM Car Wash treats my Porsche like royalty. Their ceramic coating service is absolutely worth every dirham. Highly recommended!",
       ar: 'فوم غسيل السيارات يعامل سيارتي البورشه كالملكية. خدمة الطلاء السيراميكي تستحق كل درهم. موصى به بشدة!',
     },
     rating: 5,
   },
   {
     id: 3,
     name: { en: 'Mohammed Hassan', ar: 'محمد حسن' },
     role: { en: 'Range Rover Owner', ar: 'مالك رينج روفر' },
     content: {
       en: "Professional service, premium products, and a team that genuinely cares about your vehicle. This is the only place I trust with my Range Rover.",
       ar: 'خدمة احترافية، منتجات متميزة، وفريق يهتم حقاً بسيارتك. هذا المكان الوحيد الذي أثق به لسيارتي الرينج روفر.',
     },
     rating: 5,
   },
   {
     id: 4,
     name: { en: 'Fatima Al-Maktoum', ar: 'فاطمة المكتوم' },
     role: { en: 'BMW Owner', ar: 'مالكة بي إم دبليو' },
     content: {
       en: "From the moment I drove in, I knew this was different. The premium experience matches the premium results. Outstanding!",
       ar: 'من اللحظة التي دخلت فيها، علمت أن هذا مختلف. التجربة المتميزة تتناسب مع النتائج المتميزة. رائع!',
     },
     rating: 5,
   },
 ];
 
 const TestimonialsSlider = () => {
   const { t, language } = useLanguage();
   const [currentIndex, setCurrentIndex] = useState(0);
 
   useEffect(() => {
     const timer = setInterval(() => {
       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
     }, 5000);
     return () => clearInterval(timer);
   }, []);
 
   const goToPrev = () => {
     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
   };
 
   const goToNext = () => {
     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
   };
 
   return (
     <section className="section-padding bg-primary/10">
       <div className="container-premium">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
         <motion.span
             className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.5 }}
           >
              <FaCarAlt />
               {t('testimonials')}
           </motion.span>
           <h2 className="text-3xl md:text-5xl font-bold text-foreground">
             {t('testimonialsSubtitle')}
           </h2>
         </motion.div>
 
         {/* Testimonial Card */}
         <div className="max-w-4xl mx-auto relative">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentIndex}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -50 }}
               transition={{ duration: 0.5 }}
               className="bg-card rounded-3xl p-8 md:p-12 shadow-xl relative"
             >
               {/* Quote Icon */}
               <div className="absolute top-6 right-6 md:top-10 md:right-10">
                 <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/20" />
               </div>
 
               {/* Stars */}
               <div className="flex gap-1 mb-6">
                 {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                 ))}
               </div>
 
               {/* Content */}
               <p className="text-lg md:text-xl text-card-foreground/80 mb-8 leading-relaxed">
                 "{testimonials[currentIndex].content[language]}"
               </p>
 
               {/* Author */}
               <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                   {testimonials[currentIndex].name[language].charAt(0)}
                 </div>
                 <div>
                   <h4 className="font-bold text-card-foreground">
                     {testimonials[currentIndex].name[language]}
                   </h4>
                   <p className="text-muted-foreground text-sm">
                     {testimonials[currentIndex].role[language]}
                   </p>
                 </div>
               </div>
             </motion.div>
           </AnimatePresence>
 
           {/* Navigation */}
           <div className="flex items-center justify-center gap-4 mt-8">
             <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={goToPrev}
               className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
             >
               <ChevronLeft className="w-5 h-5" />
             </motion.button>
 
             {/* Dots */}
             <div className="flex gap-2">
               {testimonials.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setCurrentIndex(index)}
                   className={`w-2.5 h-2.5 rounded-full transition-all ${
                     index === currentIndex
                       ? 'w-8 bg-primary'
                       : 'bg-foreground/20 hover:bg-foreground/40'
                   }`}
                 />
               ))}
             </div>
 
             <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={goToNext}
               className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
             >
               <ChevronRight className="w-5 h-5" />
             </motion.button>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default TestimonialsSlider;