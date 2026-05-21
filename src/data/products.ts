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
    id: "pro-series-cordless-drill",
    name: "Pro Series Cordless Drill",
    category: "Tools & Home Improvement",
    price: 119,
    // Source: https://polyhaven.com/a/drill_01
    image: "/models/cordless-drill/thumbnail.png",
    shortDescription: "A compact everyday drill for home repairs, furniture assembly, and weekend projects.",
    description:
      "Power through common household jobs with a balanced cordless drill that feels right at home in a garage, apartment toolkit, or workshop shelf.",
    model: "/models/cordless-drill/Drill_01_1k.gltf",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 1864,
    availability: "In stock",
    colors: ["Graphite", "Safety Yellow", "Matte Black"],
    highlights: ["Compact body", "Textured grip", "Built for everyday repairs"],
    features: [
      "Comfortable handle shape for steady one-handed control",
      "Versatile chuck styling for drilling and driving tasks",
      "Durable exterior finish suited for workshop storage",
    ],
    specs: [
      { label: "Power type", value: "Cordless" },
      { label: "Use", value: "Drilling and driving" },
      { label: "Included", value: "Drill body" },
      { label: "Care", value: "Wipe clean after use" },
    ],
  },
  {
    id: "classic-wood-chess-set",
    name: "Classic Wood Chess Set",
    category: "Games & Hobbies",
    price: 64,
    // Source: https://polyhaven.com/a/chess_set
    image: "/models/classic-chess-set/thumbnail.png",
    shortDescription: "A timeless chess set for coffee tables, game nights, and thoughtful gifting.",
    description:
      "Bring a familiar strategy classic into the living room with a detailed board and full set of pieces that look polished from every angle.",
    model: "/models/classic-chess-set/chess_set_1k.gltf",
    badge: "Top Rated",
    rating: 4.9,
    reviews: 942,
    availability: "Ready to ship",
    colors: ["Natural Wood", "Ebony", "Ivory"],
    highlights: ["Complete board and pieces", "Decor-friendly display", "Great for all skill levels"],
    features: [
      "Classic alternating board pattern with detailed playing pieces",
      "Display-worthy design for shelves, dens, and coffee tables",
      "Familiar setup makes it easy for guests to start a quick match",
    ],
    specs: [
      { label: "Players", value: "2" },
      { label: "Game type", value: "Strategy" },
      { label: "Set includes", value: "Board and chess pieces" },
      { label: "Recommended age", value: "8+" },
    ],
  },
  {
    id: "event-ready-megaphone",
    name: "Event Ready Megaphone",
    category: "Electronics",
    price: 48,
    // Source: https://polyhaven.com/a/megaphone_01
    image: "/models/portable-megaphone/thumbnail.png",
    shortDescription: "A portable megaphone for school events, team practices, and crowd direction.",
    description:
      "Make announcements easier to hear with a recognizable portable megaphone designed for events, outdoor activities, and organized gatherings.",
    model: "/models/portable-megaphone/Megaphone_01_1k.gltf",
    rating: 4.5,
    reviews: 517,
    availability: "In stock",
    colors: ["White", "Signal Red", "Black"],
    highlights: ["Lightweight shape", "Easy-carry handle", "Ideal for group events"],
    features: [
      "Familiar cone profile for clear directional announcements",
      "Handle-forward design makes it easy to carry between locations",
      "Simple utility look that fits sports, school, and event settings",
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
    name: "Leafy Ceramic Potted Plant",
    category: "Home Decor",
    price: 38,
    // Source: https://polyhaven.com/a/potted_plant_02
    image: "/models/potted-plant/thumbnail.png",
    shortDescription: "A ready-to-style greenery accent for desks, shelves, windowsills, and entryways.",
    description:
      "Freshen up a room with a compact potted plant that gives product pages a familiar home decor item with a strong spatial presence.",
    model: "/models/potted-plant/potted_plant_02_1k.gltf",
    badge: "New",
    rating: 4.7,
    reviews: 728,
    availability: "In stock",
    colors: ["Green", "Terracotta", "Natural"],
    highlights: ["Lush leafy shape", "Ceramic pot", "Fits desks and shelves"],
    features: [
      "Compact silhouette works well on home office desks and side tables",
      "Layered leaf detail adds depth to simple interior styling",
      "Neutral pot finish pairs easily with modern or traditional rooms",
    ],
    specs: [
      { label: "Placement", value: "Indoor" },
      { label: "Pot style", value: "Ceramic" },
      { label: "Light", value: "Bright indirect light" },
      { label: "Care", value: "Water when top soil feels dry" },
    ],
  },
  {
    id: "weathered-garden-gnome",
    name: "Weathered Garden Gnome",
    category: "Patio & Garden",
    price: 42,
    // Source: https://polyhaven.com/a/garden_gnome
    image: "/models/garden-gnome/thumbnail.png",
    shortDescription: "A charming outdoor accent for planters, pathways, patios, and garden beds.",
    description:
      "Add a playful focal point to outdoor spaces with a classic garden gnome that feels instantly recognizable in any home and garden catalog.",
    model: "/models/garden-gnome/garden_gnome_1k.gltf",
    rating: 4.6,
    reviews: 389,
    availability: "In stock",
    colors: ["Weathered Red", "Stone", "Garden Green"],
    highlights: ["Classic garden character", "Weathered finish", "Great for planters and patios"],
    features: [
      "Traditional silhouette brings personality to outdoor displays",
      "Weathered surface detail blends naturally with garden textures",
      "Compact size is easy to move between planters and patio corners",
    ],
    specs: [
      { label: "Placement", value: "Outdoor" },
      { label: "Style", value: "Classic garden accent" },
      { label: "Season", value: "Spring through fall" },
      { label: "Care", value: "Bring indoors during freezing weather" },
    ],
  },
  {
    id: "multi-purpose-lubricant-spray",
    name: "Multi-Purpose Lubricant Spray",
    category: "Tools & Home Improvement",
    price: 12,
    // Source: https://polyhaven.com/a/lubricant_spray
    image: "/models/lubricant-spray/thumbnail.png",
    shortDescription: "A garage shelf staple for squeaky hinges, stuck hardware, and basic maintenance.",
    description:
      "Keep a practical maintenance essential on hand for quick fixes around the home, garage, workshop, or utility closet.",
    model: "/models/lubricant-spray/lubricant_spray_1k.gltf",
    badge: "Value Pick",
    rating: 4.4,
    reviews: 1206,
    availability: "In stock",
    colors: ["Blue", "Metal", "White"],
    highlights: ["Workshop essential", "Compact can", "Useful for household maintenance"],
    features: [
      "Recognizable spray can format fits common garage organization setups",
      "Useful for general household maintenance and hardware upkeep",
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
