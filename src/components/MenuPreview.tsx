import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flame, Star, Sparkles, ChefHat, Heart, Coffee, X, Check, MessageSquare, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations, BilingualMenuItems, BilingualMenuItem } from "../translations";

export const MenuPreview = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language].menu;

  const [activeTab, setActiveTab] = useState<"all" | "burgers" | "steaks" | "sides" | "drinks">("all");
  const [selectedItem, setSelectedItem] = useState<BilingualMenuItem | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [customComment, setCustomComment] = useState("");
  const [isFavorite, setIsFavorite] = useState<Record<string, boolean>>({});

  const MenuCategories = [
    { id: "all" as const, label: t.categories.all, icon: ChefHat },
    { id: "burgers" as const, label: t.categories.burgers, icon: Flame },
    { id: "steaks" as const, label: t.categories.steaks, icon: Star },
    { id: "sides" as const, label: t.categories.sides, icon: Sparkles },
    { id: "drinks" as const, label: t.categories.drinks, icon: Coffee }
  ];

  const filteredItems = activeTab === "all" 
    ? BilingualMenuItems 
    : BilingualMenuItems.filter(item => item.category === activeTab);

  const toggleFavorite = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openOptionsModal = (item: BilingualMenuItem) => {
    setSelectedItem(item);
    setSelectedOptions([]);
    setCustomComment("");
  };

  const toggleOption = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const handleSendOrder = () => {
    if (!selectedItem) return;
    const itemData = selectedItem[language];
    const text = language === "ar"
      ? `مرحباً أنكل وود، أرغب في طلب:\n- الوجبة: ${itemData.name} (${selectedItem.price} د.ج)\n${selectedOptions.length > 0 ? `- الخيارات: ${selectedOptions.join(", ")}\n` : ""}${customComment ? `- الملاحظات: ${customComment}\n` : ""}`
      : `Hello Unclewood, I'd like to order:\n- Item: ${itemData.name} (${selectedItem.price} DA)\n${selectedOptions.length > 0 ? `- Options: ${selectedOptions.join(", ")}\n` : ""}${customComment ? `- Notes: ${customComment}\n` : ""}`;
    
    const encoded = encodeURIComponent(text);
    // WhatsApp redirect to Oran / SBA phone
    window.open(`https://wa.me/213550123456?text=${encoded}`, "_blank");
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-brand-bg relative overflow-hidden border-b border-white/5">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: "radial-gradient(#C5A059 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} 
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row justify-between xl:items-end mb-12 sm:mb-16 gap-6">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-accent block mb-3">
              {t.badge}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light italic leading-none text-brand-text">
              {t.titlePart1} <br />
              <span className="not-italic font-bold text-white">{t.titlePart2}</span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-xs opacity-60 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-12 sm:mb-16 border-b border-white/5 pb-6">
          {MenuCategories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 font-sans text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold border transition-all duration-300 ${
                  isActive 
                    ? "bg-brand-accent text-brand-bg border-brand-accent shadow-lg scale-102" 
                    : "bg-neutral-900/50 border-white/5 hover:border-brand-accent/40 text-brand-text/80"
                }`}
              >
                <IconComponent size={14} className={isActive ? "text-brand-bg" : "text-brand-accent"} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const itemData = item[language];
              const isFav = !!isFavorite[item.id];
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative bg-neutral-950/50 border border-white/5 hover:border-brand-accent/40 transition-all duration-300 p-5 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    {/* Item Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-900 border border-white/5">
                      <img 
                        src={item.img} 
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.endsWith("/brisket_poutine.jpg")) {
                            target.src = "/brisket_poutine.jpg";
                          }
                        }}
                        alt={itemData.name} 
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Top badging */}
                      <div className={`absolute top-3 ${isRTL ? "right-3" : "left-3"} flex flex-wrap gap-1.5`}>
                        {itemData.tags.slice(0, 2).map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="bg-brand-bg/90 border border-brand-accent/30 backdrop-blur-md text-brand-accent px-2.5 py-1 text-[8px] font-sans uppercase tracking-widest font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className={`absolute top-3 ${isRTL ? "left-3" : "right-3"} p-2 rounded-full backdrop-blur-md transition-all ${
                          isFav 
                            ? "bg-red-500/20 text-red-400 border border-red-500/40" 
                            : "bg-black/60 text-white/70 hover:text-white border border-white/10"
                        }`}
                        aria-label={t.favorites}
                      >
                        <Heart size={15} fill={isFav ? "currentColor" : "none"} />
                      </button>
                    </div>

                    {/* Content & Price */}
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="text-xl sm:text-2xl font-light text-brand-text group-hover:text-brand-accent transition-colors">
                        {itemData.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="font-sans font-bold text-base sm:text-lg text-brand-accent whitespace-nowrap">
                          {item.price} {t.currency}
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-xs opacity-60 leading-relaxed mb-6">
                      {itemData.description}
                    </p>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => openOptionsModal(item)}
                      className="w-full bg-brand-bg hover:bg-brand-accent hover:text-brand-bg text-brand-accent border border-brand-accent/30 py-2.5 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-center transition-all duration-300"
                    >
                      {t.customizeBtn}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Customization & Order Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-brand-bg border border-brand-accent/40 w-full max-w-lg p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} text-brand-text/60 hover:text-brand-accent transition-colors p-1`}
                aria-label={t.closeBtn}
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-accent block mb-1">
                  {t.customizeModalTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">
                  {selectedItem[language].name}
                </h3>
                <span className="font-sans font-bold text-brand-accent text-lg">
                  {selectedItem.price} {t.currency}
                </span>
              </div>

              {/* Options list */}
              {selectedItem[language].options && selectedItem[language].options!.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-brand-text/70 mb-3 font-semibold">
                    {t.optionsHeader}
                  </h4>
                  <div className="space-y-2">
                    {selectedItem[language].options!.map((opt, idx) => {
                      const isSelected = selectedOptions.includes(opt);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleOption(opt)}
                          className={`w-full flex items-center justify-between p-3 border text-left rtl:text-right font-sans text-xs transition-all ${
                            isSelected 
                              ? "bg-brand-accent/15 border-brand-accent text-brand-accent font-semibold" 
                              : "bg-black/20 border-white/5 hover:border-white/20 text-brand-text/80"
                          }`}
                        >
                          <span>{opt}</span>
                          <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                            isSelected ? "bg-brand-accent border-brand-accent text-brand-bg" : "border-white/30"
                          }`}>
                            {isSelected && <Check size={12} strokeWidth={3} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Special instructions */}
              <div className="mb-6">
                <label className="block font-sans text-xs uppercase tracking-widest text-brand-text/70 mb-2 font-semibold">
                  {t.specialNotesLabel}
                </label>
                <textarea
                  value={customComment}
                  onChange={(e) => setCustomComment(e.target.value)}
                  placeholder={t.specialNotesPlaceholder}
                  rows={3}
                  className="w-full bg-black/40 border border-white/10 p-3 font-sans text-xs text-brand-text placeholder-white/30 focus:border-brand-accent outline-none transition-colors"
                />
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendOrder}
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-accent text-brand-bg py-3 px-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-lg active:scale-98"
                >
                  <Send size={14} />
                  <span>{t.orderViaWhatsApp}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="sm:w-28 py-3 px-4 border border-white/15 text-brand-text/70 hover:text-white hover:border-white/30 font-sans text-xs uppercase tracking-widest transition-colors"
                >
                  {t.closeBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuPreview;
