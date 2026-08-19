import React from "react";
import casualImg from "../../assets/image/image-11.svg";
import formalImg from "../../assets/image/image-13.svg";
import partyImg from "../../assets/image/image-12.svg";
import gymImg from "../../assets/image/image-14.svg";
function DressStyle() {
  return (
    <section className="container dress-style-container">
      <div className="style-card-wrapper">
        <h2 className="section-title">BROWSE BY DRESS STYLE</h2>

        <div className="style-grid">
          {/* Card 1: Casual */}
          <div className="style-item casual">
            <span className="style-label">Casual</span>
            <img src={casualImg} alt="Casual Style" />
          </div>

          {/* Card 2: Formal */}
          <div className="style-item formal">
            <span className="style-label">Formal</span>
            <img src={formalImg} alt="Formal Style" />
          </div>

          {/* Card 3: Party */}
          <div className="style-item party">
            <span className="style-label">Party</span>
            <img src={partyImg} alt="Party Style" />
          </div>

          {/* Card 4: Gym */}
          <div className="style-item gym">
            <span className="style-label">Gym</span>
            <img src={gymImg} alt="Gym Style" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DressStyle;
