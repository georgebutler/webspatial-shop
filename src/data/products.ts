export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  shortDescription: string;
  model?: string;
  badge?: string;
  rating: number;
  reviews: number;
  availability: string;
  colors: string[];
  highlights: string[];
  features: string[];
  specs: ProductSpec[];
};

export const products: Product[] = [
  {
    id: "awe-commuter-bottle",
    name: "AWE Commuter Bottle",
    category: "Everyday Carry",
    price: 48,
    image: "/img/water-bottle-demo.jpg",
    shortDescription: "Insulated hydration for desk days, travel, and trade show floors.",
    description:
      "A streamlined stainless steel bottle designed for all-day carry with a tactile powder finish, leak-resistant lid, and a presentation-ready silhouette for lifestyle merchandising.",
    model: "/glb/water-bottle-demo.glb",
    badge: "Spatial Preview",
    rating: 4.9,
    reviews: 128,
    availability: "In stock",
    colors: ["Graphite", "Cloud", "Moss"],
    highlights: ["24-hour cold retention", "Leak-resistant twist cap", "Fits standard cup holders"],
    features: [
      "Double-wall insulated stainless steel body",
      "Low-profile carry loop and textured grip finish",
      "Wide-mouth opening for easy cleaning and refills",
    ],
    specs: [
      { label: "Capacity", value: "24 oz" },
      { label: "Material", value: "18/8 stainless steel" },
      { label: "Weight", value: "0.8 lb" },
      { label: "Care", value: "Hand wash recommended" },
    ],
  },
  {
    id: "studio-wireless-headphones",
    name: "Studio Wireless Headphones",
    category: "Audio",
    price: 229,
    image: "/img/Terminal.png",
    shortDescription: "Balanced over-ear listening with quiet comfort for focused work.",
    description:
      "Premium wireless headphones tuned for clarity and long listening sessions, with plush memory foam cushions, intuitive controls, and a refined matte finish suited to modern workspaces.",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 342,
    availability: "Ready to ship",
    colors: ["Slate", "Sand"],
    highlights: ["40-hour battery", "Adaptive noise control", "Fast charge in 10 minutes"],
    features: [
      "Custom-tuned drivers for music, calls, and video meetings",
      "Dual-device Bluetooth pairing for seamless switching",
      "Travel case included for commuting and events",
    ],
    specs: [
      { label: "Battery life", value: "Up to 40 hours" },
      { label: "Charging", value: "USB-C fast charging" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Weight", value: "0.56 lb" },
    ],
  },
  {
    id: "horizon-laptop-stand",
    name: "Horizon Laptop Stand",
    category: "Workspace",
    price: 89,
    image: "/img/Realistic_Laptop_Concept.png",
    shortDescription: "Elevated ergonomics and cable-friendly organization for clean desks.",
    description:
      "An adjustable aluminum stand that lifts your screen to a more natural height while keeping your desktop looking orderly with a minimalist, architectural profile.",
    badge: "New Arrival",
    rating: 4.7,
    reviews: 96,
    availability: "In stock",
    colors: ["Silver", "Midnight"],
    highlights: ["6 viewing angles", "Fold-flat travel design", "Anti-slip silicone pads"],
    features: [
      "Open-frame construction improves airflow around your device",
      "Compact footprint frees space for notebooks and accessories",
      "Engineered to pair with laptops up to 16 inches",
    ],
    specs: [
      { label: "Compatibility", value: "Up to 16-inch laptops" },
      { label: "Material", value: "CNC aluminum" },
      { label: "Weight", value: "1.9 lb" },
      { label: "Folded height", value: "1.2 in" },
    ],
  },
  {
    id: "arc-mechanical-keyboard",
    name: "Arc Mechanical Keyboard",
    category: "Workspace",
    price: 159,
    image: "/img/Keyboard_Casio_VL-Tone.png",
    shortDescription: "Compact tactile typing with a refined desktop presence.",
    description:
      "A wireless mechanical keyboard with sculpted keycaps, warm backlighting, and a restrained design language that feels polished in both home offices and creative studios.",
    rating: 4.8,
    reviews: 211,
    availability: "Limited stock",
    colors: ["Ivory", "Ink"],
    highlights: ["Hot-swappable switches", "Multi-device pairing", "South-facing backlight"],
    features: [
      "75% layout balances efficiency with familiar navigation",
      "Gasket-mounted plate softens keystrokes during long sessions",
      "Programmable function layer for custom shortcuts",
    ],
    specs: [
      { label: "Layout", value: "75% compact" },
      { label: "Connection", value: "Bluetooth / USB-C" },
      { label: "Battery life", value: "Up to 70 hours" },
      { label: "Switch type", value: "Tactile" },
    ],
  },
  {
    id: "nova-smartphone-dock",
    name: "Nova Charging Dock",
    category: "Mobile",
    price: 74,
    image: "/img/Phone_17_Pro_Max.png",
    shortDescription: "A bedside and desktop dock that makes charging feel intentional.",
    description:
      "This weighted charging dock combines fast wireless charging with a precise viewing angle for calls, widgets, and quick glances throughout the day.",
    rating: 4.6,
    reviews: 85,
    availability: "Ships in 1–2 days",
    colors: ["Stone", "Charcoal"],
    highlights: ["Magnetic alignment", "15W wireless charging", "Braided cable included"],
    features: [
      "Weighted base keeps the dock steady during one-handed use",
      "Soft-touch surface protects your device finish",
      "Compact size fits nightstands, reception desks, and counters",
    ],
    specs: [
      { label: "Power", value: "Up to 15W" },
      { label: "Cable", value: "1.5 m braided USB-C" },
      { label: "Compatibility", value: "Magnetic wireless charging devices" },
      { label: "Base diameter", value: "3.7 in" },
    ],
  },
  {
    id: "summit-weekender-pack",
    name: "Summit Weekender Pack",
    category: "Travel",
    price: 188,
    image: "/img/vehicle-speedster.png",
    shortDescription: "Structured storage for overnight trips, demos, and hybrid work days.",
    description:
      "A durable carry pack with modular compartments for tech, apparel, and essentials, finished in a weather-resistant fabric that looks elevated in transit and on the show floor.",
    rating: 4.9,
    reviews: 167,
    availability: "In stock",
    colors: ["Onyx", "Dune"],
    highlights: ["27L capacity", "Padded device sleeve", "Weather-resistant shell"],
    features: [
      "Clamshell opening simplifies packing and unpacking",
      "Dedicated quick-access pocket for passport and charger",
      "Structured silhouette keeps the bag upright when set down",
    ],
    specs: [
      { label: "Capacity", value: "27 L" },
      { label: "Laptop sleeve", value: "Up to 16 in" },
      { label: "Fabric", value: "Recycled performance textile" },
      { label: "Carry options", value: "Backpack / luggage pass-through" },
    ],
  },
];
