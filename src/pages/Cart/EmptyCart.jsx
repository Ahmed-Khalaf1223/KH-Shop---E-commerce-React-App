import React from "react";
import { useNavigate } from "react-router";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="empty-cart-box">
      <h2 className="empty-text">Your Cart Is Empty!</h2>
      <button className="shop-btn" onClick={() => navigate("/products")}>
        Shopping Now
      </button>
    </div>
  );
}

export default EmptyCart;
