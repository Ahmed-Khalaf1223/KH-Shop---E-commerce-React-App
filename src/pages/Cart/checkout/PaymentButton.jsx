import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function PaymentButton({ total }) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    // 🧪 validation
    if (total <= 0) {
      alert("Cart is empty ❌");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(total * 100),
        }),
      });

      const data = await res.json();

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        alert("Payment Successful ✅");
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed ❌");
    }

    setLoading(false);
  };

  return (
    <button
      className="confirm"
      onClick={handlePayment}
      disabled={!stripe || loading}
    >
      {loading ? "Processing..." : "Confirm Payment"}
    </button>
  );
}

export default PaymentButton;
