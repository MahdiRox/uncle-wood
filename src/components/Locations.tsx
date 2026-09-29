import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import restaurantStorefrontImg from "../assets/restaurant_storefront.jpg";

const Locations = () => {
  const { language } = useLanguage();
  const t = translations[language].locations;

  return (
    <section id="locations" className="py-24 sm:py-32 bg-brand-bg relative border-b border-white/5">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: "radial-gradient(#C5A059 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} 
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-accent block mb-3">
              {t.badge}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 italic leading-none">
              {t.titlePart1} <br />
              <span className="not-italic font-bold text-white">{t.titlePart2}</span>
            </h2>
            
            <div className="space-y-6 mt-10 sm:mt-14">
              {/* Oran Branch */}
              <div className="flex gap-6 items-start p-6 sm:p-8 bg-neutral-900/50 border border-white/5 group hover:border-brand-accent/40 transition-all shadow-lg">
                <div className="text-brand-accent mt-1 shrink-0">
                  <MapPin strokeWidth={1.5} size={26} />
                </div>
                <div>
                   <h3 className="text-xl sm:text-2xl italic text-brand-accent mb-2">
                     {t.oranTitle}
                   </h3>
                   <p className="font-sans text-sm opacity-60 mb-5">
                     {t.oranAddress}
                   </p>
                   <div className="flex flex-wrap items-center gap-6 font-sans text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">
                     <a href="tel:+213550123456" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                       <Phone size={12} className="text-brand-accent shrink-0" />
                       <bdi dir="ltr" className="[direction:ltr] inline-block">+213 550 123 456</bdi>
                     </a>
                     <span className="flex items-center gap-2">
                       <Clock size={12} className="text-brand-accent" /> {t.hoursOran}
                     </span>
                   </div>
                </div>
              </div>

              {/* Sidi Bel Abbes Branch */}
              <div className="flex gap-6 items-start p-6 sm:p-8 bg-neutral-900/50 border border-white/5 group hover:border-brand-accent/40 transition-all shadow-lg">
                <div className="text-brand-accent mt-1 shrink-0">
                  <MapPin strokeWidth={1.5} size={26} />
                </div>
                <div>
                   <h3 className="text-xl sm:text-2xl italic text-brand-accent mb-2">
                     {t.sbaTitle}
                   </h3>
                   <p className="font-sans text-sm opacity-60 mb-5">
                     {t.sbaAddress}
                   </p>
                   <div className="flex flex-wrap items-center gap-6 font-sans text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">
                     <a href="tel:+213550987654" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                       <Phone size={12} className="text-brand-accent shrink-0" />
                       <bdi dir="ltr" className="[direction:ltr] inline-block">+213 550 987 654</bdi>
                     </a>
                     <span className="flex items-center gap-2">
                       <Clock size={12} className="text-brand-accent" /> {t.hoursSba}
                     </span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ambience & Testimonial Card */}
          <div className="relative aspect-square overflow-hidden border border-white/5 shadow-2xl group bg-neutral-900">
            <img 
              src={restaurantStorefrontImg} 
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith("/restaurant_storefront.jpg")) {
                  target.src = "/restaurant_storefront.jpg";
                } else if (!target.src.includes("googleusercontent.com")) {
                  target.src = "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SFGwFb0-ZGMfngEijgp8-mxlchMlFmtQPSR5w99BXvPSNL9KS4pChQtu2XG8MDBlI9npusysM1CSZjUKh4XcZrMANeOS3dwXC81yTD633Dw6T5b9oU7wK1iwQY14jzgKNj9OQ=s1360-w1360-h1020-rw";
                }
              }}
              alt="Unclewood Restaurant Storefront Atmosphere" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/95 via-brand-bg/30 to-transparent flex items-end p-6 md:p-10">
               <div className="bg-brand-bg/90 backdrop-blur-md p-6 sm:p-8 border border-white/10 w-full shadow-2xl">
                 <p className="text-brand-text italic text-base sm:text-lg leading-relaxed mb-6 font-light">
                   {t.quote}
                 </p>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent font-bold">
                     U
                   </div>
                   <div>
                     <span className="block font-sans text-xs font-bold uppercase tracking-widest text-brand-accent">
                       {t.customerName}
                     </span>
                     <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40">
                       {t.customerRole}
                     </span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
