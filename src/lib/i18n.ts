export type Lang = "en" | "de" | "ar";

export const langMeta: Record<Lang, { label: string; dir: "ltr" | "rtl"; htmlLang: string }> = {
  en: { label: "EN", dir: "ltr", htmlLang: "en" },
  de: { label: "DE", dir: "ltr", htmlLang: "de" },
  ar: { label: "AR", dir: "rtl", htmlLang: "ar" },
};

export type Translations = typeof translations.en;

export const translations = {
  en: {
    nav: {
      products: "Products",
      about: "About",
      reviews: "Reviews",
      contact: "Contact",
      cart: "Cart",
    },
    hero: {
      badge: "Trusted by 5,000+ Creatives Worldwide",
      title1: "Design Templates",
      title2: "That Elevate",
      title3: "Your Brand",
      description:
        "Premium Canva kits, resume templates, and digital planners — crafted pixel-perfect for designers, freelancers, and go-getters.",
      cta1: "Browse Templates",
      cta2: "See Reviews",
      stat1Value: "5,200+",
      stat1Label: "Happy Customers",
      stat2Value: "18,000+",
      stat2Label: "Downloads",
      stat3Value: "4.9/5",
      stat3Label: "Average Rating",
      scroll: "Scroll",
    },
    products: {
      sectionLabel: "The Collection",
      heading: "Premium Digital Products",
      description:
        "Every template is crafted with obsessive attention to detail — ready to download and use instantly.",
      filterAll: "All",
      catResume: "Resume",
      catCanva: "Canva Kit",
      catPlanner: "Planner",
      addToCart: "Add to Cart",
      inCart: "In Cart",
      added: "Added!",
      sold: "sold",
      badgeBestSeller: "Best Seller",
      badgeNew: "New",
      badgePopular: "Popular",
      badgeSale: "Sale",
    },
    productData: {
      1: {
        title: "Executive Resume Suite",
        description:
          "A polished, ATS-friendly resume set with cover letter and LinkedIn banner included.",
        features: ["5 Page Templates", "ATS Optimized", "Cover Letter", "MS Word + Google Docs"],
      },
      2: {
        title: "Lumina Brand Kit",
        description:
          "Complete branding pack — logos, social posts, stories, and pitch deck, all editable in Canva.",
        features: ["100+ Templates", "Logo Variations", "Social Media Pack", "Pitch Deck"],
      },
      3: {
        title: "Aesthetic Daily Planner",
        description:
          "Minimalist digital planner with daily, weekly, and monthly views. Perfect for GoodNotes & Notability.",
        features: ["300+ Pages", "Hyperlinked Tabs", "Dark & Light Mode", "GoodNotes Ready"],
      },
      4: {
        title: "Creative Portfolio Kit",
        description:
          "Showcase your work beautifully. Includes website mockup pages, case study layouts, and bios.",
        features: ["50 Layouts", "Mobile Mockups", "Case Study Pages", "Fully Editable"],
      },
      5: {
        title: "Minimal Resume Pack",
        description:
          "Clean, typography-driven resume templates that let your experience speak for itself.",
        features: ["3 Color Variants", "One-Page Design", "Canva + Word", "Free Updates"],
      },
      6: {
        title: "Year in Review Planner",
        description:
          "Annual goal-setting planner with vision boards, habit trackers, and gratitude journaling pages.",
        features: ["Vision Board", "Habit Tracker", "Goal Sheets", "Printable + Digital"],
      },
    } as Record<number, { title: string; description: string; features: string[] }>,
    about: {
      sectionLabel: "About the Designer",
      heading1: "Hi, I'm",
      heading2: "Jasmine Mo",
      heading3: "👋",
      bio1:
        "I'm a graphic designer with a passion for creating beautiful, functional digital products that help people show up confidently — whether they're landing their dream job, building a brand, or just getting more organized.",
      bio2:
        "Every template in this store is something I would use myself. I obsess over typography, whitespace, and color so you don't have to. My goal is simple: hand you a polished, professional design in minutes — not hours.",
      value1Title: "Design-First",
      value1Desc:
        "Every template starts with aesthetics — because first impressions are everything.",
      value2Title: "Ready to Use",
      value2Desc:
        "Download, customize, and go. No design degree required — just your vision.",
      value3Title: "Made with Care",
      value3Desc:
        "Each product is crafted with obsessive attention to detail and tested by real creatives.",
      badge1: "5,200+ Customers",
      badge2: "4.9 ★ Rated",
    },
    testimonials: {
      sectionLabel: "Reviews",
      heading: "Loved by Creatives",
      reviewCount: "340+ reviews",
      texts: [
        "The Lumina Brand Kit saved me so much time on a client pitch. Everything looks incredibly polished — my client thought I'd hired a whole design agency.",
        "Got three interview callbacks in one week after using the Executive Resume template. The ATS optimization is legit — definitely worth every penny.",
        "I've been using the daily planner in GoodNotes for 3 months and I'm more organized than I've ever been. The design is so beautiful I actually want to use it.",
      ],
    },
    contact: {
      sectionLabel: "Get in Touch",
      heading: "Let's Talk",
      description:
        "Questions about a product, custom orders, or just want to say hi? I'd love to hear from you.",
      emailTitle: "Email me directly",
      emailNote: "I reply within 24 hours",
      socialTitle: "Social DMs",
      socialDesc: "Find me on Instagram for quick chats and design inspo.",
      customNote:
        "Custom orders welcome! Need a template tailored to your brand? Send me a message and let's create something unique together.",
      labelName: "Your Name",
      labelEmail: "Email Address",
      labelMessage: "Message",
      placeholderName: "Jane Smith",
      placeholderEmail: "jane@example.com",
      placeholderMessage: "Hi Jasmine, I'd love to ask about...",
      send: "Send Message",
      sending: "Sending...",
      successHeading: "Message Sent!",
      successBody: "Thanks for reaching out! I'll get back to you within 24 hours.",
    },
    footer: {
      tagline:
        "Premium digital templates by Jasmine Mo — crafted for designers, freelancers, and ambitious professionals who want to make an impression.",
      colProducts: "Products",
      colSupport: "Support",
      productLinks: ["Resume Templates", "Canva Kits", "Digital Planners"],
      supportLinks: ["FAQ", "Refund Policy", "Contact Jasmine", "License Info"],
      copyright: "StudioLumina by Jasmine Mo. All rights reserved.",
      tagline2: "Crafted with care — built to inspire.",
    },
    cart: {
      heading: "Your Cart",
      empty: "Your cart is empty",
      emptyHint: "Add some templates to get started!",
      browse: "Browse Templates",
      total: "Total",
      checkout: "Checkout",
      clear: "Clear cart",
    },
  },

  de: {
    nav: {
      products: "Produkte",
      about: "Über mich",
      reviews: "Bewertungen",
      contact: "Kontakt",
      cart: "Warenkorb",
    },
    hero: {
      badge: "Vertraut von über 5.000 Kreativen weltweit",
      title1: "Design-Vorlagen",
      title2: "Die Ihre Marke",
      title3: "Erheben",
      description:
        "Premium Canva-Kits, Lebenslauf-Vorlagen und digitale Planer — pixelgenau gestaltet für Designer, Freiberufler und Aufstrebende.",
      cta1: "Vorlagen durchsuchen",
      cta2: "Bewertungen ansehen",
      stat1Value: "5.200+",
      stat1Label: "Zufriedene Kunden",
      stat2Value: "18.000+",
      stat2Label: "Downloads",
      stat3Value: "4,9/5",
      stat3Label: "Durchschnittswertung",
      scroll: "Scrollen",
    },
    products: {
      sectionLabel: "Die Kollektion",
      heading: "Premium Digitale Produkte",
      description:
        "Jede Vorlage wird mit obsessiver Liebe zum Detail gefertigt — sofort zum Download und zur Nutzung bereit.",
      filterAll: "Alle",
      catResume: "Lebenslauf",
      catCanva: "Canva-Kit",
      catPlanner: "Planer",
      addToCart: "In den Warenkorb",
      inCart: "Im Warenkorb",
      added: "Hinzugefügt!",
      sold: "verkauft",
      badgeBestSeller: "Bestseller",
      badgeNew: "Neu",
      badgePopular: "Beliebt",
      badgeSale: "Angebot",
    },
    productData: {
      1: {
        title: "Executive Lebenslauf-Suite",
        description:
          "Ein ausgefeiltes, ATS-freundliches Lebenslauf-Set inklusive Anschreiben und LinkedIn-Banner.",
        features: ["5 Seiten-Vorlagen", "ATS-optimiert", "Anschreiben", "MS Word + Google Docs"],
      },
      2: {
        title: "Lumina Brand-Kit",
        description:
          "Komplettes Branding-Paket — Logos, Social-Media-Posts, Stories und Pitch-Deck, alles bearbeitbar in Canva.",
        features: ["100+ Vorlagen", "Logo-Varianten", "Social-Media-Paket", "Pitch-Deck"],
      },
      3: {
        title: "Ästhetischer Tagesplaner",
        description:
          "Minimalistischer digitaler Planer mit täglichen, wöchentlichen und monatlichen Ansichten. Perfekt für GoodNotes & Notability.",
        features: ["300+ Seiten", "Verlinkte Register", "Hell- & Dunkel-Modus", "GoodNotes-kompatibel"],
      },
      4: {
        title: "Kreatives Portfolio-Kit",
        description:
          "Präsentieren Sie Ihre Arbeit wirkungsvoll. Enthält Website-Mockup-Seiten, Case-Study-Layouts und Biografien.",
        features: ["50 Layouts", "Mobile Mockups", "Case-Study-Seiten", "Vollständig bearbeitbar"],
      },
      5: {
        title: "Minimales Lebenslauf-Paket",
        description:
          "Klare, typografiebasierte Lebenslauf-Vorlagen, die Ihre Erfahrung für sich sprechen lassen.",
        features: ["3 Farbvarianten", "Einseitiges Design", "Canva + Word", "Kostenlose Updates"],
      },
      6: {
        title: "Jahresrückblick-Planer",
        description:
          "Jahreszielsetzungs-Planer mit Visionboards, Gewohnheitstrackern und Dankbarkeitstagebuchseiten.",
        features: ["Visionboard", "Gewohnheitstracker", "Zielblätter", "Druckbar + Digital"],
      },
    } as Record<number, { title: string; description: string; features: string[] }>,
    about: {
      sectionLabel: "Über die Designerin",
      heading1: "Hi, ich bin",
      heading2: "Jasmine Mo",
      heading3: "👋",
      bio1:
        "Ich bin Grafikdesignerin mit einer Leidenschaft für schöne, funktionale digitale Produkte, die Menschen helfen, selbstbewusst aufzutreten — ob beim Traumjob-Bewerbung, beim Markenaufbau oder bei der besseren Organisation.",
      bio2:
        "Jede Vorlage in diesem Shop ist etwas, das ich selbst verwenden würde. Ich beschäftige mich intensiv mit Typografie, Weißraum und Farbe — damit Sie es nicht müssen. Mein Ziel ist einfach: Ich übergebe Ihnen in Minuten ein poliertes, professionelles Design — nicht in Stunden.",
      value1Title: "Design im Fokus",
      value1Desc:
        "Jede Vorlage beginnt mit Ästhetik — denn der erste Eindruck zählt.",
      value2Title: "Sofort einsatzbereit",
      value2Desc:
        "Herunterladen, anpassen, loslegen. Kein Design-Studium erforderlich — nur Ihre Vision.",
      value3Title: "Mit Sorgfalt gemacht",
      value3Desc:
        "Jedes Produkt wird mit obsessiver Liebe zum Detail gestaltet und von echten Kreativen getestet.",
      badge1: "5.200+ Kunden",
      badge2: "4,9 ★ Bewertet",
    },
    testimonials: {
      sectionLabel: "Bewertungen",
      heading: "Geliebt von Kreativen",
      reviewCount: "340+ Bewertungen",
      texts: [
        "Das Lumina Brand Kit hat mir so viel Zeit bei einer Kundenpräsentation gespart. Alles sieht unglaublich professionell aus — mein Kunde dachte, ich hätte eine ganze Designagentur engagiert.",
        "Drei Rückrufe zu Vorstellungsgesprächen in einer Woche, nachdem ich die Executive-Lebenslauf-Vorlage verwendet habe. Die ATS-Optimierung ist wirklich gut — definitiv jeden Cent wert.",
        "Ich benutze den Tagesplaner in GoodNotes seit 3 Monaten und bin organisierter als je zuvor. Das Design ist so schön, dass ich ihn wirklich gerne benutze.",
      ],
    },
    contact: {
      sectionLabel: "Kontakt aufnehmen",
      heading: "Sprechen wir",
      description:
        "Fragen zu einem Produkt, individuelle Bestellungen oder einfach Hallo sagen? Ich freue mich, von Ihnen zu hören.",
      emailTitle: "Direkt per E-Mail",
      emailNote: "Ich antworte innerhalb von 24 Stunden",
      socialTitle: "Social-Media-DMs",
      socialDesc: "Finden Sie mich auf Instagram für schnelle Chats und Design-Inspiration.",
      customNote:
        "Individuelle Bestellungen willkommen! Benötigen Sie eine Vorlage, die auf Ihre Marke zugeschnitten ist? Schreiben Sie mir und wir kreieren gemeinsam etwas Einzigartiges.",
      labelName: "Ihr Name",
      labelEmail: "E-Mail-Adresse",
      labelMessage: "Nachricht",
      placeholderName: "Jane Müller",
      placeholderEmail: "jane@beispiel.de",
      placeholderMessage: "Hallo Jasmine, ich würde gerne fragen...",
      send: "Nachricht senden",
      sending: "Wird gesendet...",
      successHeading: "Nachricht gesendet!",
      successBody: "Danke, dass Sie sich gemeldet haben! Ich melde mich innerhalb von 24 Stunden.",
    },
    footer: {
      tagline:
        "Premium digitale Vorlagen von Jasmine Mo — für Designer, Freiberufler und ambitionierte Profis, die einen bleibenden Eindruck hinterlassen möchten.",
      colProducts: "Produkte",
      colSupport: "Support",
      productLinks: ["Lebenslauf-Vorlagen", "Canva-Kits", "Digitale Planer"],
      supportLinks: ["FAQ", "Rückgaberichtlinie", "Jasmine kontaktieren", "Lizenzinfo"],
      copyright: "StudioLumina von Jasmine Mo. Alle Rechte vorbehalten.",
      tagline2: "Mit Sorgfalt gestaltet — gemacht um zu inspirieren.",
    },
    cart: {
      heading: "Ihr Warenkorb",
      empty: "Ihr Warenkorb ist leer",
      emptyHint: "Fügen Sie Vorlagen hinzu, um loszulegen!",
      browse: "Vorlagen durchsuchen",
      total: "Gesamt",
      checkout: "Zur Kasse",
      clear: "Warenkorb leeren",
    },
  },

  ar: {
    nav: {
      products: "المنتجات",
      about: "عنّي",
      reviews: "التقييمات",
      contact: "تواصلي",
      cart: "السلة",
    },
    hero: {
      badge: "موثوق به من أكثر من 5,000 مبدع حول العالم",
      title1: "قوالب تصميم",
      title2: "ترفع",
      title3: "علامتك التجارية",
      description:
        "مجموعات Canva الاحترافية وقوالب السيرة الذاتية والمخططات الرقمية — مصممة بدقة للمصممين والعاملين المستقلين والطموحين.",
      cta1: "تصفح القوالب",
      cta2: "اطلع على التقييمات",
      stat1Value: "+5,200",
      stat1Label: "عميل سعيد",
      stat2Value: "+18,000",
      stat2Label: "تنزيل",
      stat3Value: "4.9/5",
      stat3Label: "متوسط التقييم",
      scroll: "اسحب",
    },
    products: {
      sectionLabel: "المجموعة",
      heading: "منتجات رقمية متميزة",
      description:
        "كل قالب مصنوع باهتمام دقيق بالتفاصيل — جاهز للتنزيل والاستخدام فوراً.",
      filterAll: "الكل",
      catResume: "سيرة ذاتية",
      catCanva: "مجموعة Canva",
      catPlanner: "مخطط",
      addToCart: "أضف إلى السلة",
      inCart: "في السلة",
      added: "تمت الإضافة!",
      sold: "مُباع",
      badgeBestSeller: "الأكثر مبيعاً",
      badgeNew: "جديد",
      badgePopular: "رائج",
      badgeSale: "تخفيض",
    },
    productData: {
      1: {
        title: "مجموعة السيرة الذاتية التنفيذية",
        description:
          "مجموعة سيرة ذاتية أنيقة وصديقة لأنظمة تتبع المتقدمين، تشمل خطاب تغطية وبانر LinkedIn.",
        features: ["5 قوالب صفحات", "محسّن لـ ATS", "خطاب تغطية", "MS Word + Google Docs"],
      },
      2: {
        title: "مجموعة Lumina للعلامة التجارية",
        description:
          "حزمة علامة تجارية متكاملة — شعارات، منشورات سوشيال ميديا، ستوريز، وعرض تقديمي، كلها قابلة للتعديل في Canva.",
        features: ["+100 قالب", "أشكال شعارات متعددة", "حزمة سوشيال ميديا", "عرض تقديمي"],
      },
      3: {
        title: "المخطط اليومي الجمالي",
        description:
          "مخطط رقمي أنيق مع عروض يومية وأسبوعية وشهرية. مثالي لـ GoodNotes وNotability.",
        features: ["+300 صفحة", "تبويبات مرتبطة", "الوضع الداكن والفاتح", "متوافق مع GoodNotes"],
      },
      4: {
        title: "مجموعة ملف الأعمال الإبداعي",
        description:
          "اعرض أعمالك بشكل احترافي. يتضمن صفحات محاكاة المواقع وتخطيطات دراسة الحالة والسير الذاتية.",
        features: ["50 تخطيطاً", "محاكاة موبايل", "صفحات دراسة الحالة", "قابل للتعديل بالكامل"],
      },
      5: {
        title: "حزمة السيرة الذاتية البسيطة",
        description:
          "قوالب سيرة ذاتية نظيفة تعتمد على الطباعة لتُبرز خبرتك بذاتها.",
        features: ["3 ألوان", "تصميم صفحة واحدة", "Canva + Word", "تحديثات مجانية"],
      },
      6: {
        title: "مخطط استعراض العام",
        description:
          "مخطط سنوي لتحديد الأهداف مع لوحات الرؤية ومتتبعات العادات وصفحات يوميات الامتنان.",
        features: ["لوحة الرؤية", "متتبع العادات", "صفحات الأهداف", "للطباعة والرقمي"],
      },
    } as Record<number, { title: string; description: string; features: string[] }>,
    about: {
      sectionLabel: "عن المصممة",
      heading1: "مرحباً، أنا",
      heading2: "جاسمين مو",
      heading3: "👋",
      bio1:
        "أنا مصممة جرافيك شغوفة بإنشاء منتجات رقمية جميلة وعملية تساعد الناس على الظهور بثقة — سواء كانوا يسعون للحصول على وظيفة أحلامهم، أو بناء علامة تجارية، أو مجرد تنظيم حياتهم بشكل أفضل.",
      bio2:
        "كل قالب في هذا المتجر هو شيء سأستخدمه بنفسي. أُولي اهتماماً بالغاً بالطباعة والمساحة البيضاء واللون — حتى لا تضطر أنت لذلك. هدفي بسيط: أسلّمك تصميماً احترافياً متقناً في دقائق — لا ساعات.",
      value1Title: "التصميم أولاً",
      value1Desc: "كل قالب يبدأ بالجماليات — لأن الانطباعات الأولى تصنع الفارق.",
      value2Title: "جاهز للاستخدام",
      value2Desc: "نزّل، خصّص، وانطلق. لا تحتاج لشهادة في التصميم — رؤيتك تكفي.",
      value3Title: "مصنوع بعناية",
      value3Desc: "كل منتج يُصنع باهتمام دقيق بالتفاصيل ويُختبر من قِبل مبدعين حقيقيين.",
      badge1: "+5,200 عميل",
      badge2: "تقييم 4.9 ★",
    },
    testimonials: {
      sectionLabel: "التقييمات",
      heading: "محبوب من المبدعين",
      reviewCount: "+340 تقييم",
      texts: [
        "وفّر عليّ Lumina Brand Kit الكثير من الوقت في تقديم عرض لأحد العملاء. كل شيء يبدو متقناً بشكل احترافي — اعتقد عميلي أنني استأجرت وكالة تصميم كاملة.",
        "حصلت على ثلاث دعوات لمقابلات عمل في أسبوع واحد بعد استخدام قالب السيرة الذاتية التنفيذية. تحسين ATS فعّال حقاً — يستحق كل قرش بالتأكيد.",
        "أستخدم المخطط اليومي في GoodNotes منذ 3 أشهر وأنا أكثر تنظيماً مما كنت عليه في حياتي. التصميم جميل جداً لدرجة أنني أريد استخدامه فعلاً.",
      ],
    },
    contact: {
      sectionLabel: "تواصل معي",
      heading: "لنتحدث",
      description:
        "أسئلة عن منتج، طلبات مخصصة، أو مجرد تحية؟ يسعدني التواصل معك.",
      emailTitle: "راسلني مباشرة",
      emailNote: "أرد خلال 24 ساعة",
      socialTitle: "رسائل السوشيال ميديا",
      socialDesc: "تجدني على Instagram للمحادثات السريعة والإلهام التصميمي.",
      customNote:
        "الطلبات المخصصة مرحب بها! هل تحتاج قالباً مصمماً خصيصاً لعلامتك التجارية؟ أرسل لي رسالة ولنصنع شيئاً مميزاً معاً.",
      labelName: "اسمك",
      labelEmail: "البريد الإلكتروني",
      labelMessage: "الرسالة",
      placeholderName: "محمد أحمد",
      placeholderEmail: "name@example.com",
      placeholderMessage: "مرحباً جاسمين، أودّ الاستفسار عن...",
      send: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      successHeading: "تم إرسال رسالتك!",
      successBody: "شكراً لتواصلك! سأرد عليك خلال 24 ساعة.",
    },
    footer: {
      tagline:
        "قوالب رقمية متميزة بقلم جاسمين مو — مصممة للمصممين والعاملين المستقلين والمحترفين الطموحين الذين يريدون ترك انطباع.",
      colProducts: "المنتجات",
      colSupport: "الدعم",
      productLinks: ["قوالب السيرة الذاتية", "مجموعات Canva", "المخططات الرقمية"],
      supportLinks: ["الأسئلة الشائعة", "سياسة الاسترداد", "تواصل مع جاسمين", "معلومات الترخيص"],
      copyright: "StudioLumina بقلم جاسمين مو. جميع الحقوق محفوظة.",
      tagline2: "مصنوع بعناية — بُني ليُلهم.",
    },
    cart: {
      heading: "سلة التسوق",
      empty: "سلتك فارغة",
      emptyHint: "أضف بعض القوالب للبدء!",
      browse: "تصفح القوالب",
      total: "الإجمالي",
      checkout: "إتمام الشراء",
      clear: "إفراغ السلة",
    },
  },
} as const;
