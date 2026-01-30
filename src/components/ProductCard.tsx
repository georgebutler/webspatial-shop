import { Link, useNavigate } from "react-router-dom";
import Model3D from "./Model3D";
import { Product } from "../data/products";
import "./ProductCard.css";

export type ProductCardProps = { product: Product; }
export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <Model3D 
        className="product-3D"
        src={product.model} 
        imgSrc={product.image}
        alt={product.name}
        onSpatialTap={() => navigate(`/product/${product.id}`)} 
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </Link>
  );
}
