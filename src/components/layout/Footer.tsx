import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/services', label: t('services') },
    { path: '/shop', label: t('shop') },
    { path: '/packages', label: t('packages') },
    { path: '/contact', label: t('contact') },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative">
      {/* Top Bar - Primary Color */}
      <div className="h-1.5 bg-primary" />

      {/* Main Footer - Dark Background */}
      <div className="bg-[#1a1a1a] text-white">
        <div className="container-premium py-16">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="FOAM Car Wash" className="h-16 mx-auto" />
            </Link>
            <p className="text-white/60 max-w-md mx-auto">
              {language === 'en'
                ? 'Eco-friendly car washes focus on using natural cleaners for a safe and sustainable cleaning process.'
                : 'غسيل السيارات الصديق للبيئة يركز على استخدام المنظفات الطبيعية لعملية تنظيف آمنة ومستدامة.'}
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-transparent border-2 border-primary flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">+971 50 123 4567</h4>
              <p className="text-primary text-sm">
                {language === 'en' ? 'Round-the-clock' : 'على مدار الساعة'}
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-transparent border-2 border-primary flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">
                {language === 'en' ? 'Car Washing Point' : 'نقطة غسيل السيارات'}
              </h4>
              <p className="text-white/60 text-sm">
                {language === 'en' 
                  ? 'Dubai, United Arab Emirates'
                  : 'دبي، الإمارات العربية المتحدة'}
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-transparent border-2 border-primary flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">info@foamcarwash.ae</h4>
              <p className="text-white/60 text-sm">support@foamcarwash.ae</p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-transparent border-2 border-primary flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm">
                <span className="text-primary">
                  {language === 'en' ? 'Sat-Thu:' : 'السبت-الخميس:'}
                </span>{' '}
                <span className="font-bold">08:00 - 22:00</span>
              </p>
              <p className="text-sm">
                <span className="text-primary">
                  {language === 'en' ? 'Fri:' : 'الجمعة:'}
                </span>{' '}
                <span className="font-bold">14:00 - 22:00</span>
              </p>
            </motion.div>
          </div>

          {/* Quick Links & Social */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Quick Links */}
              <nav className="flex flex-wrap justify-center gap-6">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-white/70 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10">
          <div className="container-premium py-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-white/50">
              <span className="text-primary font-semibold">FOAM Car Wash</span>
              <span>© {t('allRightsReserved')} - 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
