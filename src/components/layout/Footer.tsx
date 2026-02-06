 import { Link } from 'react-router-dom';
 import { motion } from 'framer-motion';
 import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
 import { useLanguage } from '@/contexts/LanguageContext';
 import logo from '@/assets/logo.png';
 
 const Footer = () => {
   const { t } = useLanguage();
 
   const socialLinks = [
     { icon: Facebook, href: '#', label: 'Facebook' },
     { icon: Instagram, href: '#', label: 'Instagram' },
     { icon: Twitter, href: '#', label: 'Twitter' },
     { icon: Youtube, href: '#', label: 'Youtube' },
   ];
 
   const quickLinks = [
     { path: '/services', label: t('services') },
     { path: '/shop', label: t('shop') },
     { path: '/packages', label: t('packages') },
     { path: '/about', label: t('about') },
     { path: '/contact', label: t('contact') },
   ];
 
   return (
     <footer className="bg-secondary text-secondary-foreground">
       {/* Main Footer */}
       <div className="container-premium section-padding">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {/* Brand Column */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="space-y-6"
           >
             <Link to="/">
               <img src={logo} alt="FOAM Car Wash" className="h-12" />
             </Link>
             <p className="text-secondary-foreground/70 text-sm leading-relaxed">
               {t('footerTagline')}
             </p>
             <div className="flex gap-4">
               {socialLinks.map((social, index) => (
                 <motion.a
                   key={social.label}
                   href={social.href}
                   whileHover={{ scale: 1.2, color: 'hsl(var(--primary))' }}
                   whileTap={{ scale: 0.9 }}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/70 hover:bg-primary/20 transition-colors"
                 >
                   <social.icon className="w-5 h-5" />
                 </motion.a>
               ))}
             </div>
           </motion.div>
 
           {/* Quick Links */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
           >
             <h4 className="text-lg font-bold mb-6">{t('services')}</h4>
             <ul className="space-y-3">
               {quickLinks.map((link) => (
                 <li key={link.path}>
                   <Link
                     to={link.path}
                     className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                   >
                     {link.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </motion.div>
 
           {/* Contact Info */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <h4 className="text-lg font-bold mb-6">{t('contact')}</h4>
             <ul className="space-y-4">
               <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                 <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                 <span>Dubai, United Arab Emirates</span>
               </li>
               <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                 <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                 <span>+971 50 123 4567</span>
               </li>
               <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                 <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                 <span>info@foamcarwash.ae</span>
               </li>
             </ul>
           </motion.div>
 
           {/* Opening Hours */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
           >
             <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
             <ul className="space-y-3 text-sm text-secondary-foreground/70">
               <li className="flex justify-between">
                 <span>Saturday - Thursday</span>
                 <span>8:00 AM - 10:00 PM</span>
               </li>
               <li className="flex justify-between">
                 <span>Friday</span>
                 <span>2:00 PM - 10:00 PM</span>
               </li>
             </ul>
           </motion.div>
         </div>
       </div>
 
       {/* Bottom Bar */}
       <div className="border-t border-secondary-foreground/10">
         <div className="container-premium py-6">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
             <p>© 2024 FOAM Car Wash. {t('allRightsReserved')}</p>
             <div className="flex gap-6">
               <Link to="#" className="hover:text-primary transition-colors">
                 {t('privacyPolicy')}
               </Link>
               <Link to="#" className="hover:text-primary transition-colors">
                 {t('termsOfService')}
               </Link>
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;