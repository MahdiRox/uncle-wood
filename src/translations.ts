import brisketPoutineImg from "./assets/brisket_poutine.jpg";

export interface TranslationContent {
  nav: {
    menu: string;
    locations: string;
    experience: string;
    reservation: string;
    bookTable: string;
    language: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    viewMenu: string;
    ourLocations: string;
    stamp: string;
  };
  about: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
  };
  menu: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    categories: {
      all: string;
      burgers: string;
      steaks: string;
      sides: string;
      drinks: string;
    };
    customizeBtn: string;
    customizeModalTitle: string;
    optionsHeader: string;
    specialNotesLabel: string;
    specialNotesPlaceholder: string;
    closeBtn: string;
    orderViaWhatsApp: string;
    currency: string;
    woodSmoked: string;
    favorites: string;
  };
  locations: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    oranTitle: string;
    oranAddress: string;
    sbaTitle: string;
    sbaAddress: string;
    hoursOran: string;
    hoursSba: string;
    quote: string;
    customerName: string;
    customerRole: string;
  };
  cta: {
    titlePart1: string;
    titlePart2: string;
    reservationBtn: string;
  };
  footer: {
    tagline: string;
    oran: string;
    sba: string;
    socialFacebook: string;
    socialInstagram: string;
    privacyPolicy: string;
    selectLanguage: string;
  };
}

export const translations: Record<"en" | "ar", TranslationContent> = {
  en: {
    nav: {
      menu: "The Menu",
      locations: "Locations",
      experience: "Experience",
      reservation: "Reservation",
      bookTable: "Book a Table",
      language: "Language",
    },
    hero: {
      badge: "Authentic Wood-Grill Experience",
      titlePart1: "Where Wood",
      titlePart2: "Meets Fire",
      description: "Crafting premium burgers and succulent grills using centuries-old wood-firing techniques in Oran & SBA.",
      viewMenu: "View Full Menu",
      ourLocations: "Our Locations",
      stamp: "AUTHENTIC GRILL",
    },
    about: {
      badge: "The Ancestral Craft",
      titlePart1: "The Art of",
      titlePart2: "Wood & Fire",
      description: "At Unclewood, we believe that great food starts with the primary element: wood. We exclusively use seasoned local oak and fruitwoods to fuel our grills, imparting a deep, smoky soul to every burger and steak that leaves our kitchen.",
      stat1Number: "100%",
      stat1Label: "Natural Wood Fire",
      stat2Number: "Aged",
      stat2Label: "Premium Halal Meat",
    },
    menu: {
      badge: "Official Menu & Highlights",
      titlePart1: "The Woodfire",
      titlePart2: "Culinary Catalogue",
      description: "Inspired by the authentic Unclewood woodfire gastronomy from our social media and kitchens in Oran & Sidi Bel Abbes. Selected, prepared, and charred over handpicked oakwood.",
      categories: {
        all: "All Masterpieces",
        burgers: "Wood-Smoked Burgers",
        steaks: "Premium Grills & Steaks",
        sides: "Smoky Sides & Starters",
        drinks: "Artisanal Mocktails & Shakes",
      },
      customizeBtn: "Customize / Order",
      customizeModalTitle: "Craft Your Order",
      optionsHeader: "Options & Preparation",
      specialNotesLabel: "Special Requests or Dietary Notes",
      specialNotesPlaceholder: "E.g. No raw onions, sauce on the side...",
      closeBtn: "Close",
      orderViaWhatsApp: "Order via WhatsApp / Call",
      currency: "DA",
      woodSmoked: "Wood-Smoked",
      favorites: "Favorite",
    },
    locations: {
      badge: "Visit Us",
      titlePart1: "Find us in the",
      titlePart2: "Heart of Algeria",
      oranTitle: "Unclewood Oran",
      oranAddress: "Place d'Armes, Centre Ville, Oran",
      sbaTitle: "Unclewood SBA",
      sbaAddress: "Boulevard de la République, Sidi Bel Abbes",
      hoursOran: "11:00 - 23:30",
      hoursSba: "12:00 - 00:00",
      quote: "The best grill in town. You can literally taste the wood-smoke in every bite of the burger. Exceptional service in Oran!",
      customerName: "Amine B.",
      customerRole: "Regular Customer",
    },
    cta: {
      titlePart1: "Ready for the ultimate",
      titlePart2: "smoky experience?",
      reservationBtn: "Reservation",
    },
    footer: {
      tagline: "Crafted for Fire Lovers. © 2024 Unclewood Grill.",
      oran: "Oran",
      sba: "Sidi Bel Abbès",
      socialFacebook: "Facebook",
      socialInstagram: "Instagram",
      privacyPolicy: "Privacy Policy",
      selectLanguage: "Language",
    },
  },
  ar: {
    nav: {
      menu: "قائمة الطعام",
      locations: "فروعنا",
      experience: "تجربتنا",
      reservation: "الحجز",
      bookTable: "احجز طاولة",
      language: "اللغة",
    },
    hero: {
      badge: "تجربة الشواء الأصيل على الحطب",
      titlePart1: "حيث يلتقي",
      titlePart2: "الحطب بالنار",
      description: "نصنع أفخر أنواع البرجر والمشاوي الغنية بالنكهة المدخنة الطبيعية بتقنيات الطهي على حطب البلوط في وهران وسيدي بلعباس.",
      viewMenu: "استعرض القائمة",
      ourLocations: "فروعنا",
      stamp: "شواء أصيل",
    },
    about: {
      badge: "حرفة الأجداد العريقة",
      titlePart1: "فن وإتقان",
      titlePart2: "الحطب والنار",
      description: "في أنكل وود (Unclewood)، نؤمن أن الطعم الحقيقي والشهي يبدأ من العنصر الأول: خشب الحطب الطبيعي. نعتمد كلياً على أخشاب البلوط المحلية المعتقة لإشعال شواياتنا، لنمنح كل قطعة برجر وستيك نكهة تدخين عميقة تأسر الحواس.",
      stat1Number: "100%",
      stat1Label: "حطب طبيعي نقي",
      stat2Number: "معتق",
      stat2Label: "لحم حلال فاخر",
    },
    menu: {
      badge: "القائمة الرسمية والمختارات",
      titlePart1: "كتالوج النكهات",
      titlePart2: "على جمر الحطب",
      description: "مستوحى من أطباق أنكل وود الاستثنائية كما شاهدتموها على صفحاتنا وفي مطابخنا في وهران وسيدي بلعباس. محضرة ومطهوة ببراعة على جمر خشب البلوط.",
      categories: {
        all: "جميع الإبداعات",
        burgers: "برجر مدخن على الحطب",
        steaks: "ستيك ومشاوي فاخرة",
        sides: "مقبلات وأطباق جانبية",
        drinks: "عصائر ومشروبات مميزة",
      },
      customizeBtn: "تخصيص الوجبة / طلب",
      customizeModalTitle: "تخصيص اختيارك",
      optionsHeader: "الخيارات وطريقة التحضير",
      specialNotesLabel: "طلبات أو ملاحظات خاصة",
      specialNotesPlaceholder: "مثال: بدون بصل، الصوص جانبي...",
      closeBtn: "إغلاق",
      orderViaWhatsApp: "طلب عبر واتساب / اتصال",
      currency: "د.ج",
      woodSmoked: "مدخن على الحطب",
      favorites: "المفضلة",
    },
    locations: {
      badge: "تفضل بزيارتنا",
      titlePart1: "تفضل بزيارتنا في",
      titlePart2: "قلب الجزائر",
      oranTitle: "أنكل وود وهران",
      oranAddress: "ساحة أول نوفمبر (Place d'Armes)، وسط المدينة، وهران",
      sbaTitle: "أنكل وود سيدي بلعباس",
      sbaAddress: "شارع الجمهورية (Boulevard de la République)، سيدي بلعباس",
      hoursOran: "11:00 - 23:30",
      hoursSba: "12:00 - 00:00",
      quote: "أفضل مطعم برجر ومشاوي في المدينة بلا منازع! نكهة تدخين الحطب بارزة في كل قضمة، واستقبال وخدمة راقية جداً في وهران!",
      customerName: "أمين ب.",
      customerRole: "زبون وفيّ",
    },
    cta: {
      titlePart1: "جاهز لتجربة الشواء",
      titlePart2: "المدخن الاستثنائية؟",
      reservationBtn: "احجز طاولتك الآن",
    },
    footer: {
      tagline: "صُمم لعشاق الشواء ونكهة الحطب. © 2024 أنكل وود غريل.",
      oran: "وهران",
      sba: "سيدي بلعباس",
      socialFacebook: "فيسبوك",
      socialInstagram: "إنستغرام",
      privacyPolicy: "سياسة الخصوصية",
      selectLanguage: "اللغة",
    },
  },
};

export interface BilingualMenuItem {
  id: string;
  price: string;
  priceNumber: number;
  category: "burgers" | "steaks" | "sides" | "drinks";
  img: string;
  en: {
    name: string;
    description: string;
    tags: string[];
    options?: string[];
  };
  ar: {
    name: string;
    description: string;
    tags: string[];
    options?: string[];
  };
}

export const BilingualMenuItems: BilingualMenuItem[] = [
  // burgers
  {
    id: "unclewood-signature-burger",
    price: "1,250",
    priceNumber: 1250,
    category: "burgers",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599&auto=format&fit=crop",
    en: {
      name: "Unclewood Signature Burger",
      description: "Flame-grilled premium beef patty, hickory cedar wood smoke dome, matured cheddar, house-crafted signature smoke barbecue cream, brioche bread.",
      tags: ["Wood-Smoked", "Chef Special", "100% Beef"],
      options: ["Preparation: Well Done", "Preparation: Medium Well", "Double Patty (+350 DA)"]
    },
    ar: {
      name: "برجر أنكل وود المميز",
      description: "شريحة لحم بقري فاخرة مشوية على لهب الحطب الطبيعي تحت قبة دخان خشب الأرز، جبن شيدر معتق، صوص باربيكيو مدخن محلي الصنع في خبز بريوش طازج.",
      tags: ["مدخن على الحطب", "توقيع الشيف", "لحم بقري 100%"],
      options: ["درجة الطهي: مطهو جيداً", "درجة الطهي: متوسط الاستواء", "شريحة لحم إضافية (+350 د.ج)"]
    }
  },
  {
    id: "cheesy-smoke-bomb",
    price: "1,450",
    priceNumber: 1450,
    category: "burgers",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
    en: {
      name: "The Cheesy Smoke Bomb",
      description: "Signature beef patty injected with hot liquid mozzarella & cheddar, topped with crispy onion straws, charred rosemary reduction, and smoky mayo.",
      tags: ["Extra Cheese", "Smoked", "Highly Recommended"],
      options: ["Melted Cheddar Pour", "Extra Bacon (+150 DA)"]
    },
    ar: {
      name: "قنبلة الجبن المدخنة",
      description: "شريحة برجر محشوة بجبن الموزاريلا والشيدر الذائب الساخن، مع شرائح بصل مقرمشة، خلاصة الروزماري المشوي ومايونيز مدخن خاص.",
      tags: ["جبن مضاعف", "مدخن", "ينصح به بشدة"],
      options: ["سكب جبن شيدر ذائب إضافي", "بيكون بقري مقدد إضافي (+150 د.ج)"]
    }
  },
  {
    id: "maple-beef-brisket-burger",
    price: "1,650",
    priceNumber: 1650,
    category: "burgers",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop",
    en: {
      name: "Maple Beef Brisket Burger",
      description: "12-hour slow-cooked oak-smoked beef brisket layered on top of a smashed beef patty, covered in house maple smoke reduction, sweet pickles, and aged gouda.",
      tags: ["12H Slow Cooked", "Premium Smoke"],
      options: ["Extra Smoked Brisket (+400 DA)"]
    },
    ar: {
      name: "برجر بريسكت البقر مع صوص الميبل",
      description: "لحم بريسكت بقري مدخن على نار هادئة بحطب البلوط لمدة 12 ساعة فوق شريحة برجر سماش، مع صوص الميبل المدخن ومخلل حلو وجبن غودا معتق.",
      tags: ["طهي بطيء 12 ساعة", "تدخين فاخر"],
      options: ["إضافة بريسكت مدخن إضافي (+400 د.ج)"]
    }
  },
  {
    id: "cactus-spicy-grilled-chicken",
    price: "1,150",
    priceNumber: 1150,
    category: "burgers",
    img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=1974&auto=format&fit=crop",
    en: {
      name: "Cactus Spicy Grilled Chicken",
      description: "Flame-charred chicken breast marinated in wild Algerian desert herbs, chipotle pepper emulsion, fresh jalapeño rings, and melted pepper jack cheese.",
      tags: ["Spicy", "Flame Grilled", "Chicken Option"],
      options: ["Mild Spicy", "Extremely Hot 🔥", "Add Cheese (+100 DA)"]
    },
    ar: {
      name: "برجر دجاج الصبار المشوي الحار",
      description: "صدر دجاج متبل بالأعشاب الصحراوية الجزائرية ومشوي على لهب الحطب، مع صوص التشيبوتلي وحلقات هلابينو وجبن بيبر جاك الذائب.",
      tags: ["حار ومشوي", "مشوي على اللهب", "خيار الدجاج"],
      options: ["حرارة خفيفة", "حار جداً 🔥", "إضافة جبن (+100 د.ج)"]
    }
  },
  // steaks
  {
    id: "ancient-oak-cut-ribeye",
    price: "3,800",
    priceNumber: 3800,
    category: "steaks",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    en: {
      name: "Ancient Oak Cut Ribeye",
      description: "400g certified premium steak charred directly over white-hot oak embers, rested with whipped garlic-herb marrow butter and charred vine tomatoes.",
      tags: ["Prime Cut", "Wood Fired", "Fleur de Sel"],
      options: ["Medium Rare", "Medium", "Well Done", "Add Bone Marrow (+400 DA)"]
    },
    ar: {
      name: "ستيك ريب آي معتق على جمر البلوط",
      description: "قطعة ريب آي فاخرة 400 غرام مشوية مباشرة على جمر البلوط المتوهج، تقدم مع زبدة النخاع بالأعشاب والثوم وطماطم كرزية مشوية.",
      tags: ["قطعة ممتازة", "على الحطب", "ملح بحري فاخر"],
      options: ["نصف استواء (Medium Rare)", "استواء متوسط (Medium)", "كامل الاستواء (Well Done)", "إضافة نخاع عظم (+400 د.ج)"]
    }
  },
  {
    id: "smoked-tomahawk",
    price: "7,500",
    priceNumber: 7500,
    category: "steaks",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1974&auto=format&fit=crop",
    en: {
      name: "The Smoked Tomahawk (1kg+)",
      description: "Epic bone-in premium ribeye cut, seasoned with coarse rock salt & cracked black pepper, flame-seared, and hickory-smoked right at your table.",
      tags: ["To Share", "Imperial Cut", "Signature Smoke"],
      options: ["Medium Rare", "Medium", "Well Done"]
    },
    ar: {
      name: "توماهوك مدخن ملكي (1 كغ+)",
      description: "قطعة توماهوك ضخمة بالعظم، متبلة بملح صخري خشن وفلفل أسود مجروش، مشوية على اللهب ويتم تدخينها أمامك على الطاولة برائحة خشب الهيكوري.",
      tags: ["للمشاركة", "قطعة ملوكية", "تدخين مباشر"],
      options: ["نصف استواء (Medium Rare)", "استواء متوسط (Medium)", "كامل الاستواء (Well Done)"]
    }
  },
  {
    id: "slow-fired-bbq-beef-ribs",
    price: "4,200",
    priceNumber: 4200,
    category: "steaks",
    img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1974&auto=format&fit=crop",
    en: {
      name: "Slow-Fired BBQ Beef Ribs",
      description: "Bone-slip tender 14-hour smoked ribs, heavily glazed in Unclewood homemade wild honey barbecued sauce, served with roasted garlic cloves.",
      tags: ["14H Smoked", "Extremely Tender"],
      options: ["Mashed Potatoes Side", "Smokey Mac & Cheese Side"]
    },
    ar: {
      name: "أضلاع بقري مدخنة ببطء بالباربيكيو",
      description: "أضلاع تذوب في الفم مدخنة لمدة 14 ساعة على جمر الحطب، مغطاة بطبقة غنية من صوص باربيكيو بالعسل البري وتقدم مع فصوص ثوم مشوية.",
      tags: ["تدخين 14 ساعة", "طراوة فائقة"],
      options: ["طبق جانبي: بطاطس مهروسة بالزبدة", "طبق جانبي: ماك آند تشيز مدخن"]
    }
  },
  // sides
  {
    id: "unclewood-loaded-cheddar-fries",
    price: "750",
    priceNumber: 750,
    category: "sides",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1974&auto=format&fit=crop",
    en: {
      name: "Unclewood Loaded Cheddar Fries",
      description: "Fresh triple-cooked local potatoes tossed in wood-herbs oil, drenched in rich liquid cheddar sauce, crispy beef bacon bits, and chopped green chives.",
      tags: ["Crispy", "Local Sourced", "Cheese Overload"],
      options: ["Extra Bacon (+100 DA)", "Add Jalapeños (+50 DA)"]
    },
    ar: {
      name: "بطاطس أنكل وود المغطاة بالشيدر",
      description: "بطاطس طازجة مقلية ثلاث مرات متبلة بزيت الأعشاب العطرية، مغمورة بصلصة الشيدر السائلة وقطع لحم بقر مقدد مقرمش وبصل أخضر.",
      tags: ["مقرمشة", "منتجات محلية", "جبن وفير"],
      options: ["بيكون مقدد إضافي (+100 د.ج)", "إضافة حلقات هلابينو (+50 د.ج)"]
    }
  },
  {
    id: "smoked-brisket-poutine-fries",
    price: "1,200",
    priceNumber: 1200,
    category: "sides",
    img: brisketPoutineImg,
    en: {
      name: "Smoked Brisket Poutine Fries",
      description: "A gorgeous luxury bowl of hot seasoned country skin-on potatoes, pulled oak brisket, traditional veal rich gravy, and authentic melted cheese curds.",
      tags: ["Ultimate Side", "Rich Gravy", "Brisket Addition"],
      options: ["Add Sunny Side Up Egg (+100 DA)"]
    },
    ar: {
      name: "بوتين البطاطس بالبريسكت المدخن",
      description: "وعاء فاخر من البطاطس الريفية المقرمشة، مع شرائح لحم بريسكت البلوط المفتت، مرق لحم العجل الغني وخثارة الجبن الذائبة الأصيلة.",
      tags: ["طبق جانبي فاخر", "مرق غني", "لحم بريسكت"],
      options: ["إضافة بيضة مقلية (+100 د.ج)"]
    }
  },
  {
    id: "wood-charred-bone-marrow",
    price: "1,400",
    priceNumber: 1400,
    category: "sides",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop",
    en: {
      name: "Wood-Charred Bone Marrow",
      description: "Two split premium beef bones oven-roasted under glowing oak sparks, topped with minced parsley and caper salad, served with charred country sourdough.",
      tags: ["Delicacy", "Pure Flavor"],
      options: ["Extra Toast (+100 DA)"]
    },
    ar: {
      name: "نخاع عظم مشوي على جمر الحطب",
      description: "قطعتان من عظام البقر المشوية في الفرن تحت شرر خشب البلوط، يعلوهما بقدونس مفروم مع صلصة الكبر وخبز ساوردو ريفي مشوي.",
      tags: ["طعام راقٍ", "نكهة أصيلة"],
      options: ["توست محمص إضافي (+100 د.ج)"]
    }
  },
  // drinks
  {
    id: "lotus-espresso-smoked-milkshake",
    price: "750",
    priceNumber: 750,
    category: "drinks",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974&auto=format&fit=crop",
    en: {
      name: "Lotus Espresso Smoked Milkshake",
      description: "Thick double-blended organic vanilla house gelato, a shot of dark roasted espresso, caramelized Lotus cookie spread, and an aroma of wood-smoke syrup.",
      tags: ["Creamy", "Espresso Kick", "Sweet Treat"],
      options: ["Whipped Cream Top", "Extra Lotus Crumb (+50 DA)"]
    },
    ar: {
      name: "ميلك شيك لوتس إسبريسو المدخن",
      description: "جيلاتو الفانيليا العضوي الكثيف المخفوق مع جرعة من الإسبريسو المحمص الداكن، كريمة بسكويت اللوتس المكرمل ونسمات من سيروب خشب التدخين.",
      tags: ["كريمي غني", "طاقة الإسبريسو", "حلوى فاخرة"],
      options: ["كريمة مخفوقة بالأعلى", "فتات بسكويت لوتس إضافي (+50 د.ج)"]
    }
  },
  {
    id: "smoked-wild-forest-berry-mojito",
    price: "550",
    priceNumber: 550,
    category: "drinks",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop",
    en: {
      name: "Smoked Wild Forest Berry Mojito",
      description: "Muddled local mountain wild blackberries, tart redcurrants, fresh mint foliage, squeeze of lemon, organic cane juice, and natural light carbonation.",
      tags: ["Cold & Fresh", "Zero Alcohol", "Muddled Herbs"],
      options: ["Less Sweet", "Extra Mint Leaves"]
    },
    ar: {
      name: "موهيتو التوت البري المنعش المدخن",
      description: "توت العليق الجبلي البري المهروس مع التوت الأحمر، أوراق النعناع الطازجة، عصرة ليمون حامض، قصب السكر الطبيعي والمياه الفوارة المنعشة.",
      tags: ["بارد ومنعش", "خالٍ من الكحول", "أعشاب طازجة"],
      options: ["حلاوة خفيفة", "أوراق نعناع إضافية"]
    }
  },
  {
    id: "fireside-charcoal-lemonade",
    price: "600",
    priceNumber: 600,
    category: "drinks",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1974&auto=format&fit=crop",
    en: {
      name: "Fireside Charcoal Lemonade",
      description: "Refreshing cold press lemons, infused with health-grade activated coconut charcoal for an exotic pitch black shade, spiked with smoked wild rosemary oil.",
      tags: ["Aromatic", "Activated Charcoal", "Eye-catching"],
      options: ["Sweetened with Honey", "Less Ice"]
    },
    ar: {
      name: "ليمونادة الفحم النباتي المنعشة",
      description: "ليمون معصور على البارد، ممزوج بفحم جوز الهند النشط الصحي بلونه الأسود الجذاب مع لمسة زيت إكليل الجبل البري المدخن.",
      tags: ["نكهة عطرية", "فحم نباتي صحي", "مظهر ملفت"],
      options: ["محلى بالعسل الطبيعي", "ثلج أقل"]
    }
  }
];
