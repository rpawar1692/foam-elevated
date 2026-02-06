import React from 'react';
import { motion } from 'framer-motion';
import { FaCarAlt, FaCheckCircle } from 'react-icons/fa';
import carWashImage from '../../assets/car.png';

const AboutUsSection: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-[#fff1eb] p-4 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        
        {/* Left side - Text Content */}
        <div className="w-full lg:w-1/2">
          
          {/* Motion Label */}
          <motion.span
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FaCarAlt />
            ABOUT US
          </motion.span>
          
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Car Washing & Cleaning
          </h1>
          
          {/* Paragraph */}
          <motion.p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Experience a hassle-free, professional car wash with our modern automated stations. 
            We use eco-friendly products and advanced equipment to ensure your vehicle is spotless, safe, 
            and looking its best. Take advantage of our seasonal discounts and special offers to keep your car shining all year round.
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> Quick & efficient automated washes
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> Eco-friendly products & safe equipment
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> Seasonal discounts & special offers
            </li>
          </motion.ul>

          {/* Contact Info */}
          {/* <div className="mb-8 flex items-center gap-4 text-lg">
            <span className="font-bold text-gray-700">Call to Book:</span>
            <a 
              href="tel:880010500" 
              className="font-bold text-primary hover:text-primary/80 transition-colors text-lg"
            >
              8-800-10-500
            </a>
          </div> */}

          {/* Read More Button */}
          <div>
            <a 
              href="#"
              className="inline-block bg-[#FF6200] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e55a00] transition-colors text-lg"
            >
              Read More
            </a>
          </div>

        </div>

        {/* Right side - Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <img 
            src={carWashImage} 
            alt="Modern car wash equipment" 
            className="w-full max-w-[1200px] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutUsSection;
