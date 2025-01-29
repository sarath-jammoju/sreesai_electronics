
import React, { useState } from "react";
import '../contactus/contactus.css'
import contact_img from '../../assets/contactus_image.jpg'
 
const ContactForm = () => {
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
    <div className="contact-container m">
      <div className="contact-image-container">
        <img
          src={contact_img}
          alt="Sree Sai Electronics"
        />
      </div>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
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
 
export default ContactForm;