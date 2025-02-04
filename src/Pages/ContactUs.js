import React, { useState } from "react";
import "../styles/ContactUs.css"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      {/* Left half - Personal Information */}
      <div className="contact-info-container">
        <h2>Get in touch with us!</h2>
        <p>
          <strong>Email:</strong> <br />
          info@sreesaielectronics.co.in
        </p>
        <p>
          <strong>Phone:</strong> <br />
          <span>+91 8008884167</span> <br /> 
          <span>+91 7569299875</span> 
        </p>
        <p>
          <strong>Address:</strong> <br />
          2/7, Brodipet, Near Sivalayam, Guntur - 522002
        </p>
        <p>
          <strong>Business Hours:</strong> <br />
          Mon-Fri, 9 AM - 6 PM
        </p>
      </div>

      {/* Right half - Contact Form */}
      <div className="contact-form-container">
        <h2>Get a mail from us</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Number:
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
