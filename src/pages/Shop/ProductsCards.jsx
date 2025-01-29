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
  const [error, setError] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert(`Form submitted with email: ${email}`); // Placeholder for form submission logic
    }
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

      <div className="dialog-box-container">
        <h2 className="dialog-box-header">
          Get in Touch with Sree Sai Electronics
        </h2>
        <p className="dialog-box-description">
          Have questions or need assistance with our electronic products? Feel
          free to contact us! Our team is ready to assist you with any
          inquiries.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="dialog-form-group">
            <label htmlFor="email" className="dialog-form-label">
              Enter your email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              className="dialog-form-input"
              required
            />
            {error && <p className="dialog-error-message">{error}</p>}
          </div>
          <button type="submit" className="dialog-submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductsCards;
