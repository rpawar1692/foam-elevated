import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Leaf, Shield, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import shopExterior from '@/assets/shop-exterior.jpg';
import heroImage from '@/assets/hero-car-wash.jpg';

const About = () => {
  const { t, language } = useLanguage();

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

  const timeline = [
    {
      year: '2018',
      title: { en: 'Founded', ar: 'التأسيس' },
      description: {
        en: 'FOAM Car Wash was born from a passion for automotive excellence',
        ar: 'ولدت فوم غسيل السيارات من شغف بالتميز في عالم السيارات',
      },
    },
    {
      year: '2019',
      title: { en: 'First Location', ar: 'الموقع الأول' },
      description: {
        en: 'Opened our flagship detailing center in Dubai',
        ar: 'افتتحنا مركز التفصيل الرئيسي في دبي',
      },
    },
    {
      year: '2021',
      title: { en: 'Product Launch', ar: 'إطلاق المنتجات' },
      description: {
        en: 'Launched our premium car care product line',
        ar: 'أطلقنا خط منتجات العناية المتميزة بالسيارات',
      },
    },
    {
      year: '2023',
      title: { en: 'Expansion', ar: 'التوسع' },
      description: {
        en: 'Expanded to multiple locations across the UAE',
        ar: 'توسعنا إلى مواقع متعددة في جميع أنحاء الإمارات',
      },
    },
    {
      year: '2024',
      title: { en: 'The Future', ar: 'المستقبل' },
      description: {
        en: 'Continuing to set the standard for premium car care',
        ar: 'نستمر في وضع معايير العناية المتميزة بالسيارات',
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
      <main className="pt-24">
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
              {t('about')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              {t('aboutSubtitle')}
            </motion.h1>
          </div>
        </section>

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

        {/* Story Section */}
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
                  {t('ourStory')}
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
                      ? 'Our team of certified professionals uses only premium products and the latest techniques to deliver results that exceed expectations. Every vehicle that enters our facility receives the attention and care it deserves.'
                      : 'يستخدم فريقنا من المحترفين المعتمدين فقط المنتجات المتميزة وأحدث التقنيات لتقديم نتائج تفوق التوقعات. كل سيارة تدخل مرفقنا تحصل على الاهتمام والعناية التي تستحقها.'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <img
                    src={shopExterior}
                    alt="FOAM Car Wash"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-3xl -z-10" />
              </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {language === 'en' ? 'Our Values' : 'قيمنا'}
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

        {/* Timeline Section */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                {language === 'en' ? 'Our Journey' : 'رحلتنا'}
              </h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2 hidden md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-primary font-bold text-2xl">{item.year}</span>
                    <h3 className="font-bold text-xl text-secondary-foreground mt-2">
                      {item.title[language]}
                    </h3>
                    <p className="text-secondary-foreground/70 mt-2">
                      {item.description[language]}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary ring-4 ring-primary/30 flex-shrink-0" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
