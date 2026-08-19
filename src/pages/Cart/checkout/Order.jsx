import React, { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

function Order() {
  const { cartItems } = useContext(ProductContext);

  // ✅ نفس الحسابات
  const subtotal = cartItems.reduce((acc, item) => {
    const oldPrice = item.price / (1 - (item.discountPercentage || 0) / 100);

    return acc + oldPrice * item.quantity;
  }, 0);

  const discount = cartItems.reduce((acc, item) => {
    const oldPrice = item.price / (1 - (item.discountPercentage || 0) / 100);

    return acc + (oldPrice - item.price) * item.quantity;
  }, 0);

  const deliveryFee = cartItems.length > 0 ? 15 : 0;

  const total =
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) +
    deliveryFee;
  return (
    <div className="order_items">
      <h3>Order</h3>
      <div className="order_list">
        {cartItems.map((item) => (
          <div className="order_item" key={item.id}>
            <img className="img_order" src={item.thumbnail} alt={item.title} />
            <div className="order_info">
              <p>{item.title}</p>
              <div className="product-price">
                <span className="current-price">
                  {" "}
                  {item.quantity} × ${item.price}
                </span>
                <span className="old-price">
                  $
                  {(item.price / (1 - item.discountPercentage / 100)).toFixed(
                    2,
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <div className="total_item">
          <p>
            Subtotal: <span>${subtotal.toFixed(2)}</span>
          </p>
          <p>
            Discount: <span>-${discount.toFixed(2)}</span>
          </p>
          <p>
            Delivery: <span>${deliveryFee}</span>
          </p>
        </div>
        <h3>
          Total: <span>${total.toFixed(2)}</span>
        </h3>
      </div>
    </div>
  );
}

export default Order;
