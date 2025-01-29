import { useState } from "react";
import { Link } from "react-router-dom";

const ProductsCards = ({ products }) => {
  const trimDescription = (description, wordLimit) => {
    const words = description.split(" ");
    return (
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : "")
    );
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !message) {
      setError("All fields are required!");
      return;
    }

    // Simulating form submission
    console.log("Form submitted:", { email, message });

    // Reset form after submission
    setEmail("");
    setMessage("");
    setError("");
  };

  return (
    <>
      <h2 className="product-heading">Our Products</h2>
      <div className="product-cards-grid">
        {products.map((product, index) => (
          <div className="product-card" key={product._id || index}>
            <div className="product-card-container">
              {/* Container for image and content */}
              <div className="product-card-content">
                {/* Image box */}
                <div className="product-image-container">
                  <Link to={`/shop/${product.id}`}>
                    <img
                      src={product.image}
                      alt="product-img"
                      className="product-image"
                    />
                  </Link>
                </div>

                {/* Content box */}
                <div className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-description">
                    {trimDescription(product.description, 10)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="services">One stop sollution for all your needs</h3>
      </div>
      
    
<div className="dialog-box-container">
      <h2 className="dialog-box-header">
        Have questions or need assistance with our electronic products?
      </h2>
      <h2 className="dialog-box-description">
        Feel free to contact us! Our team is ready to assist you with any inquiries.
      </h2>
      <form onSubmit={handleFormSubmit} className="dialog-form">
        <div className="dialog-form-left">
          <div className="dialog-form-group">
            <label htmlFor="email" className="dialog-form-label">
              Enter your email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="dialog-form-input"
              required
            />
          </div>
        </div>

        <div className="dialog-form-right">
          <div className="contact-details">
            <h3>Contact Details</h3>
            <h4>Email: contact@yourelectronics.com</h4>
            <h4>Phone: +123 456 7890</h4>
            <h4>Address: 123 Electronics St, Tech City</h4>
          </div>
        </div>

        

        {error && <p className="dialog-error-message">{error}</p>}
        <button type="submit" className="dialog-submit-button">
          Submit
        </button>
      </form>
    </div>


      );
    </>
  );
};

export default ProductsCards;
