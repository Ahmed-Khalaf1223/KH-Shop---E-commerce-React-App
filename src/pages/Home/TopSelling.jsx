import React, { useContext } from "react";

import ProductCard from "../../components/Products/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";

function TopSelling() {
  const { topSellingProducts, loading } = useContext(ProductContext);

  if (loading) {
    return <div className="container">Loading Top Selling Products...</div>;
  }

  return (
    <section className="container product-section top-selling-section">
      <h2 className="section-title">top selling</h2>
      <div className="products-grid">
        {topSellingProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="view-all-container">
        <Link to="/products" className="view-all-btn">
          View All
        </Link>
      </div>
    </section>
  );
}

export default TopSelling;
