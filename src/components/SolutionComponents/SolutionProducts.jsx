import React, { Fragment } from "react";
import img_1 from "../../assets/solutionAssets/solutionImg-1.webp"
import img_2 from "../../assets/solutionAssets/solutionImg-2.webp"
import img_3 from "../../assets/solutionAssets/solutionImg-3.webp"
import img_4 from "../../assets/solutionAssets/solutionImg-4.webp"
import img_5 from "../../assets/solutionAssets/solutionImg-5.webp"
import "../../styles/Solutions.css"




const SolutionProducts= () => {
  const products = [
    {
      image: img_1,
      title: "Home Automation System",
      description:
        "Home Automation System,(wireless),50 Hz Single Phase Wifi Touch Switch, 2M, 5",
    },
    {
      image: img_2,
      title: " Meet-2 AI-Powered 4K Webcam with 1/2' Sensor, AI Framing",
      description:
        " Meet 2 AI-Powered 4K Webcam with 1/2' Sensor, AI Framing & Autofocus,Webcam with Microphone.",
    },
    {
      image: img_3,
      title: " BTA 550 Wireless Bluetooth",
      description:
        "BTA 550 Wireless Bluetooth Portable 30 Watt PA Speaker)",
    },
    {
      image: img_4,
      title: "Canon Virtual Reality",
      description:
        "Dual-lens system for 3D VR video recording. resolution support for ultra-clear VR experiences.Compact design for easier VR content productio",
    },
    {
      image:img_5,
      title: " Digital Signage",
      description:
        "Digital Advertising Standee 32, high-resolution screen (USB/HDMI ports)",
    },
   
  
  ];

  return (
    <Fragment>
      <h2 className="product-heading">Our Products</h2>
      <div className="product-cards-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>{product.description.slice(0,120)}</h4>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SolutionProducts;