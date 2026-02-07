import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-car-wash.jpg';

const Packages = () => {
  const { t, language } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');

  const vehicleTypes = [
    { id: 'hatchback', name: { en: 'Hatchback', ar: 'هاتشباك' }, multiplier: 0.9 },
    { id: 'sedan', name: { en: 'Sedan', ar: 'سيدان' }, multiplier: 1 },
    { id: 'suv', name: { en: 'SUV', ar: 'دفع رباعي' }, multiplier: 1.3 },
    { id: 'pickup', name: { en: 'Pickup', ar: 'بيك أب' }, multiplier: 1.4 },
  ];

  const packages = [
    {
      id: 'express',
      name: { en: 'Express Washing', ar: 'غسيل سريع' },
      basePrice: 49,
      description: {
        en: 'Quick exterior wash for busy schedules',
        ar: 'غسيل خارجي سريع للجداول المزدحمة',
      },
      features: [
        { en: 'Exterior washing', ar: 'غسيل خارجي' },
        { en: 'Wheel cleaning', ar: 'تنظيف العجلات' },
        { en: 'Window cleaning', ar: 'تنظيف النوافذ' },
      ],
      popular: false,
      highlighted: false,
    },
    {
      id: 'premium',
      name: { en: 'Premium Service', ar: 'خدمة متميزة' },
      basePrice: 99,
      description: {
        en: 'Complete wash with interior care',
        ar: 'غسيل كامل مع العناية الداخلية',
      },
      features: [
        { en: 'Exterior washing', ar: 'غسيل خارجي' },
        { en: 'Interior vacuum', ar: 'تنظيف داخلي بالمكنسة' },
        { en: 'Dashboard cleaning', ar: 'تنظيف لوحة القيادة' },
        { en: 'Air freshener', ar: 'معطر هواء' },
      ],
      popular: true,
      highlighted: false,
    },
    {
      id: 'basic',
      name: { en: 'Basic Cleaning', ar: 'تنظيف أساسي' },
      basePrice: 79,
      description: {
        en: 'Standard wash with essential care',
        ar: 'غسيل قياسي مع عناية أساسية',
      },
      features: [
        { en: 'Exterior washing', ar: 'غسيل خارجي' },
        { en: 'Tire dressing', ar: 'تلميع الإطارات' },
        { en: 'Window cleaning', ar: 'تنظيف النوافذ' },
        { en: 'Quick wipe', ar: 'مسح سريع' },
      ],
      popular: false,
      highlighted: false,
    },
    {
      id: 'full',
      name: { en: 'Full Complex', ar: 'شامل كامل' },
      basePrice: 199,
      description: {
        en: 'Ultimate detailing experience',
        ar: 'تجربة التفصيل النهائية',
      },
      features: [
        { en: 'Exterior washing', ar: 'غسيل خارجي' },
        { en: 'Interior deep cleaning', ar: 'تنظيف داخلي عميق' },
        { en: 'Leather conditioning', ar: 'ترطيب الجلد' },
        { en: 'Engine bay cleaning', ar: 'تنظيف حجرة المحرك' },
        { en: 'Wax protection', ar: 'حماية بالشمع' },
      ],
      popular: false,
      highlighted: true,
    },
  ];

  const getPrice = (basePrice: number) => {
    const multiplier = vehicleTypes.find(v => v.id === selectedVehicle)?.multiplier || 1;
    return Math.round(basePrice * multiplier);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main >
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
          <div className="relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4"
            >
              {language === 'en' ? 'Washing Price' : 'أسعار الغسيل'}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              {language === 'en' ? 'Choose Your Plan' : 'اختر خطتك'}
            </motion.h1>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 bg-background">
          <div className="container-premium text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg">
              {language === 'en'
                ? "Car washes using natural cleaners help maintain your vehicle's finish while being environmentally responsible. Heightened care ensures even the smallest details, like air vents and cup holders, are cleaned perfectly."
                : 'غسيل السيارات باستخدام المنظفات الطبيعية يساعد في الحفاظ على لمعان سيارتك مع كونه صديقاً للبيئة. العناية المكثفة تضمن تنظيف أصغر التفاصيل كفتحات التهوية وحاملات الأكواب بشكل مثالي.'}
            </p>
          </div>
        </section>

        {/* Vehicle Type Selector */}
        <section className="py-8 bg-muted">
          <div className="container-premium">
            <div className="flex flex-wrap justify-center gap-4">
              {vehicleTypes.map((vehicle) => (
                <motion.button
                  key={vehicle.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                  className={`relative px-8 py-6 rounded-2xl border-2 transition-all duration-300 min-w-[140px] ${
                    selectedVehicle === vehicle.id
                      ? 'border-primary bg-card shadow-lg'
                      : 'border-border bg-card/50 hover:border-primary/50'
                  }`}
                >
                  {/* Car Icon Placeholder */}
                  <div className="w-20 h-12 mx-auto mb-2 flex items-center justify-center">
                    <svg viewBox="0 0 100 40" className="w-full h-full text-foreground/80">
                      {vehicle.id === 'hatchback' && (
                        <path d="M10 35h80v-10l-15-15h-40l-15 10v15z M20 20l10-10h30l15 10" fill="none" stroke="currentColor" strokeWidth="2"/>
                      )}
                      {vehicle.id === 'sedan' && (
                        <path d="M5 35h90v-10l-10-10h-20l-10-10h-20l-20 15v15z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      )}
                      {vehicle.id === 'suv' && (
                        <path d="M5 35h90v-15l-5-10h-25l-10-5h-35l-10 15v15z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      )}
                      {vehicle.id === 'pickup' && (
                        <path d="M5 35h90v-15h-35v-10l-10-5h-30l-10 15v15z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      )}
                    </svg>
                  </div>
                  <span className="font-semibold text-foreground">
                    {vehicle.name[language]}
                  </span>
                </motion.button>
              ))}
            </div>
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
                  className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-card border border-border shadow-lg hover:shadow-xl'
                  } ${pkg.popular ? 'ring-2 ring-primary' : ''}`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        <Star className="w-3 h-3 fill-current" />
                        {t('recommended')}
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Package Name */}
                    <h3 className={`text-lg font-bold mb-2 ${
                      pkg.highlighted ? 'text-primary' : 'text-primary'
                    }`}>
                      {pkg.name[language]}
                    </h3>

                    {/* Price */}
                    <div className="mb-6">
                      <span className={`text-5xl font-bold ${
                        pkg.highlighted ? 'text-white' : 'text-foreground'
                      }`}>
                        ${getPrice(pkg.basePrice)}
                      </span>
                      <span className={`text-sm ${
                        pkg.highlighted ? 'text-white/60' : 'text-muted-foreground'
                      }`}>
                        .99
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className={`flex items-center gap-3 text-sm ${
                          pkg.highlighted ? 'text-white/80' : 'text-card-foreground'
                        }`}>
                          <Check className={`w-4 h-4 flex-shrink-0 ${
                            pkg.highlighted ? 'text-green-400' : 'text-green-500'
                          }`} />
                          {feature[language]}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link to="/services">
                      <Button
                        variant={pkg.highlighted ? 'outline' : pkg.popular ? 'primary' : 'outline'}
                        size="lg"
                        className={`w-full ${pkg.highlighted ? 'border-white text-white hover:bg-white hover:text-secondary' : ''}`}
                      >
                        {t('selectPackage')}
                      </Button>
                    </Link>
                  </div>
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
