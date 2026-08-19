import React from "react";
import mastercard from "../../../assets/image/mastercard.3f58fc84.svg";
// import mastercard from "../../assets/image/mastercard.3f58fc84.svg";
import visa from "../../../assets/image/visa.03cb6e6d.svg";
import paypal from "../../../assets/image/paypal.656cb31f.svg";
import applePay from "../../../assets/image/applePay.cd5a6b98.svg";
import googlePay from "../../../assets/image/googlePay.61e7048b.svg";

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <p className="copyright">KH-shop © 1993 - 2026, All Rights Reserved</p>
      <div className="developed-by">
        <p>
          Developed by <a href="#">Ahmed khalaf</a>
        </p>
      </div>
      <div className="payment-methods">
        <span className="payment-icon">
          <img src={visa} alt="Visa" />
        </span>
        <span className="payment-icon">
          <img src={mastercard} alt="Mastercard" />
        </span>
        <span className="payment-icon">
          <img src={paypal} alt="PayPal" />
        </span>
        <span className="payment-icon">
          <img src={applePay} alt="Apple Pay" />
        </span>
        <span className="payment-icon">
          <img src={googlePay} alt="Google Pay" />
        </span>
      </div>
    </div>
  );
}

export default FooterBottom;
