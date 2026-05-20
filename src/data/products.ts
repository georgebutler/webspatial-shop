export const products = [
  {
    id: "awe-water-bottle-demo",
    name: "AWE Booth Demo Water Bottle",
    price: 0,
    image: "/img/water-bottle-demo.jpg",
    description:
      "Single CC0 demo model for booth use, based on the Khronos glTF Sample Assets Water Bottle.",
    model: "/glb/water-bottle-demo.glb",
  },
] as const;

export type Product = (typeof products)[number]
