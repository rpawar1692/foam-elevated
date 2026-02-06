import { motion } from 'framer-motion';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import { FaCarAlt } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import shopExterior from '@/assets/shop-exterior.jpg';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('premiumProducts'),
      description: { en: 'Only the finest car care products', ar: 'فقط أفضل منتجات العناية بالسيارات' },
    },
    {
      icon: Users,
      title: t('expertTeam'),
      description: { en: 'Trained professionals with passion', ar: 'محترفون مدربون بشغف' },
    },
    {
      icon: Clock,
      title: t('fastService'),
      description: { en: 'Quick turnaround without compromise', ar: 'إنجاز سريع دون تنازل' },
    },
    {
      icon: ThumbsUp,
      title: t('satisfaction'),
      description: { en: '100% customer satisfaction', ar: 'رضا العملاء 100%' },
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <section className="section-padding overflow-hidden bg-primary/10">
      <div className="container-premium">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-primary p-3">
              <motion.img
                src={shopExterior}
                alt="FOAM Car Wash"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
          >
            <motion.span 
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <FaCarAlt />
              {t('whyChooseUs')}
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('whyChooseUsSubtitle')}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={featureVariants}
                  className="flex gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary-dark transition-colors"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {feature.description[t('home') === 'Home' ? 'en' : 'ar']}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;