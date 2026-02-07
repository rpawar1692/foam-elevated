import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InnerPageBanner from '@/components/layout/InnerPageBanner';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { toast } from 'sonner';

const Shop = () => {
  const { t, language } = useLanguage();
  const { items, addItem, removeItem, updateQuantity, total } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: { en: 'All Products', ar: 'جميع المنتجات' } },
    { id: 'cleaning', label: { en: 'Cleaning', ar: 'التنظيف' } },
    { id: 'protection', label: { en: 'Protection', ar: 'الحماية' } },
    { id: 'interior', label: { en: 'Interior', ar: 'الداخلية' } },
    { id: 'accessories', label: { en: 'Accessories', ar: 'الإكسسوارات' } },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product);
    toast.success(language === 'en' ? 'Added to cart!' : 'تمت الإضافة للسلة!');
  };

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
          title={t('productsSubtitle')}
          subtitle={t('shop')}
        />
 
         {/* Shop Content */}
         <section className="section-padding bg-background">
           <div className="container-premium">
             {/* Filters */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-wrap items-center gap-3 mb-10"
             >
               <Filter className="w-5 h-5 text-muted-foreground" />
               {categories.map((category) => (
                 <motion.button
                   key={category.id}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => setSelectedCategory(category.id)}
                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                     selectedCategory === category.id
                       ? 'bg-primary text-primary-foreground'
                       : 'bg-muted text-muted-foreground hover:bg-primary/10'
                   }`}
                 >
                   {category.label[language]}
                 </motion.button>
               ))}
             </motion.div>
 
             {/* Products Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {filteredProducts.map((product, index) => (
                 <motion.div
                   key={product.id}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.05 }}
                   className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                 >
                   {/* Image */}
                   <div className="aspect-square overflow-hidden bg-muted relative">
                     <img
                       src={product.image}
                       alt={product.name[language]}
                       className="w-full h-full object-cover product-zoom"
                     />
                     {/* Quick Add Button */}
                     <motion.button
                       initial={{ opacity: 0, y: 20 }}
                       whileHover={{ scale: 1.1 }}
                       className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                       onClick={() => handleAddToCart(product)}
                     >
                       <ShoppingCart className="w-5 h-5" />
                     </motion.button>
                   </div>
 
                   {/* Content */}
                   <div className="p-5">
                     <span className="text-xs text-primary uppercase tracking-wider font-medium">
                       {categories.find((c) => c.id === product.category)?.label[language]}
                     </span>
                     <h3 className="font-bold text-card-foreground mt-2 mb-2 line-clamp-1">
                       {product.name[language]}
                     </h3>
                     <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                       {product.description[language]}
                     </p>
                     <div className="flex items-center justify-between">
                       <span className="text-xl font-bold text-primary">
                         {product.price} {t('currency')}
                       </span>
                       <Button
                         variant="primary"
                         size="sm"
                         onClick={() => handleAddToCart(product)}
                         className="btn-shine"
                       >
                         {t('addToCart')}
                       </Button>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
         {/* Floating Cart Button */}
         {items.length > 0 && (
           <motion.button
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             onClick={() => setIsCartOpen(true)}
             className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl animate-pulse-glow z-40"
           >
             <ShoppingCart className="w-6 h-6" />
             <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold">
               {items.length}
             </span>
           </motion.button>
         )}
 
         {/* Cart Sidebar */}
         <AnimatePresence>
           {isCartOpen && (
             <>
               {/* Backdrop */}
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onClick={() => setIsCartOpen(false)}
                 className="fixed inset-0 bg-secondary/80 backdrop-blur-sm z-50"
               />
 
               {/* Sidebar */}
               <motion.div
                 initial={{ x: '100%' }}
                 animate={{ x: 0 }}
                 exit={{ x: '100%' }}
                 transition={{ type: 'spring', damping: 25 }}
                 className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card shadow-2xl z-50 flex flex-col"
               >
                 {/* Header */}
                 <div className="flex items-center justify-between p-6 border-b border-border">
                   <h2 className="text-xl font-bold text-card-foreground">{t('cart')}</h2>
                   <button onClick={() => setIsCartOpen(false)}>
                     <X className="w-6 h-6 text-muted-foreground hover:text-card-foreground" />
                   </button>
                 </div>
 
                 {/* Items */}
                 <div className="flex-1 overflow-y-auto p-6 space-y-4">
                   {items.length === 0 ? (
                     <p className="text-center text-muted-foreground py-10">
                       {language === 'en' ? 'Your cart is empty' : 'سلتك فارغة'}
                     </p>
                   ) : (
                     items.map((item) => (
                       <motion.div
                         key={item.id}
                         layout
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         className="flex gap-4 bg-muted rounded-xl p-4"
                       >
                         <img
                           src={item.image}
                           alt={item.name[language]}
                           className="w-20 h-20 rounded-lg object-cover"
                         />
                         <div className="flex-1">
                           <h4 className="font-medium text-card-foreground line-clamp-1">
                             {item.name[language]}
                           </h4>
                           <p className="text-primary font-bold">
                             {item.price} {t('currency')}
                           </p>
                           <div className="flex items-center gap-2 mt-2">
                             <button
                               onClick={() => updateQuantity(item.id, item.quantity - 1)}
                               className="w-8 h-8 rounded-full bg-card flex items-center justify-center"
                             >
                               <Minus className="w-4 h-4" />
                             </button>
                             <span className="font-medium">{item.quantity}</span>
                             <button
                               onClick={() => updateQuantity(item.id, item.quantity + 1)}
                               className="w-8 h-8 rounded-full bg-card flex items-center justify-center"
                             >
                               <Plus className="w-4 h-4" />
                             </button>
                             <button
                               onClick={() => removeItem(item.id)}
                               className="ml-auto text-destructive"
                             >
                               <X className="w-5 h-5" />
                             </button>
                           </div>
                         </div>
                       </motion.div>
                     ))
                   )}
                 </div>
 
                 {/* Footer */}
                 {items.length > 0 && (
                   <div className="p-6 border-t border-border space-y-4">
                     <div className="flex justify-between text-lg font-bold text-card-foreground">
                       <span>{t('total')}</span>
                       <span className="text-primary">
                         {total} {t('currency')}
                       </span>
                     </div>
                     <Button
                       variant="primary"
                       size="xl"
                       className="w-full btn-shine"
                       onClick={() => {
                         toast.success(
                           language === 'en'
                             ? 'Redirecting to checkout...'
                             : 'جاري التحويل للدفع...'
                         );
                       }}
                     >
                       {t('checkout')}
                     </Button>
                   </div>
                 )}
               </motion.div>
             </>
           )}
         </AnimatePresence>
       </main>
       <Footer />
     </motion.div>
   );
 };
 
 export default Shop;