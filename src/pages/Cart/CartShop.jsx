import React, { useContext } from "react";
import "./CartShop.css";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { ProductContext } from "../../context/ProductContext";
import OrderSummary from "./OrderSummary";
import Product from "../Product";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
function CartShop({ subtotal, discount, total }) {
  const { cartItems } = useContext(ProductContext);
  return (
    <div className="container">
      <div className="cart_shop">
        <nav className="Header_products ">
          <Breadcrumbs productTitle={Product.title} />
        </nav>
        <h1 className="page-title">YOUR CART</h1>
        {cartItems.length > 0 ? (
          <div className="cart-content">
            <div className="cart-list">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <OrderSummary />
          </div>
        ) : (
          <EmptyCart subtotal={subtotal} discount={discount} total={total} />
        )}
      </div>
    </div>
  );
}

export default CartShop;
