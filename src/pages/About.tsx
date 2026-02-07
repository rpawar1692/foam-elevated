import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Leaf, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InnerPageBanner from '@/components/layout/InnerPageBanner';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import shopExterior from '@/assets/shop-exterior.jpg';

const About = () => {
  const { language } = useLanguage();

  const highlights = [
    {
      icon: Award,
      title: { en: 'Premium Quality', ar: 'جودة متميزة' },
      description: {
        en: 'Only the finest products and techniques',
        ar: 'فقط أفضل المنتجات والتقنيات',
      },
    },
    {
      icon: Leaf,
      title: { en: 'Eco-Friendly', ar: 'صديق للبيئة' },
      description: {
        en: 'Biodegradable and safe products',
        ar: 'منتجات قابلة للتحلل وآمنة',
      },
    },
    {
      icon: Shield,
      title: { en: 'Expert Team', ar: 'فريق خبير' },
      description: {
        en: 'Certified professionals with passion',
        ar: 'محترفون معتمدون بشغف',
      },
    },
  ];

  const values = [
    {
      icon: Award,
      title: { en: 'Excellence', ar: 'التميز' },
      description: {
        en: 'We strive for perfection in every detail',
        ar: 'نسعى للكمال في كل تفصيل',
      },
    },
    {
      icon: Users,
      title: { en: 'Customer First', ar: 'العميل أولاً' },
      description: {
        en: 'Your satisfaction is our top priority',
        ar: 'رضاك هو أولويتنا القصوى',
      },
    },
    {
      icon: Target,
      title: { en: 'Innovation', ar: 'الابتكار' },
      description: {
        en: 'Always advancing our techniques and products',
        ar: 'نطور تقنياتنا ومنتجاتنا باستمرار',
      },
    },
    {
      icon: Heart,
      title: { en: 'Passion', ar: 'الشغف' },
      description: {
        en: 'We love cars as much as you do',
        ar: 'نحب السيارات مثلك تماماً',
      },
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
          title={language === 'en' ? 'About Us' : 'من نحن'}
          subtitle={language === 'en' ? 'The Car Care Project' : 'مشروع العناية بالسيارات'}
        />

        {/* Highlights Section */}
        <section className="py-16 bg-background">
          <div className="container-premium">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-muted hover:bg-primary/5 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {item.title[language]}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description[language]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section with Side-by-Side Images */}
        <section className="section-padding bg-muted">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  {language === 'en' ? 'Our Story' : 'قصتنا'}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {language === 'en'
                    ? 'From passion to perfection'
                    : 'من الشغف إلى الكمال'}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === 'en'
                      ? 'FOAM Car Wash began with a simple belief: your car deserves the best. What started as a small detailing service has grown into a premier destination for automotive care in the UAE.'
                      : 'بدأت فوم غسيل السيارات بإيمان بسيط: سيارتك تستحق الأفضل. ما بدأ كخدمة تفصيل صغيرة نما ليصبح وجهة رئيسية للعناية بالسيارات في الإمارات.'}
                  </p>
                  <p>
                    {language === 'en'
                      ? 'Our team of certified professionals uses only premium products and the latest techniques to deliver results that exceed expectations.'
                      : 'يستخدم فريقنا من المحترفين المعتمدين فقط المنتجات المتميزة وأحدث التقنيات لتقديم نتائج تفوق التوقعات.'}
                  </p>
                </div>
              </motion.div>

              {/* Two Side-by-Side Images */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <img
                    src={shopExterior}
                    alt="FOAM Car Wash"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden mt-8"
                >
                  <img
                    src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop"
                    alt="Car Detailing"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
                {language === 'en' ? 'OUR VALUES' : 'قيمنا'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {language === 'en' ? 'What We Stand For' : 'ما ندافع عنه'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-card-foreground mb-3">
                    {value.title[language]}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description[language]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Service Section - Parallax */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&auto=format&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-secondary/80" />
          </div>

          <div className="relative z-10 container-premium px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">
                {language === 'en' ? 'Special Service' : 'خدمة خاصة'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {language === 'en' 
                  ? 'Complete Interior Dry Cleaning' 
                  : 'تنظيف داخلي جاف كامل'}
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                {language === 'en'
                  ? 'Heightened care services focus on every detail, ensuring your car gets a spotless and thorough wash. Our expert team uses premium products for exceptional results.'
                  : 'خدمات العناية المكثفة تركز على كل التفاصيل، لضمان حصول سيارتك على غسيل شامل ونظيف. يستخدم فريقنا الخبير منتجات متميزة للحصول على نتائج استثنائية.'}
              </p>
              <Link to="/services">
                <Button variant="primary" size="xl" className="btn-shine rounded-full px-10">
                  {language === 'en' ? 'Read More' : 'اقرأ المزيد'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
