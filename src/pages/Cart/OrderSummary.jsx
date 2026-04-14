import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

function OrderSummary() {
  const { cartItems } = useContext(ProductContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const discount = cartItems.reduce(
    (acc, item) =>
      acc + ((item.price * item.discountPercentage) / 100) * item.quantity,
    0,
  );

  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

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
        <span>Total</span>
        <span className="total-price bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default OrderSummary;
