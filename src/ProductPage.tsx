import { Link, useParams } from "react-router-dom";
import { products, Product } from "./data/products";
import "./ProductPage.css";
import {
  ModelAsset,
  ModelEntity,
  Reality,
  SceneGraph,
  UnlitMaterial,
} from "@webspatial/react-sdk";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product: Product | undefined = products.find((p) => p.id === id);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  useEffect(() => {
    let id: number;
    function animate() {
      setRotation((prev) => ({ ...prev, y: prev.y + 1.0 }));
      id = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(id);
  }, []);

  if (!product) {
    return (
      <div className="app">
        <h1>Product Not Found</h1>
        <p>The product you’re looking for doesn’t exist.</p>
        <Link to="/">Back to Store</Link>
      </div>
    );
  }
  return (
    <div className="productPage">
      <div>
        <h1 className="product-name">
          {product.name}
        </h1>
        <Reality style={{ width: "500px", height: "450px", "--xr-depth": 100 }}>
          <UnlitMaterial id="red" color="#ff0000" />
          <ModelAsset
            id={product.model}
            src={product.model}
          />
          <SceneGraph>
            <ModelEntity
              model={product.model}
              position={{ ...product.position, z: product.position.z + 0.1 }}
              scale={{
                x: product.scale.x * 2,
                y: product.scale.y * 2,
                z: product.scale.z * 2,
              }}
              rotation={{
                x: product.rotation.x,
                y: product.rotation.y + rotation.y,
                z: product.rotation.z,
              }}
            />
          </SceneGraph>
        </Reality>
        <article className="description">
          <h2>Description</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p><Link to="/">Back to Store</Link></p>
        </article>
      </div>
    </div>
  );
}
