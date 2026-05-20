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
    id: "stainless-steel-water-bottle",
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 32,
    image: "/img/water-bottle-demo.jpg",
    shortDescription: "A reusable insulated bottle for work, school, workouts, and travel.",
    description:
      "Keep drinks cold or hot throughout the day with a durable stainless steel bottle that fits easily in backpacks, cup holders, and gym bags.",
    model: "/glb/water-bottle-demo.glb",
    badge: "Best Seller",
    rating: 4.7,
    reviews: 1842,
    availability: "In stock",
    colors: ["Black", "White", "Sage"],
    highlights: ["Keeps drinks cold up to 24 hours", "Leak-resistant lid", "Fits most cup holders"],
    features: [
      "Double-wall vacuum-insulated stainless steel",
      "Easy-carry lid with a comfortable loop handle",
      "Wide-mouth opening for ice cubes and simple cleaning",
    ],
    specs: [
      { label: "Capacity", value: "24 oz" },
      { label: "Material", value: "18/8 stainless steel" },
      { label: "Weight", value: "0.8 lb" },
      { label: "Care", value: "Top-rack dishwasher safe" },
    ],
  },
  {
    id: "wireless-game-controller",
    name: "Wireless Game Controller",
    category: "Electronics",
    price: 69,
    image: "/img/Steam_Controller_2_Concept_V2.png",
    shortDescription: "A comfortable rechargeable controller for console, desktop, and cloud gaming.",
    description:
      "Play your favorite games with responsive buttons, textured grips, low-latency wireless pairing, and a battery that lasts through long sessions.",
    badge: "Top Rated",
    rating: 4.6,
    reviews: 2381,
    availability: "Ready to ship",
    colors: ["Black", "White", "Blue"],
    highlights: ["Rechargeable battery", "Low-latency wireless connection", "Textured comfort grips"],
    features: [
      "Responsive analog sticks and pressure-sensitive triggers",
      "USB-C charging with wired play support",
      "Compatible with popular gaming platforms and PCs",
    ],
    specs: [
      { label: "Battery life", value: "Up to 30 hours" },
      { label: "Charging", value: "USB-C" },
      { label: "Connectivity", value: "Bluetooth / USB-C" },
      { label: "Included", value: "Controller and charging cable" },
    ],
  },
  {
    id: "slim-laptop",
    name: "Slim Laptop",
    category: "Electronics",
    price: 899,
    image: "/img/Realistic_Laptop_Concept.png",
    shortDescription: "A lightweight everyday laptop for browsing, streaming, school, and work.",
    description:
      "Stay productive with a thin laptop that combines a bright display, fast storage, all-day battery life, and the ports you need for everyday tasks.",
    badge: "New",
    rating: 4.7,
    reviews: 914,
    availability: "In stock",
    colors: ["Silver", "Graphite"],
    highlights: ["15.6-inch display", "Fast solid-state storage", "Up to 12 hours of battery life"],
    features: [
      "Slim aluminum design that is easy to carry",
      "Backlit keyboard for comfortable typing",
      "Built-in webcam and microphone for video calls",
    ],
    specs: [
      { label: "Display", value: "15.6 in" },
      { label: "Storage", value: "512 GB SSD" },
      { label: "Memory", value: "16 GB RAM" },
      { label: "Weight", value: "3.2 lb" },
    ],
  },
  {
    id: "portable-record-player",
    name: "Portable Record Player",
    category: "Electronics",
    price: 129,
    image: "/img/Yamaha_TT-300_Record_Player.png",
    shortDescription: "A compact turntable for playing vinyl records at home.",
    description:
      "Enjoy your favorite albums with a simple belt-drive record player featuring built-in speakers, Bluetooth output, and a dust cover for everyday use.",
    rating: 4.5,
    reviews: 637,
    availability: "In stock",
    colors: ["Black", "Walnut"],
    highlights: ["Built-in stereo speakers", "Bluetooth output", "Three-speed playback"],
    features: [
      "Plays 33, 45, and 78 RPM records",
      "Built-in speakers make setup quick and simple",
      "RCA output connects to external speakers",
    ],
    specs: [
      { label: "Speeds", value: "33 / 45 / 78 RPM" },
      { label: "Connectivity", value: "Bluetooth / RCA" },
      { label: "Drive type", value: "Belt drive" },
      { label: "Cover", value: "Removable dust cover" },
    ],
  },
  {
    id: "classic-soccer-ball",
    name: "Classic Soccer Ball",
    category: "Sports & Outdoors",
    price: 29,
    image: "/img/ball_football_realistic.png",
    shortDescription: "A durable size 5 soccer ball for practice, pickup games, and backyard play.",
    description:
      "Made for everyday play, this soccer ball has a textured outer cover, reliable air retention, and a classic look that works for all skill levels.",
    rating: 4.6,
    reviews: 1247,
    availability: "In stock",
    colors: ["White / Black"],
    highlights: ["Official size 5", "Textured outer cover", "Great for grass or turf"],
    features: [
      "Durable synthetic cover for regular use",
      "Butyl bladder helps retain air longer",
      "Suitable for recreational games and team practice",
    ],
    specs: [
      { label: "Size", value: "5" },
      { label: "Cover", value: "Synthetic leather" },
      { label: "Use", value: "Outdoor / indoor" },
      { label: "Inflation", value: "Ships deflated" },
    ],
  },
  {
    id: "building-blocks-set",
    name: "Building Blocks Set",
    category: "Toys & Games",
    price: 39,
    image: "/img/Mario_Lego.png",
    shortDescription: "A colorful building set for creative play, display, and gifting.",
    description:
      "Encourage hands-on creativity with an easy-to-build block set that includes detailed pieces, simple instructions, and plenty of room for imagination.",
    rating: 4.8,
    reviews: 2034,
    availability: "In stock",
    colors: ["Multicolor"],
    highlights: ["250+ pieces", "Step-by-step instructions", "Fun for kids and collectors"],
    features: [
      "Includes a mix of character, scene, and accessory pieces",
      "Designed for solo play or family building time",
      "Finished model works as a shelf display",
    ],
    specs: [
      { label: "Pieces", value: "250+" },
      { label: "Recommended age", value: "8+" },
      { label: "Material", value: "ABS plastic" },
      { label: "Included", value: "Blocks and instructions" },
    ],
  },
];
