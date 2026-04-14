import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product";
import ProductProvider from "./context/ProductContext";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Cart_shop from "./pages/Cart/CartShop";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          </Route>
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
