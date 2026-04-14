import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function FooterContent() {
  return (
    <div className="footer-content">
      <div className="footer-brand">
        <h1 className="logo">KH-SHOP</h1>
        <p>
          We have clothes that suits your style and which you're proud to wear.
          From women to men.
        </p>
        <div className="social-icons">
          <FaTwitter /> <FaFacebook /> <FaInstagram /> <FaGithub />
        </div>
      </div>

      <div className="footer-links">
        <div className="link-col">
          <h4>company</h4>
          <ul>
            <li>about</li>
            <li>features</li>
            <li>works</li>
            <li>career</li>
          </ul>
        </div>
        <div className="link-col">
          <h4>help</h4>
          <ul>
            <li>customer support</li>
            <li>delivery dtails</li>
            <li>terms & conditions</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="link-col">
          <h4>faq</h4>
          <ul>
            <li>account</li>
            <li>manage deliveries</li>
            <li>orders</li>
            <li>payments</li>
          </ul>
        </div>
        <div className="link-col">
          <h4>resources</h4>
          <ul>
            <li>free eBooks</li>
            <li>development tutorial</li>
            <li>how to - blog</li>
            <li>youtube playlist</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
