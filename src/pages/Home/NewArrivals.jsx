import React, { useContext } from "react";
import ProductCard from "../../components/Products/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";

function NewArrivals() {
  const { newArrivalsProducts, loading } = useContext(ProductContext);

  if (loading) {
    return <div className="container">Loading New Arrivals...</div>;
  }

  return (
    <section className="container product-section new-arrivals-section">
      <h2 className="section-title">NEW ARRIVALS</h2>
      <div className="products-grid">
        {newArrivalsProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="view-all-container">
        <Link to="/products" className="view-all-btn">
          View All
        </Link>
      </div>

      <hr className="section-divider" />
    </section>
  );
}

export default NewArrivals;
