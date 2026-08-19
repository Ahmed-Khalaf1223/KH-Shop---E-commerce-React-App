import React from "react";
import { FaStar, FaRegStar, FaCheckCircle } from "react-icons/fa";

function CustomerCard({ rating, name, feedback }) {
  return (
    <div className="customer-card">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: "#FFC633", fontSize: "18px" }}>
            {i < rating ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </div>
      <div className="customer-name">
        <h3>{name}</h3>
        <FaCheckCircle className="verified-icon" />
      </div>
      <p className="feedback-text">"{feedback}"</p>
    </div>
  );
}

export default CustomerCard;
