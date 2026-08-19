import React from "react";
import FooterContent from "./FooterContent";
import FooterBottom from "./FooterBottom";
import Newsletter from "./Newsletter";

import "./footer.css";

function Footer() {
  return (
    <div className="container main-footer">
      <Newsletter />
      <FooterContent />
      <FooterBottom />
    </div>
  );
}

export default Footer;
