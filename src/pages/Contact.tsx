import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InnerPageBanner from '@/components/layout/InnerPageBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

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
      title: { en: 'Working Hours', ar: 'ساعات العمل' },
      details: { en: 'Sat-Thu: 8AM-10PM', ar: 'السبت-الخميس: 8ص-10م' },
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
      <main>
        {/* Inner Page Banner */}
        <InnerPageBanner 
          title={language === 'en' ? 'Contact Us' : 'تواصل معنا'}
          subtitle={t('contact')}
        />

        {/* Contact Info Cards - 4 Columns */}
        <section className="py-12 bg-background">
          <div className="container-premium">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{info.title[language]}</h4>
                  <p className="text-muted-foreground text-sm">{info.details[language]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Width Map */}
        <section className="h-[400px] md:h-[450px]">
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

        {/* Contact Form - Centered */}
        <section className="section-padding bg-muted">
          <div className="container-premium max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {t('sendMessage')}
              </h2>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? "We'd love to hear from you. Send us a message!"
                  : 'نحب أن نسمع منك. أرسل لنا رسالة!'}
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
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
                  className="w-full rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    {t('yourEmail')} *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-xl"
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
                    className="w-full rounded-xl"
                  />
                </div>
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
                  className="w-full resize-none rounded-xl"
                />
              </div>

              <Button type="submit" variant="primary" size="xl" className="w-full btn-shine rounded-full">
                <Send className="w-5 h-5 mr-2" />
                {t('sendMessage')}
              </Button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;
