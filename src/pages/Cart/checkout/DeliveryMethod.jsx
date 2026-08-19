import React from "react";

function DeliveryMethod({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="delivery_method">
      <p>2- Delivery Method</p>

      <div className="delivery_fields">
        <div className="delivery_date delivery_option">
          <label htmlFor="date">Delivery date</label>
          <input
            type="date"
            name="date"
            placeholder="Delivery date"
            onChange={handleChange}
          />
        </div>
        <div className="delivery_time delivery_option">
          <label htmlFor="time">Delivery time</label>
          <input
            type="time"
            name="time"
            placeholder="Delivery time"
            onChange={handleChange}
          />
        </div>
        <div className="delivery_city delivery_option">
          <label htmlFor="city">city</label>
          <input
            type="text"
            name="city"
            placeholder="Delivery city"
            onChange={handleChange}
          />
        </div>
        <div className="delivery_address delivery_option">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Delivery address"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default DeliveryMethod;
