import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  thumbnail,
  title,
  rating,
  price,
  discountPercentage,
}) {
  const oldPrice = Math.round(price / (1 - discountPercentage / 100));
  return (
    <Link to={`/products/${id}`} className="product-card">
      <div className="product-img-wrapper">
        <img src={thumbnail} alt={title} />
      </div>
      <h3 className="product-name">{title}</h3>
      <div className="product-rating">
        <span className="stars">
          {"★".repeat(Math.round(rating))}
          {"☆".repeat(5 - Math.round(rating))}
        </span>
        <span className="rating-num">{rating}/5</span>
      </div>
      <div className="product-price">
        <span className="current-price">${price}</span>
        <span className="old-price">${oldPrice}</span>
        <span className="discount-badge">-{discountPercentage}%</span>
      </div>
    </Link>
  );
}

export default ProductCard;
