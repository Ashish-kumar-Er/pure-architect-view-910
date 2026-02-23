import heroImage from "@/assets/hero-architecture.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white text-architectural mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {t("hero.title1")}
          <br />
          {t("hero.title2")}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {t("hero.subtitle")}
        </motion.p>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="w-px h-16 bg-white/40" />
        <div className="text-minimal text-white/60 mt-4 rotate-90 origin-center">
          {t("hero.scroll")}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
