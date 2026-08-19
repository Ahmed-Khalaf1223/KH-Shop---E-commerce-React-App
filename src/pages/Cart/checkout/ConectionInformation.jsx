import React from "react";

function ConectionInformation({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="checkout_form">
      <p>1- Connection Information</p>
      <div className="name_fields">
        <div className="first_name">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div className="last_name">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="contact_fields">
        <div className="phone">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ConectionInformation;
