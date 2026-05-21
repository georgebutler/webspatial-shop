import { Link, useParams } from "react-router";
import { products } from "./data/products";
import "./ProductPage.css";
import { ModelRef } from "@webspatial/react-sdk";
import { useEffect, useRef } from "react";
import Model3D from "./components/Model3D";
import { ShoppingCartIcon } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter((candidate) => candidate.id !== id).slice(0, 3);
  const modelRef = useRef<ModelRef>(null);

  useEffect(() => {
    if (!product?.model) {
      return;
    }

    let id: number;

    function animate() {
      const { current } = modelRef;
      if (current) {
        current.entityTransform = DOMMatrix
          .fromMatrix(current.entityTransform)
          .rotateSelf(0, 0.5, 0);
      }
      id = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(id);
  }, [product?.model]);

  if (!product) {
    return (
      <div className="productPage productPage--empty">
        <p className="eyebrow">Catalog</p>
        <h1>Product not found</h1>
        <p>The product you’re looking for is no longer available in the current collection.</p>
        <Link to="/" className="button button-primary">Return to storefront</Link>
      </div>
    );
  }

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="productPageShell">
      <header className="productTopbar">
        <Link to="/" className="storeLogo">Shop</Link>
        <nav aria-label="Store navigation">
          <Link to="/">New Arrivals</Link>
          <Link to="/">Best Sellers</Link>
          <Link to="/">Departments</Link>
        </nav>
        <button type="button" className="cartButton">
          <ShoppingCartIcon aria-hidden="true" />
          Cart
        </button>
      </header>

      <div className="productPage">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/">Products</Link>
          <span>/</span>
          <span>{product.category}</span>
        </nav>

        <section className="product-hero">
          <div className="product-media-panel">
            <Model3D
              className="product-3D"
              src={product.model}
              imgSrc={product.image}
              alt={product.name}
              ref={modelRef}
            />
            <p className="spatial-note">Interactive 3D preview</p>
          </div>
          <article className="product-summary">
            <div className="product-summary-header">
              <div>
                <p className="eyebrow">{product.category}</p>
                <h1 className="product-name">{product.name}</h1>
              </div>
              {product.badge ? <span className="product-badge">{product.badge}</span> : null}
            </div>

            <div className="product-rating" aria-label={`${product.rating} out of 5 stars`}>
              <strong>★ {product.rating.toFixed(1)}</strong>
              <span>{product.reviews.toLocaleString()} reviews</span>
              <span>{product.availability}</span>
            </div>

            <p className="product-price">{price}</p>
            <ul className="description-list">
              <li>{product.description}</li>
            </ul>

            <ul className="feature-list">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="option-group">
              <h2>Color / finish</h2>
              <div className="chip-row">
                {product.colors.map((color) => (
                  <span key={color} className="chip">{color}</span>
                ))}
              </div>
            </div>

            <div className="cta-row">
              <button type="button" className="button button-primary">Add to cart</button>
              <button type="button" className="button button-secondary">Save for later</button>
            </div>

            <div className="service-panels">
              <div>
                <h3>Free shipping</h3>
                <p>On orders over $50, with faster delivery options at checkout.</p>
              </div>
              <div>
                <h3>Easy returns</h3>
                <p>Return eligible items within 30 days in new or gently used condition.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="product-details-grid">
          <article className="detail-panel">
            <p className="eyebrow">Key highlights</p>
            <h2>Why you’ll like it</h2>
            <ul className="highlight-list">
              {product.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <p className="eyebrow">Specifications</p>
            <h2>Essential product facts</h2>
            <dl className="spec-list">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </section>

        <section className="related-products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Continue shopping</p>
              <h2>You may also like</h2>
            </div>
            <Link to="/" className="text-link">Back to the full collection</Link>
          </div>
          <div className="related-grid">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="related-card">
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <div>
                  <p className="related-category">{relatedProduct.category}</p>
                  <h3>{relatedProduct.name}</h3>
                  <p>{relatedProduct.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
