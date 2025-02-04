import React from "react";
import { FaLaptop, FaShieldAlt, FaTags, FaHandshake } from "react-icons/fa"; // Import icons from react-icons

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <h2>Why Choose Us?</h2>
      <div className="why-choose-us-content">
        <div className="why-item">
          <FaLaptop size={40} />
          <h3>Innovation and Technology</h3>
          <p>
            We stay ahead of the curve by offering the latest technologies in
            the market. Our products are sourced from top global brands,
            ensuring superior quality, performance, and durability.
          </p>
        </div>

        <div className="why-item">
          <FaShieldAlt size={40} />
          <h3>Quality Assurance</h3>
          <p>
            Quality is at the heart of everything we do. All our products
            undergo rigorous testing and meet the highest industry standards,
            ensuring you receive only the best.
          </p>
        </div>

        <div className="why-item">
          <FaTags size={40} />
          <h3>Competitive Pricing</h3>
          <p>
            We offer high-quality products at competitive prices, ensuring you
            get the best value for your investment. Our transparent pricing and
            flexible packages cater to both small-scale and large-scale needs.
          </p>
        </div>

        <div className="why-item">
          <FaHandshake size={40} />
          <h3>Strong Industry Partnerships</h3>
          <p>
            We have established partnerships with industry leaders like Digital
            Smart. These collaborations allow us to deliver high-quality,
            reliable, and innovative electronics solutions tailored to your
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
