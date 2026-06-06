export type Product = {
  id: number;
  title: string;
  category: "Resume" | "Canva Kit" | "Planner";
  price: number;
  originalPrice?: number;
  badge?: string;
  description: string;
  features: string[];
  gradient: string;
  icon: string;
  sales: number;
  previewUrl?: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Executive Resume Suite",
    category: "Resume",
    price: 19,
    originalPrice: 35,
    badge: "Best Seller",
    description:
      "A polished, ATS-friendly resume set with cover letter and LinkedIn banner included.",
    features: ["5 Page Templates", "ATS Optimized", "Cover Letter", "MS Word + Google Docs"],
    gradient: "from-violet-600 to-purple-800",
    icon: "📄",
    sales: 1240,
    previewUrl: "https://drive.google.com/file/d/1RW3abeRObU_BxFbVhHuUgoCPv9fnu_fX/view?usp=sharing",
  },
  {
    id: 2,
    title: "Lumina Brand Kit",
    category: "Canva Kit",
    price: 27,
    originalPrice: 49,
    badge: "New",
    description:
      "Complete branding pack — logos, social posts, stories, and pitch deck, all editable in Canva.",
    features: ["100+ Templates", "Logo Variations", "Social Media Pack", "Pitch Deck"],
    gradient: "from-pink-600 to-rose-700",
    icon: "✨",
    sales: 876,
  },
  {
    id: 3,
    title: "Aesthetic Daily Planner",
    category: "Planner",
    price: 14,
    description:
      "Minimalist digital planner with daily, weekly, and monthly views. Perfect for GoodNotes & Notability.",
    features: ["300+ Pages", "Hyperlinked Tabs", "Dark & Light Mode", "GoodNotes Ready"],
    gradient: "from-sky-500 to-blue-700",
    icon: "📅",
    sales: 2103,
  },
  {
    id: 4,
    title: "Creative Portfolio Kit",
    category: "Canva Kit",
    price: 32,
    originalPrice: 55,
    badge: "Popular",
    description:
      "Showcase your work beautifully. Includes website mockup pages, case study layouts, and bios.",
    features: ["50 Layouts", "Mobile Mockups", "Case Study Pages", "Fully Editable"],
    gradient: "from-amber-500 to-orange-600",
    icon: "🎨",
    sales: 654,
  },
  {
    id: 5,
    title: "Minimal Resume Pack",
    category: "Resume",
    price: 12,
    description:
      "Clean, typography-driven resume templates that let your experience speak for itself.",
    features: ["3 Color Variants", "One-Page Design", "Canva + Word", "Free Updates"],
    gradient: "from-teal-500 to-emerald-700",
    icon: "🗂️",
    sales: 987,
  },
  {
    id: 6,
    title: "Year in Review Planner",
    category: "Planner",
    price: 18,
    originalPrice: 28,
    badge: "Sale",
    description:
      "Annual goal-setting planner with vision boards, habit trackers, and gratitude journaling pages.",
    features: ["Vision Board", "Habit Tracker", "Goal Sheets", "Printable + Digital"],
    gradient: "from-fuchsia-600 to-purple-700",
    icon: "🌟",
    sales: 1456,
  },
];

export const categories = ["All", "Resume", "Canva Kit", "Planner"] as const;
export type Category = (typeof categories)[number];
