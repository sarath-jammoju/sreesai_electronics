import React, { Fragment } from "react";
import img_1 from "../../assets/securityAssests/securityImg-1.webp"
import img_2 from "../../assets/securityAssests/securityImg-2.webp"
import img_3 from "../../assets/securityAssests/securityImg-3.webp"
import img_4 from "../../assets/securityAssests/securityImg-4.webp"
import img_5 from "../../assets/securityAssests/securityImg-5.webp"
import '../../styles/Security.css'


const SecurityProducts = () => {
  const products = [
    {
      image: img_1,
      title: "CP PLUS Weatherproof Outdoor Wired Bullet Security Camera",
      description:
        "CP PLUS Weatherproof Outdoor Wired Bullet Security Camera | 2.4 MP| 3.6 MM Lens for Wide Angle | 1080P Full HD Recording | Digital Wide Dynamic Range (D-WDR) | CP-URC-TC24PL2-V3 (White)",
    },
    {
      image: img_2,
      title: "HIKVISION Analog Video Intercom System with",
      description:
        "HIKVISION Analog Video Intercom System with 7Tft 8 Pin LCD Screen Wired Video Door Phone/Bell| 1080P Resolution|Builtin Mic&Loudspeaker|Noise Echo...",
    },
    {
      image: img_3,
      title: " Stainless Steel H6 Smart Door Lock",
      description:
        "Stainless Steel H6 Smart Door Lock and Office 6-Way Unlocking Features Fingerprint Passcode Key Card Access Bluetooth Mechanical Otp 2 Year Warranty (Black, Free Installation)",
    },
    {
      image: img_4,
      title: "Team Office Z305W Biometric Attendance Device",
      description:
        "Team Office Z305W Biometric Attendance Device with Cloud and Wi-Fi Suuported",
    },
    {
      image:img_5,
      title: "Hikvision DS-KIS204T (Villa Analog Kit)",
      description:
        "Hikvision DS-KIS204T (Villa Analog Kit) - Video Door Phone with USEWELL RJ45",
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

export default SecurityProducts;