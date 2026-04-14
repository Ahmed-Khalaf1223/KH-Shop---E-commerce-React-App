import React from "react";
import "./ProductDetailsSkeleton.css";

function ProductDetailsSkeleton() {
  return (
    <div className="product-details container">
      <div className="details-grid">
        {/* Images Skeleton */}
        <div className="images_details">
          <div className="skeleton skeleton-main-img"></div>

          <div className="skeleton-thumbs">
            <div className="skeleton skeleton-thumb"></div>
            <div className="skeleton skeleton-thumb"></div>
            <div className="skeleton skeleton-thumb"></div>
          </div>
        </div>

        {/* Info Skeleton */}
        <div className="info">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-rating"></div>
          <div className="skeleton skeleton-price"></div>

          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line short"></div>

          <div className="skeleton skeleton-button"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;
