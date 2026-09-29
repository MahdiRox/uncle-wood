import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Hero = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-[550px] lg:min-h-screen flex items-center border-b border-white/5 bg-brand-bg overflow-hidden pt-20 lg:pt-0">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: "radial-gradient(#C5A059 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} 
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 w-full z-10 relative">
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-1 lg:col-span-5 px-6 lg:px-12 flex flex-col justify-center py-12 lg:py-24"
        >
          <div className="mb-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-accent block">
              {t.badge}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.1] mb-6 font-light italic">
            {t.titlePart1} <br /> 
            <span className="not-italic font-bold text-white">{t.titlePart2}</span>
          </h1>

          <p className="font-sans text-sm opacity-65 leading-relaxed max-w-md mb-8">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <a 
              href="#menu" 
              className="bg-brand-accent text-brand-bg px-8 py-3.5 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-center hover:bg-white hover:text-brand-bg transition-all shadow-xl active:scale-95"
            >
              {t.viewMenu}
            </a>
            <a 
              href="#locations" 
              className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3.5 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent hover:text-white transition-all group"
            >
              <span>{t.ourLocations}</span>
              <div className="h-[1px] w-10 bg-brand-accent opacity-50 group-hover:w-14 transition-all duration-300"></div>
            </a>
          </div>
        </motion.div>

        <div className="col-span-1 lg:col-span-7 relative min-h-[380px] lg:h-[80vh] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
              alt="Unclewood Grill" 
              className="w-full h-full object-cover opacity-85 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* LTR gradient: dark on left, fading right */}
            {/* RTL gradient: dark on right, fading left */}
            <div 
              className={`absolute inset-0 hidden lg:block ${
                isRTL 
                  ? "bg-gradient-to-l from-brand-bg via-transparent to-transparent" 
                  : "bg-gradient-to-r from-brand-bg via-transparent to-transparent"
              }`} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent lg:hidden" />
          </div>
          
          {/* Decorative Stamp Element */}
          <div className={`absolute top-1/2 ${isRTL ? "left-6" : "right-6"} -translate-y-1/2 flex flex-col gap-8 items-center z-10 hidden md:flex`}>
            <div className="h-20 w-[1px] bg-white/10"></div>
            <span className="rotate-90 origin-center font-sans text-[9px] uppercase tracking-[0.8em] opacity-30 whitespace-nowrap text-brand-accent">
              {t.stamp}
            </span>
            <div className="h-20 w-[1px] bg-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
