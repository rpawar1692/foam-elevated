import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { toast } from "sonner";
import { FaCarAlt } from 'react-icons/fa';

const CARD_WIDTH = 300;
const CARD_GAP = 32;
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP;

const ProductsCarousel = () => {
  const { t, language } = useLanguage();
  const { addItem } = useCart();
  const carouselRef = useRef<HTMLDivElement>(null);

  const baseProducts = products.slice(0, 6);
  const extendedProducts = [...baseProducts, ...baseProducts];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const totalDots = baseProducts.length;

  /* ------------------ Auto Play ------------------ */
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      scroll("right");
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovering]);

  /* ------------------ Infinite Loop Fix ------------------ */
  useEffect(() => {
    if (!carouselRef.current) return;

    if (currentIndex >= baseProducts.length) {
      setTimeout(() => {
        carouselRef.current?.scrollTo({
          left: 0,
          behavior: "auto",
        });
        setCurrentIndex(0);
      }, 300);
    }
  }, [currentIndex, baseProducts.length]);

  /* ------------------ Scroll Helpers ------------------ */
  const scrollToIndex = useCallback((index: number) => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollTo({
      left: index * SCROLL_AMOUNT,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      let nextIndex =
        direction === "right"
          ? currentIndex + 1
          : currentIndex === 0
          ? baseProducts.length - 1
          : currentIndex - 1;

      scrollToIndex(nextIndex);
    },
    [currentIndex, scrollToIndex, baseProducts.length]
  );

  /* ------------------ Add to Cart ------------------ */
  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product);
    toast.success(
      language === "en" ? "Added to cart!" : "تمت الإضافة للسلة!"
    );
  };

  return (
    <section
      className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-[1380px] mx-auto px-6">

        {/* ---------- Header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FaCarAlt />
            {t("ourProducts")}
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("productsSubtitle")}
          </h2>
        </motion.div>

        {/* ---------- Carousel ---------- */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-hidden px-6 pb-6"
        >
          {extendedProducts.map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-[300px]"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                transition: { 
                  duration: 0.5,
                  delay: index % 6 * 0.1,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 h-full group">
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                  <motion.img
                    src={product.image}
                    alt={product.name[language]}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3 
                    className="font-bold text-lg mb-2 line-clamp-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    {product.name[language]}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted-foreground line-clamp-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {product.description[language]}
                  </motion.p>

                  <div className="flex items-center justify-between">
                    <motion.span 
                      className="text-xl font-bold text-primary"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {product.price} {t("currency")}
                    </motion.span>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleAddToCart(product)}
                      className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- Dots + Arrows ---------- */}
        <motion.div 
          className="flex justify-center items-center gap-3 mt-4 relative -top-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>

          <div className="flex gap-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`transition-all duration-300 ${
                  currentIndex === i
                    ? "w-8 h-3 bg-primary rounded-full"
                    : "w-3 h-3 bg-gray-300 rounded-full"
                }`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* ---------- View All ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/shop">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="px-10 py-6 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {t("viewAll")}
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsCarousel;