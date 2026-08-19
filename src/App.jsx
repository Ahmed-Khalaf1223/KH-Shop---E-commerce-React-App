import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product";
import ProductProvider from "./context/ProductContext";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Cart_shop from "./pages/Cart/Shop_cart/CartShop";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./pages/Cart/checkout/Checkout";
import Payment from "./pages/Cart/checkout/Payment";

function App() {
  return (
    <ProductProvider>
      <ScrollToTop />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart_shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
