import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, Clock, Car, Droplet, Calendar, Phone, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InnerPageBanner from '@/components/layout/InnerPageBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Packages = () => {
  const { language } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const vehicles = [
    { id: 'sedan', name: { en: 'Sedan', ar: 'سيدان' }, multiplier: 1 },
    { id: 'suv', name: { en: 'SUV', ar: 'دفع رباعي' }, multiplier: 1.3 },
    { id: 'pickup', name: { en: 'Pickup', ar: 'بيك أب' }, multiplier: 1.2 },
    { id: 'minibus', name: { en: 'Minibus', ar: 'ميني باص' }, multiplier: 1.5 },
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

  const addons = [
    { id: 'engine', name: { en: 'Engine Cleaning', ar: 'تنظيف المحرك' }, price: 25 },
    { id: 'polish', name: { en: 'Hand Polish', ar: 'تلميع يدوي' }, price: 35 },
    { id: 'leather', name: { en: 'Leather Care', ar: 'العناية بالجلد' }, price: 20 },
    { id: 'ceramic', name: { en: 'Ceramic Coating', ar: 'طلاء سيراميك' }, price: 150 },
    { id: 'ozone', name: { en: 'Ozone Treatment', ar: 'معالجة الأوزون' }, price: 40 },
    { id: 'headlight', name: { en: 'Headlight Restoration', ar: 'استعادة المصابيح' }, price: 30 },
  ];

  // Generate next 7 days
  const getNext7Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.getDate(),
        day: date.toLocaleDateString('en-US', { weekday: 'long' }),
        dayShort: date.toLocaleDateString('en-US', { weekday: 'short' }),
        isSunday: date.getDay() === 0,
        fullDate: date,
      });
    }
    return days;
  };

  const next7Days = getNext7Days();

  const timeSlots = [
    '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
    '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm',
  ];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const getPrice = (basePrice: number) => {
    const multiplier = vehicles.find(v => v.id === selectedVehicle)?.multiplier || 1;
    return (basePrice * multiplier).toFixed(2);
  };

  const calculateTotal = () => {
    const planPrice = plans.find(p => p.id === selectedPlan)?.basePrice || 0;
    const multiplier = vehicles.find(v => v.id === selectedVehicle)?.multiplier || 1;
    const addonsPrice = selectedAddons.reduce((sum, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return sum + (addon?.price || 0);
    }, 0);
    return ((planPrice * multiplier) + addonsPrice).toFixed(2);
  };

  const handleSubmit = () => {
    if (!selectedVehicle || !selectedPlan || selectedDate === null || !selectedTime || !formData.firstName || !formData.phone) {
      toast.error(language === 'en' ? 'Please complete all required fields' : 'يرجى إكمال جميع الحقول المطلوبة');
      return;
    }
    toast.success(language === 'en' ? 'Booking confirmed! We will contact you shortly.' : 'تم تأكيد الحجز! سنتصل بك قريباً.');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <main>
        {/* Banner */}
        <InnerPageBanner 
          title={language === 'en' ? 'Book Your Wash' : 'احجز غسيلك'}
          subtitle={language === 'en' ? 'Online Booking' : 'الحجز عبر الإنترنت'}
          backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop"
        />

        {/* Features Bar */}
        <section className="py-12 bg-muted/50">
          <div className="container-premium">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                <span className="text-primary">{language === 'en' ? 'Car Washing' : 'غسيل السيارات'}</span>
                <br />
                {language === 'en' ? 'Online Booking Service' : 'خدمة الحجز عبر الإنترنت'}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Car, title: { en: 'Contactless Washing', ar: 'غسيل بدون تلامس' }, desc: { en: 'Natural cleaning products are gentle on your car.', ar: 'منتجات التنظيف الطبيعية لطيفة على سيارتك.' } },
                { icon: Droplet, title: { en: 'Safety Materials', ar: 'مواد آمنة' }, desc: { en: 'Heightened care packages include hand washing.', ar: 'باقات العناية المكثفة تشمل الغسيل اليدوي.' } },
                { icon: Check, title: { en: 'Modern Equipment', ar: 'معدات حديثة' }, desc: { en: 'Careful handling of luxury cars.', ar: 'التعامل الحذر مع السيارات الفاخرة.' } },
                { icon: Check, title: { en: 'Caring Service', ar: 'خدمة عناية' }, desc: { en: 'Minimizes risk of damage to your car.', ar: 'يقلل من خطر تلف سيارتك.' } },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title[language]}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc[language]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 1 - Choose Vehicle */}
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&auto=format&fit=crop')` }}
          >
            <div className="absolute inset-0 bg-secondary/90" />
          </div>
          <div className="relative z-10 container-premium text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
              {language === 'en' ? 'STEP 01' : 'الخطوة 01'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
              {language === 'en' ? 'Choose Your Car Type' : 'اختر نوع سيارتك'}
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {vehicles.map((vehicle) => (
                <motion.button
                  key={vehicle.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                    selectedVehicle === vehicle.id
                      ? 'bg-secondary text-primary border-2 border-primary'
                      : 'bg-transparent text-white border-2 border-white/30 hover:border-white'
                  }`}
                >
                  {vehicle.name[language]}
                </motion.button>
              ))}
            </div>

            {/* Car Display */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop"
                alt="Car"
                className="max-w-xl mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Step 2 - Washing Plan */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
                {language === 'en' ? 'STEP 02' : 'الخطوة 02'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                {language === 'en' ? 'Washing Plan' : 'خطة الغسيل'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                    plan.highlighted ? 'text-white' : 'bg-card border border-border shadow-lg'
                  } ${selectedPlan === plan.id ? 'ring-2 ring-primary scale-105' : 'hover:shadow-xl'}`}
                >
                  {plan.highlighted && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&auto=format&fit=crop')` }}
                    >
                      <div className="absolute inset-0 bg-secondary/85" />
                    </div>
                  )}

                  <div className={`relative p-8 ${plan.highlighted ? 'z-10' : ''}`}>
                    <h3 className="text-lg font-bold text-primary mb-4">{plan.name[language]}</h3>
                    <div className="mb-6">
                      <span className="text-sm align-top">$</span>
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                        {getPrice(plan.basePrice).split('.')[0]}
                      </span>
                      <span className={plan.highlighted ? 'text-white/60' : 'text-muted-foreground'}>
                        .{getPrice(plan.basePrice).split('.')[1]}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className={`flex items-center gap-3 text-sm ${plan.highlighted ? 'text-white/80' : 'text-card-foreground'}`}>
                          <Check className={`w-4 h-4 ${feature.included ? 'text-green-500' : 'text-muted-foreground/30'}`} />
                          {feature.name[language]}
                        </li>
                      ))}
                    </ul>
                    <div className={`flex items-center gap-2 mb-4 text-sm ${plan.highlighted ? 'text-white/60' : 'text-muted-foreground'}`}>
                      <Clock className="w-4 h-4 text-primary" />
                      {plan.duration}
                    </div>
                    <Button variant="primary" size="lg" className="w-full rounded-full">
                      {language === 'en' ? 'Select plan' : 'اختر الخطة'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 3 - Additional Services */}
        <section className="section-padding bg-muted">
          <div className="container-premium">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
                {language === 'en' ? 'STEP 03' : 'الخطوة 03'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                {language === 'en' ? 'Additional Services' : 'خدمات إضافية'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center justify-between p-5 rounded-xl cursor-pointer transition-all ${
                    selectedAddons.includes(addon.id)
                      ? 'bg-primary/10 border-2 border-primary'
                      : 'bg-card border border-border hover:border-primary/50'
                  }`}
                >
                  <div>
                    <h4 className="font-semibold text-foreground">{addon.name[language]}</h4>
                    <span className="text-primary font-bold">${addon.price}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      selectedAddons.includes(addon.id) ? 'bg-primary text-white' : 'bg-muted text-foreground'
                    }`}
                  >
                    {selectedAddons.includes(addon.id) ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 4 - Date & Time */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
                {language === 'en' ? 'STEP 04' : 'الخطوة 04'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                {language === 'en' ? 'Date and Time' : 'التاريخ والوقت'}
              </h2>
            </div>

            {/* Date Selector */}
            <div className="bg-muted rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-7 gap-2 md:gap-4">
                {next7Days.map((day, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => !day.isSunday && setSelectedDate(index)}
                    disabled={day.isSunday}
                    className={`py-4 px-2 rounded-2xl text-center transition-all ${
                      selectedDate === index
                        ? 'bg-white shadow-lg'
                        : day.isSunday
                          ? 'bg-transparent text-muted-foreground cursor-not-allowed'
                          : 'hover:bg-white/50'
                    }`}
                  >
                    <span className={`text-2xl font-bold block ${selectedDate === index ? 'text-primary' : 'text-foreground'}`}>
                      {day.date.toString().padStart(2, '0')}
                    </span>
                    <span className={`text-sm ${selectedDate === index ? 'text-primary' : 'text-muted-foreground'}`}>
                      {day.day}
                    </span>
                    {day.isSunday && (
                      <span className="text-xs text-muted-foreground block mt-1">
                        {language === 'en' ? 'Closed' : 'مغلق'}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate !== null && !next7Days[selectedDate].isSunday && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-4 md:grid-cols-8 gap-3"
              >
                {timeSlots.map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-xl font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-primary text-white border-2 border-primary'
                        : 'bg-card border border-border hover:border-primary text-foreground'
                    }`}
                  >
                    {time}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Step 5 - Summary & Confirmation */}
        <section className="section-padding bg-muted">
          <div className="container-premium">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
                {language === 'en' ? 'STEP 05' : 'الخطوة 05'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                {language === 'en' ? 'Summary & Confirmation' : 'الملخص والتأكيد'}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left - Summary Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-6 rounded-2xl text-center ${selectedVehicle ? 'bg-card border border-border' : 'border-2 border-dashed border-primary'}`}>
                  <Car className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <span className="text-xs text-primary uppercase tracking-wider block mb-1">
                    {language === 'en' ? 'CAR TYPE' : 'نوع السيارة'}
                  </span>
                  <span className="font-bold text-foreground">
                    {vehicles.find(v => v.id === selectedVehicle)?.name[language] || '-'}
                  </span>
                </div>
                <div className={`p-6 rounded-2xl text-center ${selectedPlan ? 'bg-card border border-border' : 'border-2 border-dashed border-primary'}`}>
                  <Droplet className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <span className="text-xs text-primary uppercase tracking-wider block mb-1">
                    {language === 'en' ? 'WASHING PLAN' : 'خطة الغسيل'}
                  </span>
                  <span className="font-bold text-foreground">
                    {plans.find(p => p.id === selectedPlan)?.name[language] || (language === 'en' ? 'Choose Your Plan' : 'اختر خطتك')}
                  </span>
                </div>
                <div className={`p-6 rounded-2xl text-center ${selectedDate !== null ? 'bg-card border border-border' : 'border-2 border-dashed border-primary'}`}>
                  <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <span className="text-xs text-primary uppercase tracking-wider block mb-1">
                    {language === 'en' ? 'BOOKING DATE' : 'تاريخ الحجز'}
                  </span>
                  <span className="font-bold text-foreground">
                    {selectedDate !== null ? next7Days[selectedDate].day : (language === 'en' ? 'Choose Date' : 'اختر التاريخ')}
                  </span>
                </div>
                <div className={`p-6 rounded-2xl text-center ${selectedTime ? 'bg-card border border-border' : 'border-2 border-dashed border-primary'}`}>
                  <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <span className="text-xs text-primary uppercase tracking-wider block mb-1">
                    {language === 'en' ? 'BOOKING TIME' : 'وقت الحجز'}
                  </span>
                  <span className="font-bold text-foreground">
                    {selectedTime || (language === 'en' ? 'Choose Time' : 'اختر الوقت')}
                  </span>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="relative rounded-3xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&auto=format&fit=crop')` }}
                >
                  <div className="absolute inset-0 bg-secondary/90" />
                </div>
                <div className="relative z-10 p-8">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {language === 'en' ? 'Please input your' : 'يرجى إدخال'}
                    <span className="text-primary"> {language === 'en' ? 'contact details' : 'تفاصيل الاتصال'}</span>
                  </h3>
                  <p className="text-white/70 text-sm mb-6">
                    {language === 'en' 
                      ? 'In order to make booking you need to choose a plan, time and fill all required form fields.'
                      : 'لإجراء الحجز تحتاج إلى اختيار خطة ووقت وملء جميع حقول النموذج المطلوبة.'}
                  </p>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder={language === 'en' ? 'First Name *' : 'الاسم الأول *'}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-white border-0 rounded-full"
                      />
                      <Input
                        placeholder={language === 'en' ? 'Last Name' : 'اسم العائلة'}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-white border-0 rounded-full"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder={language === 'en' ? 'Phone Number *' : 'رقم الهاتف *'}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white border-0 rounded-full"
                      />
                      <Input
                        placeholder={language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white border-0 rounded-full"
                      />
                    </div>
                    <Textarea
                      placeholder={language === 'en' ? 'Additional information' : 'معلومات إضافية'}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="bg-white border-0 rounded-2xl resize-none"
                      rows={3}
                    />

                    {/* Total Price */}
                    <div className="bg-white/10 rounded-xl p-4 flex justify-between items-center">
                      <span className="text-white font-semibold">
                        {language === 'en' ? 'Total Price:' : 'السعر الإجمالي:'}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        ${calculateTotal()}
                      </span>
                    </div>

                    <Button 
                      onClick={handleSubmit}
                      variant="primary" 
                      size="xl" 
                      className="w-full rounded-full btn-shine"
                    >
                      {language === 'en' ? 'Confirm Booking' : 'تأكيد الحجز'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Packages;
