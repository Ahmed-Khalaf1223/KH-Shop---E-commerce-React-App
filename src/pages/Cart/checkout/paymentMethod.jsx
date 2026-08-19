import React from "react";

function PaymentMethod({ setPaymentMethod, paymentMethod }) {
  return (
    <div className="payment_method">
      <p>3- payment method</p>
      <div className="payment_options">
        <div>
          <label>
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Pay with Card
          </label>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
