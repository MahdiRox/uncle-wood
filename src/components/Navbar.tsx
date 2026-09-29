import { motion, AnimatePresence } from "motion/react";
import { Instagram, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-brand-bg/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5" 
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 lg:py-7"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/uncle_wood.jpg" 
            alt="Unclewood Logo" 
            className="h-12 w-12 sm:h-14 sm:w-14 object-cover rounded-full border border-brand-accent/40 group-hover:border-brand-accent transition-all duration-300 shadow-md" 
          />
          <div className="hidden sm:block">
            <span className="block text-sm font-bold tracking-[0.2em] uppercase text-brand-accent group-hover:text-white transition-colors">
              Unclewood
            </span>
            <span className="block text-[8px] font-sans tracking-[0.3em] uppercase opacity-50 text-brand-text">
              Wood Fire Grill
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 font-sans text-xs uppercase tracking-[0.25em] opacity-80">
          <a href="#menu" className="hover:text-brand-accent transition-colors hover:opacity-100">
            {t.menu}
          </a>
          <a href="#locations" className="hover:text-brand-accent transition-colors hover:opacity-100">
            {t.locations}
          </a>
          <a href="#about" className="hover:text-brand-accent transition-colors hover:opacity-100">
            {t.experience}
          </a>
          <a href="#contact" className="hover:text-brand-accent transition-colors hover:opacity-100">
            {t.reservation}
          </a>
        </div>

        {/* Actions & Language Selector */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher Button */}
          <div className="hidden sm:block">
            <LanguageToggle variant="navbar" />
          </div>
          <div className="sm:hidden">
            <LanguageToggle variant="compact" />
          </div>

          {/* Social */}
          <a 
            href="https://www.instagram.com/unclewood_oran/" 
            target="_blank" 
            rel="noreferrer" 
            className="hidden md:flex text-brand-text hover:text-brand-accent transition-colors opacity-80 hover:opacity-100 p-2"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

          {/* Reservation CTA button */}
          <a 
            href="#contact" 
            className="hidden sm:inline-block bg-brand-accent text-brand-bg px-5 py-2.5 sm:px-7 sm:py-3 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-center hover:bg-brand-text hover:text-brand-bg transition-all shadow-md active:scale-95"
          >
            {t.bookTable}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-text hover:text-brand-accent transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-bg border-b border-brand-accent/20 px-6 py-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-5 font-sans text-sm uppercase tracking-[0.2em]">
              <a 
                href="#menu" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-text/90 hover:text-brand-accent transition-colors py-1"
              >
                {t.menu}
              </a>
              <a 
                href="#locations" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-text/90 hover:text-brand-accent transition-colors py-1"
              >
                {t.locations}
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-text/90 hover:text-brand-accent transition-colors py-1"
              >
                {t.experience}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-text/90 hover:text-brand-accent transition-colors py-1"
              >
                {t.reservation}
              </a>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-brand-text/50 uppercase tracking-widest">{t.language}:</span>
                  <LanguageToggle variant="compact" />
                </div>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-brand-accent text-brand-bg py-3 text-center text-xs font-bold uppercase tracking-widest"
                >
                  {t.bookTable}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
