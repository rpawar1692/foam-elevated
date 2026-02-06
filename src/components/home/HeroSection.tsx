 import { motion } from 'framer-motion';
 import { Link } from 'react-router-dom';
 import { ChevronDown } from 'lucide-react';
 import { useLanguage } from '@/contexts/LanguageContext';
 import { Button } from '@/components/ui/button';
 import heroImage from '@/assets/hero-car-wash.jpg';
 
 const HeroSection = () => {
   const { t } = useLanguage();
 
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background Image with Parallax */}
       <motion.div
         initial={{ scale: 1.1 }}
         animate={{ scale: 1 }}
         transition={{ duration: 1.5, ease: 'easeOut' }}
         className="absolute inset-0"
       >
         <img
           src={heroImage}
           alt="Premium Car Wash"
           className="w-full h-full object-cover"
         />
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-hero-gradient" />
         
         {/* Animated Foam Effect */}
         <div className="absolute inset-0 animate-foam-flow opacity-20" />
       </motion.div>
 
       {/* Content */}
       <div className="relative z-10 container-premium text-center text-primary-foreground">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="max-w-4xl mx-auto"
         >
           {/* Tagline */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.5 }}
             className="text-primary font-semibold text-lg mb-4 tracking-wider uppercase"
           >
             The Car Care Project
           </motion.p>
 
           {/* Main Title */}
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
           >
             {t('heroTitle')}
           </motion.h1>
 
           {/* Subtitle */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.8 }}
             className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
           >
             {t('heroSubtitle')}
           </motion.p>
 
           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 1 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
           >
             <Link to="/services">
               <Button variant="hero" className="btn-shine w-full sm:w-auto">
                 {t('bookCarWash')}
               </Button>
             </Link>
             <Link to="/shop">
               <Button variant="hero-outline" className="w-full sm:w-auto">
                 {t('shopProducts')}
               </Button>
             </Link>
           </motion.div>
         </motion.div>
 
         {/* Scroll Indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5 }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2"
         >
           <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 1.5, repeat: Infinity }}
             className="flex flex-col items-center gap-2 text-primary-foreground/50"
           >
             <span className="text-xs uppercase tracking-wider">Scroll</span>
             <ChevronDown className="w-5 h-5" />
           </motion.div>
         </motion.div>
       </div>
 
       {/* Decorative Elements */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
     </section>
   );
 };
 
 export default HeroSection;