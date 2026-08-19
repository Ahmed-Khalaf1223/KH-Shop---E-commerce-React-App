import React, { useState } from "react";
import { ProductContext } from "../../../context/ProductContext";
import ConectionInformation from "./ConectionInformation";
import Order from "./Order";
import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./paymentMethod";
import Payment from "./Payment";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    city: "",
    date: "",
    time: "",
  });

  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all fields");
      return;
    }

    if (paymentMethod === "card") {
      alert("Order placed with Cash on Delivery ✅");
    }
  };

  return (
    <div className="container checkout">
      <div className="conection_information">
        <h1>Checkout</h1>
        {/* 🧾 بيانات العميل */}
        <ConectionInformation formData={formData} setFormData={setFormData} />

        {/* Delivery Method */}
        <DeliveryMethod formData={formData} setFormData={setFormData} />

        {/* 💳 choose payment*/}
        <PaymentMethod
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        {paymentMethod === "card" && <Payment />}
      </div>

      {/* 🛒 order summary */}
      <div className="container_order">
        <Order />
        {/* ✅ زر التأكيد */}
        <div className="confirm_wrapper">
          {paymentMethod === "cash" ? (
            <button className="confirm" onClick={handleSubmit}>
              Confirm Order
            </button>
          ) : (
            <Payment />
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
