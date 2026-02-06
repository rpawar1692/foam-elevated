import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Sparkles, Car, Shield } from "lucide-react";
import { FaCarAlt } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import servicePolish from "@/assets/service-polish.jpg";

const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [
    {
      step: "01",
      icon: Droplets,
      title: t("foamExterior"),
      description: t("foamExteriorDesc"),
      image: serviceExterior,
    },
    {
      step: "02",
      icon: Sparkles,
      title: t("interiorCleaning"),
      description: t("interiorCleaningDesc"),
      image: serviceInterior,
    },
    {
      step: "03",
      icon: Car,
      title: t("carDetailing"),
      description: t("carDetailingDesc"),
      image: servicePolish,
    },
    {
      step: "04",
      icon: Shield,
      title: t("polishCeramic"),
      description: t("polishCeramicDesc"),
      image: servicePolish,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            <FaCarAlt />
            {t("ourServices")}
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-5">
            {t("servicesSubtitle")}
          </h2>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Step + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-primary/20">
                    {service.step}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link to="/services">
            <Button variant="primary" size="lg"  className="btn-shine">
              {t("learnMore")}
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesPreview;
