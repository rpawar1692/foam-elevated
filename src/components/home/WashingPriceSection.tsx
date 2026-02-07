import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WashingPriceSection = () => {
  const { language } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');

  const vehicles = [
    { 
      id: 'sedan', 
      name: { en: 'Small Sedan', ar: 'سيدان صغير' },
      multiplier: 1,
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=200&auto=format&fit=crop',
    },
    { 
      id: 'pickup', 
      name: { en: 'Pickup', ar: 'بيك أب' },
      multiplier: 1.2,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&auto=format&fit=crop',
    },
    { 
      id: 'suv', 
      name: { en: 'SUV', ar: 'دفع رباعي' },
      multiplier: 1.3,
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=200&auto=format&fit=crop',
    },
    { 
      id: 'minibus', 
      name: { en: 'Minibus', ar: 'ميني باص' },
      multiplier: 1.5,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&auto=format&fit=crop',
    },
  ];

  const plans = [
    {
      id: 'express',
      name: { en: 'Express Washing', ar: 'غسيل سريع' },
      basePrice: 12.99,
      duration: '15 min',
      features: [
        { name: { en: 'Exterior washing', ar: 'غسيل خارجي' }, included: true },
        { name: { en: 'Vacuum cleaning', ar: 'تنظيف بالمكنسة' }, included: false },
        { name: { en: 'Interior wet cleaning', ar: 'تنظيف داخلي رطب' }, included: false },
        { name: { en: 'Window wiping', ar: 'مسح النوافذ' }, included: false },
      ],
      highlighted: false,
    },
    {
      id: 'basic',
      name: { en: 'Basic Cleaning', ar: 'تنظيف أساسي' },
      basePrice: 24.99,
      duration: '30 min',
      features: [
        { name: { en: 'Exterior washing', ar: 'غسيل خارجي' }, included: true },
        { name: { en: 'Vacuum cleaning', ar: 'تنظيف بالمكنسة' }, included: true },
        { name: { en: 'Interior wet cleaning', ar: 'تنظيف داخلي رطب' }, included: false },
        { name: { en: 'Window wiping', ar: 'مسح النوافذ' }, included: false },
      ],
      highlighted: false,
    },
    {
      id: 'premium',
      name: { en: 'Premium Service', ar: 'خدمة متميزة' },
      basePrice: 36.99,
      duration: '45 min',
      features: [
        { name: { en: 'Exterior washing', ar: 'غسيل خارجي' }, included: true },
        { name: { en: 'Vacuum cleaning', ar: 'تنظيف بالمكنسة' }, included: true },
        { name: { en: 'Interior wet cleaning', ar: 'تنظيف داخلي رطب' }, included: true },
        { name: { en: 'Window wiping', ar: 'مسح النوافذ' }, included: false },
      ],
      highlighted: false,
    },
    {
      id: 'full',
      name: { en: 'Full Complex', ar: 'شامل كامل' },
      basePrice: 59.99,
      duration: '120 min',
      features: [
        { name: { en: 'Exterior washing', ar: 'غسيل خارجي' }, included: true },
        { name: { en: 'Vacuum cleaning', ar: 'تنظيف بالمكنسة' }, included: true },
        { name: { en: 'Interior wet cleaning', ar: 'تنظيف داخلي رطب' }, included: true },
        { name: { en: 'Window wiping', ar: 'مسح النوافذ' }, included: true },
      ],
      highlighted: true,
    },
  ];

  const getPrice = (basePrice: number) => {
    const multiplier = vehicles.find(v => v.id === selectedVehicle)?.multiplier || 1;
    return (basePrice * multiplier).toFixed(2);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
            {language === 'en' ? 'WASHING PRICE' : 'أسعار الغسيل'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Choose Your Plan' : 'اختر خطتك'}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? "Car washes using natural cleaners help maintain your vehicle's finish while being environmentally responsible. Heightened care ensures even the smallest details, like air vents and cup holders, are cleaned perfectly."
              : 'غسيل السيارات باستخدام المنظفات الطبيعية يساعد في الحفاظ على لمعان سيارتك. العناية المكثفة تضمن تنظيف أصغر التفاصيل.'}
          </p>
        </motion.div>

        {/* Vehicle Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {vehicles.map((vehicle) => (
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
              {/* Vehicle SVG Icon */}
              <div className="w-24 h-14 mx-auto mb-2 flex items-center justify-center">
                <svg viewBox="0 0 120 50" className="w-full h-full text-foreground/80 fill-current">
                  {vehicle.id === 'sedan' && (
                    <>
                      <ellipse cx="25" cy="42" rx="10" ry="10" className="fill-gray-400" />
                      <ellipse cx="95" cy="42" rx="10" ry="10" className="fill-gray-400" />
                      <path d="M10 35 L25 15 L85 15 L105 35 L110 40 L110 45 L10 45 L10 40 Z" fill="currentColor" />
                      <path d="M30 15 L35 8 L75 8 L80 15" fill="currentColor" />
                    </>
                  )}
                  {vehicle.id === 'pickup' && (
                    <>
                      <ellipse cx="25" cy="42" rx="10" ry="10" className="fill-gray-400" />
                      <ellipse cx="95" cy="42" rx="10" ry="10" className="fill-gray-400" />
                      <path d="M10 35 L25 20 L55 20 L55 10 L50 10 L45 20" fill="currentColor" />
                      <path d="M55 20 L110 20 L110 45 L10 45 L10 35" fill="currentColor" />
                    </>
                  )}
                  {vehicle.id === 'suv' && (
                    <>
                      <ellipse cx="25" cy="42" rx="10" ry="10" className="fill-gray-400" />
                      <ellipse cx="95" cy="42" rx="10" ry="10" className="fill-gray-400" />
                      <path d="M10 35 L20 12 L90 12 L105 35 L110 45 L10 45 Z" fill="currentColor" />
                    </>
                  )}
                  {vehicle.id === 'minibus' && (
                    <>
                      <ellipse cx="25" cy="42" rx="10" ry="10" className="fill-gray-400" />
                      <ellipse cx="95" cy="42" rx="10" ry="10" className="fill-gray-400" />
                      <path d="M10 10 L100 10 L110 25 L110 45 L10 45 Z" fill="currentColor" />
                    </>
                  )}
                </svg>
              </div>
              <span className="font-semibold text-foreground">
                {vehicle.name[language]}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.highlighted
                  ? 'text-white'
                  : 'bg-card border border-border shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Background Image for Highlighted */}
              {plan.highlighted && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&auto=format&fit=crop')` }}
                >
                  <div className="absolute inset-0 bg-secondary/85" />
                </div>
              )}

              <div className={`relative p-8 ${plan.highlighted ? 'z-10' : ''}`}>
                {/* Plan Name */}
                <h3 className={`text-lg font-bold mb-4 ${
                  plan.highlighted ? 'text-primary' : 'text-primary'
                }`}>
                  {plan.name[language]}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-sm align-top">$</span>
                  <span className={`text-5xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-foreground'
                  }`}>
                    {getPrice(plan.basePrice).split('.')[0]}
                  </span>
                  <span className={`text-lg ${
                    plan.highlighted ? 'text-white/60' : 'text-muted-foreground'
                  }`}>
                    .{getPrice(plan.basePrice).split('.')[1]}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm ${
                      plan.highlighted ? 'text-white/80' : 'text-card-foreground'
                    }`}>
                      {feature.included ? (
                        <Check className={`w-4 h-4 flex-shrink-0 ${
                          plan.highlighted ? 'text-green-400' : 'text-green-500'
                        }`} />
                      ) : (
                        <X className={`w-4 h-4 flex-shrink-0 ${
                          plan.highlighted ? 'text-white/30' : 'text-muted-foreground/50'
                        }`} />
                      )}
                      {feature.name[language]}
                    </li>
                  ))}
                </ul>

                {/* Duration */}
                <div className={`flex items-center gap-2 mb-6 text-sm ${
                  plan.highlighted ? 'text-white/60' : 'text-muted-foreground'
                }`}>
                  <Clock className="w-4 h-4 text-primary" />
                  {plan.duration}
                </div>

                {/* CTA */}
                <Link to="/packages">
                  <Button
                    variant="primary"
                    size="lg"
                    className={`w-full rounded-full ${
                      plan.highlighted ? 'bg-primary hover:bg-primary/90' : ''
                    }`}
                  >
                    {language === 'en' ? 'Select plan' : 'اختر الخطة'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WashingPriceSection;
