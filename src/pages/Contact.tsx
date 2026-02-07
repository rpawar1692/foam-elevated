import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import heroImage from '@/assets/hero-car-wash.jpg';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(language === 'en' ? 'Please fill all required fields' : 'يرجى ملء جميع الحقول المطلوبة');
      return;
    }
    toast.success(
      language === 'en'
        ? 'Message sent! We will get back to you soon.'
        : 'تم إرسال الرسالة! سنتواصل معك قريباً.'
    );
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: { en: 'Location', ar: 'الموقع' },
      details: { en: 'Dubai, United Arab Emirates', ar: 'دبي، الإمارات العربية المتحدة' },
    },
    {
      icon: Phone,
      title: { en: 'Phone', ar: 'الهاتف' },
      details: { en: '+971 50 123 4567', ar: '+971 50 123 4567' },
    },
    {
      icon: Mail,
      title: { en: 'Email', ar: 'البريد الإلكتروني' },
      details: { en: 'info@foamcarwash.ae', ar: 'info@foamcarwash.ae' },
    },
    {
      icon: Clock,
      title: { en: 'Hours', ar: 'ساعات العمل' },
      details: { en: 'Sat-Thu: 8AM-10PM, Fri: 2PM-10PM', ar: 'السبت-الخميس: 8ص-10م، الجمعة: 2م-10م' },
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
              {t('contact')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              {t('contactSubtitle')}
            </motion.h1>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {t('sendMessage')}
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-3xl p-8 shadow-xl space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      {t('yourName')} *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'en' ? 'John Doe' : 'الاسم الكامل'}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      {t('yourEmail')} *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      {t('yourPhone')}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      {t('yourMessage')} *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'en' ? 'How can we help you?' : 'كيف يمكننا مساعدتك؟'}
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="xl" className="w-full btn-shine">
                    <Send className="w-5 h-5 mr-2" />
                    {t('sendMessage')}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                </h2>

                <div className="space-y-4 mb-10">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-5 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{info.title[language]}</h4>
                        <p className="text-muted-foreground">{info.details[language]}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Full Width Map */}
        <section className="h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053085!2d54.89782413168858!3d25.076280448264477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FOAM Car Wash Location"
          />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;
