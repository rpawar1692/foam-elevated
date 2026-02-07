import { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sparkles, Car, Shield, Calendar, Clock, Check, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import serviceExterior from '@/assets/service-exterior.jpg';
import serviceInterior from '@/assets/service-interior.jpg';
import servicePolish from '@/assets/service-polish.jpg';
import heroImage from '@/assets/hero-car-wash.jpg';

const Services = () => {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    {
      id: 'foam-exterior',
      icon: Droplets,
      title: t('foamExterior'),
      description: t('foamExteriorDesc'),
      image: serviceExterior,
      price: 99,
      duration: '45 min',
      features: [
        { en: 'High-pressure pre-rinse', ar: 'شطف مسبق بالضغط العالي' },
        { en: 'Snow foam application', ar: 'تطبيق رغوة الثلج' },
        { en: 'Hand wash', ar: 'غسيل يدوي' },
        { en: 'Wheel cleaning', ar: 'تنظيف العجلات' },
        { en: 'Tire dressing', ar: 'تلميع الإطارات' },
      ],
    },
    {
      id: 'interior-cleaning',
      icon: Sparkles,
      title: t('interiorCleaning'),
      description: t('interiorCleaningDesc'),
      image: serviceInterior,
      price: 149,
      duration: '90 min',
      features: [
        { en: 'Vacuum cleaning', ar: 'التنظيف بالمكنسة الكهربائية' },
        { en: 'Dashboard detailing', ar: 'تفصيل لوحة القيادة' },
        { en: 'Leather conditioning', ar: 'ترطيب الجلد' },
        { en: 'Glass cleaning', ar: 'تنظيف الزجاج' },
        { en: 'Air freshener', ar: 'معطر الهواء' },
      ],
    },
    {
      id: 'car-detailing',
      icon: Car,
      title: t('carDetailing'),
      description: t('carDetailingDesc'),
      image: servicePolish,
      price: 299,
      duration: '3-4 hours',
      features: [
        { en: 'Complete exterior wash', ar: 'غسيل خارجي كامل' },
        { en: 'Clay bar treatment', ar: 'معالجة بالطين' },
        { en: 'Machine polishing', ar: 'تلميع بالآلة' },
        { en: 'Wax protection', ar: 'حماية بالشمع' },
        { en: 'Interior deep clean', ar: 'تنظيف داخلي عميق' },
      ],
    },
    {
      id: 'ceramic-protection',
      icon: Shield,
      title: t('polishCeramic'),
      description: t('polishCeramicDesc'),
      image: servicePolish,
      price: 999,
      duration: '1-2 days',
      features: [
        { en: 'Paint correction', ar: 'تصحيح الطلاء' },
        { en: 'Surface decontamination', ar: 'إزالة التلوث من السطح' },
        { en: '9H ceramic coating', ar: 'طلاء سيراميك 9H' },
        { en: '3-year protection', ar: 'حماية لمدة 3 سنوات' },
        { en: 'Hydrophobic finish', ar: 'لمسة طاردة للماء' },
      ],
    },
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime) {
      toast.error(language === 'en' ? 'Please fill all fields' : 'يرجى ملء جميع الحقول');
      return;
    }
    toast.success(
      language === 'en'
        ? 'Booking confirmed! We will contact you shortly.'
        : 'تم تأكيد الحجز! سنتصل بك قريباً.'
    );
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
              {t('ourServices')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              {t('servicesSubtitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg mt-4 max-w-2xl mx-auto px-4"
            >
              {language === 'en'
                ? 'Choose from our range of premium car care services designed to keep your vehicle in showroom condition.'
                : 'اختر من مجموعة خدمات العناية المتميزة بالسيارات المصممة للحفاظ على سيارتك في حالة صالة العرض.'}
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group rounded-3xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-all duration-500 ${
                    selectedService === service.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-card-foreground">{service.title}</h3>
                          <p className="text-muted-foreground text-sm flex items-center gap-2">
                            <Clock className="w-4 h-4" /> {service.duration}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">
                          {service.price} <span className="text-sm">{t('currency')}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-card-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature[language]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form - Improved Layout */}
        <section className="section-padding bg-secondary">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-secondary-foreground"
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  {t('bookService')}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {language === 'en' ? 'Schedule Your Appointment' : 'حدد موعدك'}
                </h2>
                <p className="text-secondary-foreground/70 text-lg mb-8">
                  {language === 'en'
                    ? 'Book your preferred service online and let our expert team take care of your vehicle. We offer flexible scheduling to fit your busy lifestyle.'
                    : 'احجز خدمتك المفضلة عبر الإنترنت ودع فريقنا الخبير يعتني بسيارتك. نقدم جدولة مرنة تناسب نمط حياتك المزدحم.'}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary-foreground/5">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-secondary-foreground/60 text-sm">
                        {language === 'en' ? 'Call us directly' : 'اتصل بنا مباشرة'}
                      </p>
                      <p className="font-bold text-xl">+971 50 123 4567</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form onSubmit={handleBooking} className="bg-card rounded-3xl p-8 shadow-xl space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-3">
                      {t('selectService')}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <motion.button
                          key={service.id}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedService(service.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            selectedService === service.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <span className="font-medium text-sm text-card-foreground">{service.title}</span>
                          <span className="block text-primary font-bold mt-1">
                            {service.price} {t('currency')}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-3">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      {t('selectDate')}
                    </label>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-3">
                      <Clock className="w-4 h-4 inline mr-2" />
                      {t('selectTime')}
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <motion.button
                          key={time}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            selectedTime === time
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-primary/10'
                          }`}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <Button type="submit" variant="primary" size="xl" className="w-full btn-shine">
                    {t('confirmBooking')}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Services;
