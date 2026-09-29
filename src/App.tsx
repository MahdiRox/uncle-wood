import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuPreview from "./components/MenuPreview";
import Locations from "./components/Locations";
import LanguageToggle from "./components/LanguageToggle";
import { motion, useScroll, useSpring } from "motion/react";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { language } = useLanguage();
  const tAbout = translations[language].about;
  const tCta = translations[language].cta;
  const tFooter = translations[language].footer;

  return (
    <div className="min-h-screen bg-brand-bg font-serif text-brand-text selection:bg-brand-accent selection:text-brand-bg">
      {/* Scroll indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 sm:py-32 bg-brand-bg border-b border-white/5 relative">
          {/* Subtle texture in about section */}
          <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
            <div 
              className="absolute inset-0" 
              style={{ backgroundImage: "radial-gradient(#C5A059 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} 
            />
          </div>

          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-accent/5 blur-xl -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                alt="Grill Craft" 
                className="shadow-2xl opacity-90 border border-white/5 w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
               <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4 block">
                 {tAbout.badge}
               </span>
               <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 italic leading-none">
                 {tAbout.titlePart1} <br /> 
                 <span className="not-italic font-bold text-white">{tAbout.titlePart2}</span>
               </h2>
               <p className="font-sans text-sm opacity-60 leading-relaxed mb-8 max-w-lg">
                 {tAbout.description}
               </p>
               <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-6">
                 <div>
                   <span className="block text-3xl font-light text-brand-accent mb-2">
                     {tAbout.stat1Number}
                   </span>
                   <span className="font-sans text-[9px] uppercase tracking-[0.2em] opacity-50">
                     {tAbout.stat1Label}
                   </span>
                 </div>
                 <div>
                   <span className="block text-3xl font-light text-brand-accent mb-2">
                     {tAbout.stat2Number}
                   </span>
                   <span className="font-sans text-[9px] uppercase tracking-[0.2em] opacity-50">
                     {tAbout.stat2Label}
                   </span>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <MenuPreview />
        
        <Locations />

        {/* Big CTA banner */}
        <section className="py-24 sm:py-32 bg-brand-accent relative overflow-hidden text-brand-bg">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none">
             <h2 className="text-[20vw] font-bold uppercase italic whitespace-nowrap -translate-x-1/4">
               UNCLEWOOD UNCLEWOOD UNCLEWOOD
             </h2>
           </div>
           <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-8 italic leading-tight">
                {tCta.titlePart1} <br /> 
                <span className="not-italic font-bold">{tCta.titlePart2}</span>
              </h2>
              <a 
                href="#contact" 
                className="inline-block bg-brand-bg text-brand-text px-10 sm:px-14 py-4 font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-black transition-all shadow-2xl border border-brand-bg/10 active:scale-95"
              >
                {tCta.reservationBtn}
              </a>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-brand-bg border-t border-white/5 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/uncle_wood.jpg" 
                  alt="Unclewood Logo" 
                  className="h-16 w-16 object-cover rounded-full border border-brand-accent/40 shadow-lg" 
                />
                <div>
                  <span className="block text-xl font-bold tracking-[0.2em] uppercase text-brand-accent">
                    Unclewood
                  </span>
                  <span className="block text-[9px] font-sans tracking-[0.3em] uppercase opacity-50">
                    Wood Fire Grill
                  </span>
                </div>
              </div>
              <div className="text-brand-text opacity-50 font-sans text-[11px] leading-relaxed max-w-sm mb-6">
                {tFooter.tagline}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-accent opacity-80">
                  {tFooter.selectLanguage}:
                </span>
                <LanguageToggle variant="compact" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold mb-1">
                {tFooter.oran}
              </span>
              <span className="text-sm font-light">Place d'Armes, Centre Ville, Oran</span>
              <a href="tel:+213550123456" className="text-sm opacity-60 italic hover:text-brand-accent transition-colors">
                +213 550 123 456
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold mb-1">
                {tFooter.sba}
              </span>
              <span className="text-sm font-light">Boulevard de la République, SBA</span>
              <a href="tel:+213550987654" className="text-sm opacity-60 italic hover:text-brand-accent transition-colors">
                +213 550 987 654
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 font-sans text-xs uppercase tracking-widest col-span-1 md:col-span-4 mt-8 pt-8 border-t border-white/5 items-center justify-between">
              <div className="flex gap-6">
                <a 
                  href="https://www.facebook.com/p/Unclewood-Sba-100070165980715/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-accent transition-colors opacity-70"
                >
                  {tFooter.socialFacebook}
                </a>
                <a 
                  href="https://www.instagram.com/unclewood_oran/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-accent transition-colors opacity-70"
                >
                  {tFooter.socialInstagram}
                </a>
                <a 
                  href="#" 
                  className="hover:text-brand-accent transition-colors opacity-70"
                >
                  {tFooter.privacyPolicy}
                </a>
              </div>
              <div className="text-[10px] opacity-40 font-sans tracking-wider">
                Oran & Sidi Bel Abbès, Algérie
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
