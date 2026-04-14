import React from "react";
import versace from "../../assets/image/versace-logo-1 1.svg";
import zara from "../../assets/image/zara-logo-1 1.svg";
import gucci from "../../assets/image/gucci-logo-1 1.svg";
import prada from "../../assets/image/prada-logo-1 1.svg";
import calvin from "../../assets/image/calvin-klein-logo-1 1.svg";

function Prand() {
  return (
    <div className="brands_bar">
      <span>
        <img src={versace} alt="" />
      </span>
      <span>
        <img src={zara} alt="" />
      </span>
      <span>
        <img src={gucci} alt="" />
      </span>
      <span>
        <img src={prada} alt="" />
      </span>
      <span>
        <img src={calvin} alt="" />
      </span>
    </div>
  );
}

export default Prand;
