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
    id: "compact-cordless-drill",
    name: "Compact Cordless Drill",
    category: "Tools & Home Improvement",
    price: 119,
    // Source: https://polyhaven.com/a/drill_01
    image: "/models/cordless-drill/thumbnail.png",
    shortDescription: "A compact cordless drill for simple repairs, assembly, and weekend projects.",
    description:
      "A balanced cordless drill for common household tasks, garage projects, and basic workshop use.",
    model: "/models/cordless-drill/Drill_01_1k.usdz",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 1864,
    availability: "In stock",
    colors: ["Dark Gray", "Yellow", "Black"],
    highlights: ["Compact body", "Textured grip", "Made for everyday repairs"],
    features: [
      "Comfortable handle shape for steady one-handed control",
      "Versatile front chuck for drilling and driving tasks",
      "Durable exterior finish suited for regular storage",
    ],
    specs: [
      { label: "Power type", value: "Cordless" },
      { label: "Use", value: "Drilling and driving" },
      { label: "Included", value: "Drill body" },
      { label: "Care", value: "Wipe clean after use" },
    ],
  },
  {
    id: "wooden-strategy-game-set",
    name: "Wooden Strategy Game Set",
    category: "Games & Hobbies",
    price: 64,
    // Source: https://polyhaven.com/a/chess_set
    image: "/models/classic-chess-set/thumbnail.png",
    shortDescription: "A wooden tabletop game set for coffee tables, quiet evenings, and gifting.",
    description:
      "A polished board and matching pieces create a familiar tabletop game set for relaxed play at home.",
    model: "/models/classic-chess-set/chess_set_1k.usdz",
    badge: "Top Rated",
    rating: 4.9,
    reviews: 942,
    availability: "Ready to ship",
    colors: ["Natural Wood", "Dark Wood", "Cream"],
    highlights: ["Complete board and pieces", "Display-friendly design", "Great for all skill levels"],
    features: [
      "Alternating board pattern with detailed playing pieces",
      "Display-ready design for shelves, dens, and coffee tables",
      "Simple setup makes it easy for guests to start a quick match",
    ],
    specs: [
      { label: "Players", value: "2" },
      { label: "Game type", value: "Strategy" },
      { label: "Set includes", value: "Board and playing pieces" },
      { label: "Recommended age", value: "8+" },
    ],
  },
  {
    id: "portable-announcement-speaker",
    name: "Portable Announcement Speaker",
    category: "Electronics",
    price: 48,
    // Source: https://polyhaven.com/a/megaphone_01
    image: "/models/portable-megaphone/thumbnail.png",
    shortDescription: "A portable announcement speaker for events, practices, and group activities.",
    description:
      "A handheld announcement speaker helps messages carry during outdoor activities, group events, and organized gatherings.",
    model: "/models/portable-megaphone/Megaphone_01_1k.usdz",
    rating: 4.5,
    reviews: 517,
    availability: "In stock",
    colors: ["White", "Red", "Black"],
    highlights: ["Lightweight shape", "Easy-carry handle", "Useful for group events"],
    features: [
      "Cone-shaped profile for clear directional announcements",
      "Handle-forward design makes it easy to carry between locations",
      "Simple utility look that fits practice, school, and event settings",
    ],
    specs: [
      { label: "Use", value: "Events and announcements" },
      { label: "Design", value: "Handheld" },
      { label: "Finish", value: "Molded exterior" },
      { label: "Storage", value: "Store indoors when not in use" },
    ],
  },
  {
    id: "leafy-ceramic-potted-plant",
    name: "Leafy Potted Plant",
    category: "Home Decor",
    price: 38,
    // Source: https://polyhaven.com/a/potted_plant_02
    image: "/models/potted-plant/thumbnail.png",
    shortDescription: "A ready-to-style greenery accent for desks, shelves, windowsills, and entryways.",
    description:
      "A compact potted plant adds a fresh accent to desks, side tables, shelves, and entryway surfaces.",
    model: "/models/potted-plant/potted_plant_02_1k.usdz",
    badge: "New",
    rating: 4.7,
    reviews: 728,
    availability: "In stock",
    colors: ["Green", "Clay", "Natural"],
    highlights: ["Lush leafy shape", "Simple pot", "Fits desks and shelves"],
    features: [
      "Compact silhouette works well on home office desks and side tables",
      "Layered leaf detail adds depth to simple interior styling",
      "Neutral pot finish pairs easily with a range of room styles",
    ],
    specs: [
      { label: "Placement", value: "Indoor" },
      { label: "Pot style", value: "Simple planter" },
      { label: "Light", value: "Bright indirect light" },
      { label: "Care", value: "Water when top soil feels dry" },
    ],
  },
  {
    id: "decorative-garden-figure",
    name: "Decorative Garden Figure",
    category: "Patio & Garden",
    price: 42,
    // Source: https://polyhaven.com/a/garden_gnome
    image: "/models/garden-gnome/thumbnail.png",
    shortDescription: "A small outdoor accent for planters, pathways, patios, and garden beds.",
    description:
      "A compact decorative figure adds a lighthearted focal point to outdoor spaces and garden displays.",
    model: "/models/garden-gnome/garden_gnome_1k.usdz",
    rating: 4.6,
    reviews: 389,
    availability: "In stock",
    colors: ["Red", "Stone", "Green"],
    highlights: ["Classic garden accent", "Weathered finish", "Great for planters and patios"],
    features: [
      "Friendly silhouette brings personality to outdoor displays",
      "Weathered surface detail blends naturally with garden textures",
      "Compact size is easy to move between planters and patio corners",
    ],
    specs: [
      { label: "Placement", value: "Outdoor" },
      { label: "Style", value: "Decorative garden accent" },
      { label: "Season", value: "Spring through fall" },
      { label: "Care", value: "Bring indoors during freezing weather" },
    ],
  },
  {
    id: "multi-purpose-maintenance-spray",
    name: "Multi-Purpose Maintenance Spray",
    category: "Tools & Home Improvement",
    price: 12,
    // Source: https://polyhaven.com/a/lubricant_spray
    image: "/models/lubricant-spray/thumbnail.png",
    shortDescription: "A garage shelf staple for hinges, hardware, and basic household maintenance.",
    description:
      "A practical maintenance spray for quick fixes around the home, garage, workshop, or utility closet.",
    model: "/models/lubricant-spray/lubricant_spray_1k.usdz",
    badge: "Value Pick",
    rating: 4.4,
    reviews: 1206,
    availability: "In stock",
    colors: ["Blue", "Metal", "White"],
    highlights: ["Workshop essential", "Compact can", "Useful for household upkeep"],
    features: [
      "Compact can format fits common garage organization setups",
      "Useful for general household maintenance and hardware care",
      "Compact size stores easily in toolboxes, cabinets, and utility drawers",
    ],
    specs: [
      { label: "Use", value: "General maintenance" },
      { label: "Container", value: "Aerosol can" },
      { label: "Storage", value: "Store in a cool, dry place" },
      { label: "Safety", value: "Use in a well-ventilated area" },
    ],
  },
];
