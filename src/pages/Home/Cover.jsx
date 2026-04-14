import React from "react";
import ModelsImage from "../../assets/image/Models-img.png";
import starVector from "../../assets/image/star.png";
import "./home.css";
import Prand from "./prand";
function Cover() {
  return (
    <>
      <div className="hero_wrapper">
        <div className="container">
          <div className="hero_container">
            <div className="hero_content">
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="btn-shop-now">Shop Now</button>

              <div className="hero_stats">
                <div className="stat-item">
                  <h3>200+</h3>
                  <span>International Brands</span>
                </div>
                <div className="line"></div>
                <div className="stat-item">
                  <h3>2,000+</h3>
                  <span>High-Quality Products</span>
                </div>
                <div className="line"></div>
                <div className="stat-item">
                  <h3>30,000+</h3>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="hero-image-container">
              <img src={ModelsImage} alt="Models" className="main-hero-img" />
              <img src={starVector} alt="star" className="star-large" />
              <img src={starVector} alt="star" className="star-small" />
            </div>
          </div>
        </div>
        <section id="brands">
          <Prand />
        </section>
      </div>
    </>
  );
}
export default Cover;
