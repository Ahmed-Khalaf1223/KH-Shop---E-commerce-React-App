import React from "react";
import "./ProductsSkeleton.css";
function ProductsSkeleton() {
  return (
    <div className="product-card skeleton-card">
      <div className="skeleton-image"></div>

      <div className="skeleton-title"></div>

      <div className="skeleton-rating"></div>

      <div className="skeleton-price"></div>
    </div>
  );
}

export default ProductsSkeleton;
