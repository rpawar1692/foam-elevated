 import productWax from '@/assets/product-wax.jpg';
 import productShampoo from '@/assets/product-shampoo.jpg';
 import productMicrofiber from '@/assets/product-microfiber.jpg';
 import productTire from '@/assets/product-tire.jpg';
 import productGlass from '@/assets/product-glass.jpg';
 import productLeather from '@/assets/product-leather.jpg';
 import productCeramic from '@/assets/product-ceramic.jpg';
 import productFreshener from '@/assets/product-freshener.jpg';
 import productMitt from '@/assets/product-mitt.jpg';
 import productDashboard from '@/assets/product-dashboard.jpg';
 
 export interface Product {
   id: string;
   name: { en: string; ar: string };
   price: number;
   image: string;
   description: { en: string; ar: string };
   category: string;
 }
 
 export const products: Product[] = [
   {
     id: 'premium-wax',
     name: { en: 'Premium Car Wax', ar: 'شمع سيارات متميز' },
     price: 149,
     image: productWax,
     description: {
       en: 'Professional-grade carnauba wax for ultimate shine and protection',
       ar: 'شمع كرنوبا احترافي للحصول على لمعان وحماية فائقة',
     },
     category: 'protection',
   },
   {
     id: 'foam-shampoo',
     name: { en: 'Foam Car Shampoo', ar: 'شامبو رغوة السيارات' },
     price: 89,
     image: productShampoo,
     description: {
       en: 'Rich foam formula for deep cleaning without scratching',
       ar: 'تركيبة رغوية غنية للتنظيف العميق دون خدش',
     },
     category: 'cleaning',
   },
   {
     id: 'microfiber-set',
     name: { en: 'Microfiber Towel Set', ar: 'مجموعة مناشف ميكروفايبر' },
     price: 79,
     image: productMicrofiber,
     description: {
       en: 'Ultra-soft microfiber towels for streak-free finishing',
       ar: 'مناشف ميكروفايبر ناعمة للغاية لتشطيب خالٍ من الخطوط',
     },
     category: 'accessories',
   },
   {
     id: 'tire-shine',
     name: { en: 'Tire Shine Gel', ar: 'جل لمعان الإطارات' },
     price: 69,
     image: productTire,
     description: {
       en: 'Long-lasting tire dressing for a showroom wet look',
       ar: 'ملمع إطارات طويل الأمد لمظهر رطب كصالة العرض',
     },
     category: 'protection',
   },
   {
     id: 'glass-cleaner',
     name: { en: 'Crystal Glass Cleaner', ar: 'منظف زجاج كريستالي' },
     price: 49,
     image: productGlass,
     description: {
       en: 'Streak-free glass cleaner for crystal clear visibility',
       ar: 'منظف زجاج خالٍ من الخطوط لرؤية واضحة',
     },
     category: 'cleaning',
   },
   {
     id: 'leather-care',
     name: { en: 'Leather Conditioner', ar: 'مكيف الجلد' },
     price: 119,
     image: productLeather,
     description: {
       en: 'Premium leather care for soft, protected interiors',
       ar: 'عناية متميزة بالجلد للحصول على داخلية ناعمة ومحمية',
     },
     category: 'interior',
   },
   {
     id: 'ceramic-coating',
     name: { en: 'Ceramic Coating Kit', ar: 'طقم طلاء سيراميك' },
     price: 299,
     image: productCeramic,
     description: {
       en: 'Professional ceramic coating for ultimate paint protection',
       ar: 'طلاء سيراميك احترافي لحماية فائقة للطلاء',
     },
     category: 'protection',
   },
   {
     id: 'air-freshener',
     name: { en: 'Premium Air Freshener', ar: 'معطر هواء متميز' },
     price: 59,
     image: productFreshener,
     description: {
       en: 'Luxury car fragrance with long-lasting scent',
       ar: 'عطر سيارات فاخر برائحة طويلة الأمد',
     },
     category: 'interior',
   },
   {
     id: 'wash-mitt',
     name: { en: 'Premium Wash Mitt', ar: 'قفاز غسيل متميز' },
     price: 45,
     image: productMitt,
     description: {
       en: 'Soft chenille wash mitt for scratch-free washing',
       ar: 'قفاز غسيل شانيل ناعم لغسيل خالٍ من الخدوش',
     },
     category: 'accessories',
   },
   {
     id: 'dashboard-cleaner',
     name: { en: 'Dashboard Cleaner', ar: 'منظف لوحة القيادة' },
     price: 59,
     image: productDashboard,
     description: {
       en: 'Anti-static dashboard cleaner for dust-free surfaces',
       ar: 'منظف مضاد للكهرباء الساكنة لأسطح خالية من الغبار',
     },
     category: 'interior',
   },
 ];