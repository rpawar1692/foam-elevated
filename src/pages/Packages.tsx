 import { motion } from 'framer-motion';
 import { Check, Star } from 'lucide-react';
 import { useLanguage } from '@/contexts/LanguageContext';
 import { Link } from 'react-router-dom';
 import Header from '@/components/layout/Header';
 import Footer from '@/components/layout/Footer';
 import { Button } from '@/components/ui/button';
 
 const Packages = () => {
   const { t, language } = useLanguage();
 
   const packages = [
     {
       id: 'basic',
       name: { en: 'Basic Wash', ar: 'غسيل أساسي' },
       price: 79,
       description: {
         en: 'Essential exterior cleaning for your daily driver',
         ar: 'تنظيف خارجي أساسي لسيارتك اليومية',
       },
       features: [
         { en: 'Exterior foam wash', ar: 'غسيل خارجي بالرغوة' },
         { en: 'Wheel cleaning', ar: 'تنظيف العجلات' },
         { en: 'Tire dressing', ar: 'تلميع الإطارات' },
         { en: 'Window cleaning', ar: 'تنظيف النوافذ' },
       ],
       popular: false,
     },
     {
       id: 'premium',
       name: { en: 'Premium Detail', ar: 'تفصيل متميز' },
       price: 199,
       description: {
         en: 'Complete inside & out refresh for the discerning owner',
         ar: 'تجديد كامل من الداخل والخارج للمالك المميز',
       },
       features: [
         { en: 'Everything in Basic', ar: 'كل ما في الأساسي' },
         { en: 'Interior vacuum', ar: 'تنظيف داخلي بالمكنسة' },
         { en: 'Dashboard detailing', ar: 'تفصيل لوحة القيادة' },
         { en: 'Leather conditioning', ar: 'ترطيب الجلد' },
         { en: 'Air freshener', ar: 'معطر الهواء' },
       ],
       popular: true,
     },
     {
       id: 'ultimate',
       name: { en: 'Ultimate Care', ar: 'العناية القصوى' },
       price: 399,
       description: {
         en: 'The definitive detailing experience with paint protection',
         ar: 'تجربة التفصيل النهائية مع حماية الطلاء',
       },
       features: [
         { en: 'Everything in Premium', ar: 'كل ما في المتميز' },
         { en: 'Clay bar treatment', ar: 'معالجة بالطين' },
         { en: 'Machine polishing', ar: 'تلميع بالآلة' },
         { en: 'Wax protection', ar: 'حماية بالشمع' },
         { en: 'Engine bay cleaning', ar: 'تنظيف حجرة المحرك' },
       ],
       popular: false,
     },
     {
       id: 'ceramic',
       name: { en: 'Ceramic Elite', ar: 'السيراميك النخبوي' },
       price: 1499,
       description: {
         en: 'Professional ceramic coating with multi-year protection',
         ar: 'طلاء سيراميك احترافي مع حماية متعددة السنوات',
       },
       features: [
         { en: 'Everything in Ultimate', ar: 'كل ما في القصوى' },
         { en: 'Paint correction', ar: 'تصحيح الطلاء' },
         { en: '9H Ceramic coating', ar: 'طلاء سيراميك 9H' },
         { en: '3-year warranty', ar: 'ضمان 3 سنوات' },
         { en: 'Annual maintenance included', ar: 'صيانة سنوية مشمولة' },
       ],
       popular: false,
     },
   ];
 
   return (
     <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.5 }}
     >
       <Header />
       <main className="pt-24">
         {/* Hero Section */}
         <section className="bg-secondary text-secondary-foreground section-padding">
           <div className="container-premium">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-center max-w-3xl mx-auto"
             >
               <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                 {t('ourPackages')}
               </span>
               <h1 className="text-4xl md:text-6xl font-bold mb-6">
                 {t('packagesSubtitle')}
               </h1>
             </motion.div>
           </div>
         </section>
 
         {/* Packages Grid */}
         <section className="section-padding bg-background">
           <div className="container-premium">
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
               {packages.map((pkg, index) => (
                 <motion.div
                   key={pkg.id}
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: index * 0.1 }}
                   className={`relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                     pkg.popular ? 'ring-2 ring-primary scale-105 md:scale-110 z-10' : ''
                   }`}
                 >
                   {/* Popular Badge */}
                   {pkg.popular && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                       <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                         <Star className="w-4 h-4 fill-current" />
                         {t('recommended')}
                       </div>
                     </div>
                   )}
 
                   {/* Package Name */}
                   <h3 className="text-xl font-bold text-card-foreground mb-2">
                     {pkg.name[language]}
                   </h3>
                   <p className="text-muted-foreground text-sm mb-6">
                     {pkg.description[language]}
                   </p>
 
                   {/* Price */}
                   <div className="mb-6">
                     <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                     <span className="text-muted-foreground ml-2">{t('currency')}</span>
                   </div>
 
                   {/* Features */}
                   <ul className="space-y-3 mb-8">
                     {pkg.features.map((feature, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm text-card-foreground">
                         <Check className="w-5 h-5 text-primary flex-shrink-0" />
                         {feature[language]}
                       </li>
                     ))}
                   </ul>
 
                   {/* CTA */}
                   <Link to="/services">
                     <Button
                       variant={pkg.popular ? 'primary' : 'outline'}
                       size="lg"
                       className="w-full btn-shine"
                     >
                       {t('selectPackage')}
                     </Button>
                   </Link>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
       </main>
       <Footer />
     </motion.div>
   );
 };
 
 export default Packages;