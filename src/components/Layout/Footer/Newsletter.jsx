import React from "react";
import { TfiEmail } from "react-icons/tfi";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-card">
        <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="newsletter-inputs">
          <div className="input-group">
            <TfiEmail className="email-icon" />
            <input type="email" placeholder="Enter your email address" />
          </div>
          <button className="subscribe-btn">Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
