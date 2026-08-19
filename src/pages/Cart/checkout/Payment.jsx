import React, { useContext, useState } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51TMwtY4cSkYuu4ZEGrEJzXQH0hwQn5ODOKdioc9U6XJuMAlJlafiOxbzoyQwAxtW4A3l39OhEiuSkzwUWHzyYkkS00dSwTTA9c",
); // 🔥 publishable key

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems } = useContext(ProductContext);

  const [loading, setLoading] = useState(false);

  const deliveryFee = cartItems.length > 0 ? 15 : 0;

  const total =
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) +
    deliveryFee;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("TOTAL:", total); // 🔥 Debug

    if (total <= 0) {
      alert("Cart is empty ❌");
      return;
    }

    setLoading(true);

    try {
      // 🔥 1. create payment intent
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
      console.log("SERVER RESPONSE:", data);

      if (!data.clientSecret) {
        throw new Error("No clientSecret returned from server ❌");
      }

      // 🔥 2. confirm card payment
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          alert("Payment Successful ✅");
        }
      }
    } catch (error) {
      console.error("FRONT ERROR:", error);
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe || loading}>
        {loading ? "Processing..." : "Confirm Payment"}
      </button>
    </form>
  );
}

function Payment() {
  return (
    <div className="container payment">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
