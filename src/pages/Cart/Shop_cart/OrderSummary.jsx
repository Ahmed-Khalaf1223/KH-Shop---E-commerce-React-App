import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductContext } from "../../../context/ProductContext";

function OrderSummary() {
  const navigate = useNavigate();
  const { cartItems } = useContext(ProductContext);

  const subtotal = cartItems.reduce((acc, item) => {
    const oldPrice = item.price / (1 - (item.discountPercentage || 0) / 100);

    return acc + oldPrice * item.quantity;
  }, 0);

  const discount = cartItems.reduce((acc, item) => {
    const oldPrice = item.price / (1 - (item.discountPercentage || 0) / 100);

    const discountValue = oldPrice - item.price;

    return acc + discountValue * item.quantity;
  }, 0);

  const deliveryFee = cartItems.length > 0 ? 15 : 0;

  const total =
    cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0) + deliveryFee;

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="order-summary">
      <div className="total_item">
        <h3>Order Summery</h3>
        <span>{totalItems} Items</span>
      </div>
      <div className="summary-row">
        <span>Subtotal</span>
        <span className="bold">${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Discount</span>
        <span className="red">-${discount.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Delivery Fee</span>
        <span className="bold">$15</span>
      </div>
      <hr />
      <div className="summary-row total">
        <div className="total">
          <span>Total : </span>
          <span className="total-price ">${total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
