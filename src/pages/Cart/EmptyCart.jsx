import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductContext } from "../../context/ProductContext";

function EmptyCart() {
  const navigate = useNavigate();
  const { setSelectedCategory, setSearchQuery } = useContext(ProductContext);

  const handleGoToProducts = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    navigate("/products");
  };
  return (
    <div className="empty-cart-box">
      <h2 className="empty-text">Your Cart Is Empty!</h2>
      <button className="shop-btn" onClick={handleGoToProducts}>
        Shopping Now
      </button>
    </div>
  );
}

export default EmptyCart;
