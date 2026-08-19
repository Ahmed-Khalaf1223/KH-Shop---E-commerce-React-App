import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { toast } from "react-toastify";
import { FaCartArrowDown, FaCheck, FaRegHeart, FaShare } from "react-icons/fa";
function ProductCard({
  id,
  thumbnail,
  title,
  rating,
  price,
  discountPercentage,
}) {
  const { addToCart, cartItems } = useContext(ProductContext);
  const oldPrice = Math.round(price / (1 - discountPercentage / 100));

  const isInCart = cartItems?.some((item) => String(item.id) === String(id));
  const handleAddToCart = () => {
    if (isInCart) {
      return;
    }
    addToCart(
      {
        id,
        title,
        price,
        thumbnail,
        stock: 999,
        discountPercentage,
      },
      1,
    );

    toast.success(
      <div className="toast_wrapper">
        <div>
          <strong>{title}</strong>
          <p>added to cart</p>
        </div>
      </div>,
    );
  };
  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${id}`} className="product-card">
        <span className="stat_cart">
          <FaCheck /> in cart
        </span>
        <div className="product-img-wrapper">
          <img src={thumbnail} alt={title} />
        </div>
        <h3 className="product-name">{title}</h3>
        <div className="product-rating">
          {" "}
          <span className="stars">
            {"★".repeat(Math.round(rating))}
            {"☆".repeat(5 - Math.round(rating))}{" "}
          </span>
          <span className="rating-num">{rating}/5</span>{" "}
        </div>{" "}
        <div className="product-price">
          <span className="current-price">${price}</span>
          <span className="old-price">${oldPrice}</span>
          <span className="discount-badge">-{discountPercentage}%</span>{" "}
        </div>
      </Link>
      <div className="icons">
        <span className="btn_addtocart" onClick={handleAddToCart}>
          <FaCartArrowDown />
        </span>
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
