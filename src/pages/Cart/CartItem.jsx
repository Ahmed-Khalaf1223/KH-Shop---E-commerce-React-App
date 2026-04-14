import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from "react-icons/hi2";

function CartItem({ item }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ProductContext);
  return (
    <div className="cart-item">
      <div className="item-details">
        <div className="image_cart">
          <img src={item.thumbnail} alt={item.title} className="item-img" />
        </div>
        <div className="info">
          <h3>{item.title}</h3>
          <div className="product-price">
            <span className="current-price">${item.price}</span>
            <span className="old-price">
              ${(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}
            </span>
            <span className="discount-badge"> -{item.discountPercentage}%</span>
          </div>
        </div>
      </div>

      <div className="item_actions">
        <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
          <RiDeleteBin6Fill />
        </button>
        <div className="quantity-control">
          <button onClick={() => decreaseQuantity(item.id)}>
            <HiOutlineMinusSmall />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>
            <HiOutlinePlusSmall />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
