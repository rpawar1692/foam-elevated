import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import WashingPriceSection from '@/components/home/WashingPriceSection';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ContactCTA from '@/components/home/ContactCTA';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <WashingPriceSection />
        <BeforeAfterSection />
        <WhyChooseUs />
        <TestimonialsSlider />
        <ContactCTA />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
