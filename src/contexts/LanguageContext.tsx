 import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
 
 type Language = 'en' | 'ar';
 
 interface Translations {
   [key: string]: {
     en: string;
     ar: string;
   };
 }
 
export const translations: Translations = {
  // Navigation
  home: { en: 'Home', ar: 'الرئيسية' },
  services: { en: 'Services', ar: 'الخدمات' },
  shop: { en: 'Shop', ar: 'المتجر' },
  packages: { en: 'Packages', ar: 'الباقات' },
  about: { en: 'About', ar: 'من نحن' },
  contact: { en: 'Contact', ar: 'تواصل معنا' },
  bookNow: { en: 'Book Now', ar: 'احجز الآن' },
  
  // Hero
  heroTitle: { en: 'Premium Car Wash & Car Care Solutions', ar: 'حلول غسيل وعناية متميزة بالسيارات' },
  heroSubtitle: { en: 'Experience the art of automotive perfection with our luxury detailing services', ar: 'استمتع بفن الكمال في عالم السيارات مع خدمات التفصيل الفاخرة' },
  bookCarWash: { en: 'Book Car Wash', ar: 'احجز غسيل سيارة' },
  shopProducts: { en: 'Shop Products', ar: 'تسوق المنتجات' },
  
  // Services
  ourServices: { en: 'Our Services', ar: 'خدماتنا' },
  servicesSubtitle: { en: 'Professional Car Care', ar: 'عناية احترافية بالسيارات' },
  foamExterior: { en: 'Foam Exterior Wash', ar: 'غسيل خارجي بالرغوة' },
  foamExteriorDesc: { en: 'Deep foam cleaning that removes all contaminants while protecting your paint', ar: 'تنظيف عميق بالرغوة يزيل جميع الملوثات مع حماية الطلاء' },
  interiorCleaning: { en: 'Interior Deep Cleaning', ar: 'تنظيف داخلي عميق' },
  interiorCleaningDesc: { en: 'Complete interior restoration including leather, carpets, and dashboard', ar: 'استعادة داخلية كاملة تشمل الجلد والسجاد ولوحة القيادة' },
  carDetailing: { en: 'Car Detailing', ar: 'تفصيل السيارات' },
  carDetailingDesc: { en: 'Meticulous attention to every detail for a showroom finish', ar: 'اهتمام دقيق بكل التفاصيل للحصول على لمسة صالة العرض' },
  polishCeramic: { en: 'Polishing & Ceramic Protection', ar: 'التلميع والحماية السيراميكية' },
  polishCeramicDesc: { en: 'Long-lasting protection with professional ceramic coating', ar: 'حماية طويلة الأمد مع طلاء سيراميك احترافي' },
  
  // Products
  ourProducts: { en: 'Our Products', ar: 'منتجاتنا' },
  productsSubtitle: { en: 'Premium Car Care Products', ar: 'منتجات العناية المتميزة بالسيارات' },
  addToCart: { en: 'Add to Cart', ar: 'أضف للسلة' },
  viewAll: { en: 'View All Products', ar: 'عرض جميع المنتجات' },
  viewAll: { en: 'View All Products', ar: 'عرض جميع المنتجات' },
  
  // Packages
  ourPackages: { en: 'Our Packages', ar: 'باقاتنا' },
  packagesSubtitle: { en: 'Choose the perfect package for your vehicle', ar: 'اختر الباقة المثالية لسيارتك' },
  recommended: { en: 'Recommended', ar: 'موصى به' },
  selectPackage: { en: 'Select Package', ar: 'اختر الباقة' },
  
  // Testimonials
  testimonials: { en: 'Testimonials', ar: 'آراء العملاء' },
  testimonialsSubtitle: { en: 'Trusted by thousands of satisfied customers', ar: 'موثوق به من آلاف العملاء الراضين' },
  
  // Why Choose Us
  whyChooseUs: { en: 'Why Choose FOAM?', ar: 'لماذا تختار فوم؟' },
  whyChooseUsSubtitle: { en: 'The difference is in the details', ar: 'الفرق يكمن في التفاصيل' },
  premiumProducts: { en: 'Premium Products', ar: 'منتجات متميزة' },
  expertTeam: { en: 'Expert Team', ar: 'فريق خبير' },
  fastService: { en: 'Fast Service', ar: 'خدمة سريعة' },
  satisfaction: { en: 'Satisfaction Guaranteed', ar: 'رضا مضمون' },
  
  // About
  aboutTitle: { en: 'About FOAM Car Wash', ar: 'عن فوم غسيل السيارات' },
  aboutSubtitle: { en: 'The Car Care Project', ar: 'مشروع العناية بالسيارات' },
  ourStory: { en: 'Our Story', ar: 'قصتنا' },
  ourMission: { en: 'Our Mission', ar: 'مهمتنا' },
  ourVision: { en: 'Our Vision', ar: 'رؤيتنا' },
  
  // Contact
  contactTitle: { en: 'Get in Touch', ar: 'تواصل معنا' },
  contactSubtitle: { en: "We'd love to hear from you", ar: 'نحب أن نسمع منك' },
  sendMessage: { en: 'Send Message', ar: 'إرسال رسالة' },
  yourName: { en: 'Your Name', ar: 'اسمك' },
  yourEmail: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
  yourPhone: { en: 'Your Phone', ar: 'هاتفك' },
  yourMessage: { en: 'Your Message', ar: 'رسالتك' },
  
  // Booking
  bookService: { en: 'Book a Service', ar: 'احجز خدمة' },
  selectService: { en: 'Select Service', ar: 'اختر الخدمة' },
  selectDate: { en: 'Select Date', ar: 'اختر التاريخ' },
  selectTime: { en: 'Select Time', ar: 'اختر الوقت' },
  vehicleType: { en: 'Vehicle Type', ar: 'نوع السيارة' },
  confirmBooking: { en: 'Confirm Booking', ar: 'تأكيد الحجز' },
  
  // Footer
  footerTagline: { en: 'The Car Care Project', ar: 'مشروع العناية بالسيارات' },
  allRightsReserved: { en: 'All Rights Reserved', ar: 'جميع الحقوق محفوظة' },
  privacyPolicy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  termsOfService: { en: 'Terms of Service', ar: 'شروط الخدمة' },
  
  // Cart
  cart: { en: 'Cart', ar: 'السلة' },
  checkout: { en: 'Checkout', ar: 'الدفع' },
  total: { en: 'Total', ar: 'المجموع' },
  
  // Common
  learnMore: { en: 'Learn More', ar: 'اعرف المزيد' },
  getStarted: { en: 'Get Started', ar: 'ابدأ الآن' },
  currency: { en: 'AED', ar: 'درهم' },
};
 
 interface LanguageContextType {
   language: Language;
   setLanguage: (lang: Language) => void;
   t: (key: string) => string;
   dir: 'ltr' | 'rtl';
 }
 
 const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
 
 export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [language, setLanguage] = useState<Language>('en');
 
   const t = (key: string): string => {
     return translations[key]?.[language] || key;
   };
 
   const dir = language === 'ar' ? 'rtl' : 'ltr';
 
   useEffect(() => {
     document.documentElement.dir = dir;
     document.documentElement.lang = language;
   }, [language, dir]);
 
   return (
     <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
       {children}
     </LanguageContext.Provider>
   );
 };
 
 export const useLanguage = () => {
   const context = useContext(LanguageContext);
   if (!context) {
     throw new Error('useLanguage must be used within a LanguageProvider');
   }
   return context;
 };