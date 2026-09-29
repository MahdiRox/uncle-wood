import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  variant?: "navbar" | "compact" | "footer";
}

export const LanguageToggle = ({ variant = "navbar" }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-1 bg-black/40 border border-brand-accent/30 p-1 text-[11px] font-sans">
        <button
          onClick={() => setLanguage("en")}
          className={`px-2 py-1 uppercase tracking-wider transition-all duration-200 ${
            language === "en"
              ? "bg-brand-accent text-brand-bg font-bold shadow-sm"
              : "text-brand-text/70 hover:text-brand-accent"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <span className="text-white/20">|</span>
        <button
          onClick={() => setLanguage("ar")}
          className={`px-2 py-1 font-arabic transition-all duration-200 ${
            language === "ar"
              ? "bg-brand-accent text-brand-bg font-bold shadow-sm"
              : "text-brand-text/70 hover:text-brand-accent"
          }`}
          aria-label="التبديل إلى العربية"
        >
          عربي
        </button>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-brand-accent/30 p-1 text-xs font-sans tracking-widest shadow-lg">
      <div className="px-2 text-brand-accent flex items-center gap-1.5 opacity-80 border-r rtl:border-r-0 rtl:border-l border-white/10">
        <Globe size={13} className="shrink-0" />
      </div>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-[10px] uppercase font-bold tracking-[0.15em] transition-all duration-200 ${
          language === "en"
            ? "bg-brand-accent text-brand-bg shadow-sm"
            : "text-brand-text/70 hover:text-brand-accent"
        }`}
        aria-label="Switch to English"
      >
        English
      </button>
      <button
        onClick={() => setLanguage("ar")}
        className={`px-3 py-1 text-xs font-arabic transition-all duration-200 ${
          language === "ar"
            ? "bg-brand-accent text-brand-bg font-bold shadow-sm"
            : "text-brand-text/70 hover:text-brand-accent"
        }`}
        aria-label="التبديل إلى العربية"
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageToggle;
