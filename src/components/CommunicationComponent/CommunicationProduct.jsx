import React, { Fragment } from "react";
import img_1 from "../../assets/CommunicationAssests/communicationImg-1.webp"
import img_2 from "../../assets//CommunicationAssests/communicationImg-2.webp"
import img_3 from "../../assets/CommunicationAssests/communicationImg-3.webp"
import img_4 from "../../assets/CommunicationAssests/communicationImg-4.webp"
import img_5 from "../../assets/CommunicationAssests/communicationImg-5.webp"
import img_6 from "../../assets/CommunicationAssests/communicationImg-6.webp"
import '../../styles/Communications.css'




const CommunicationProducts= () => {
  const products = [
    {
      image: img_1,
      title: "FXIMP-722Megaphone\Speaker",
      description:
        "FXI MP-722 Megaphone Speaker For Announcing Talk Record Play, Siren, Type C Charging , Dual Battery, Foldable Handle Bluetooth Megaphone with 13 Pre Recorded Tones Indoor, Outdoor PA System  (300 W)",
    },
    {
      image: img_2,
      title: "MZ M62VP (Multimedia Digital Player)",
      description:
        "MZ M62VP (Multimedia Digital Player) Public Announcement System with Bluetooth Indoor, Outdoor PA System  (5 W)",
    },
    {
      image: img_3,
      title: " BTA 550 Wireless Bluetooth",
      description:
        "BTA 550 Wireless Bluetooth Portable 30 Watt PA Speaker)",
    },
    {
      image: img_4,
      title: "G10 Newly Launched",
      description:
        "G10 Newly Launched, Coded Landline, Ringer LED Indication, Desk and Wall Mountable, 3 Step Ringer Volume Control, Tone/Puls/Flash/Pause/Redial, TEC Certified (G10 Black)",
    },
    {
      image:img_5,
      title: " M59 Caller Id Corded Landline Phone",
      description:
        "M59 Caller Id Corded Landline Phone With 16 Digit Lcd Display & Adjustable Contrast,10 One Touch Memory Buttons,2Ways Speaker Phone,Music On Hold,Solid Build Quality,Classic Design (Black)(M59)",
    },
    {
      image:img_6,
      title: " Portable Mini Voice Amplifier",
      description:
        "Portable Mini Voice Amplifier - 10W 2200mAh Portable Rechargeable PA System Speaker for Teachers, Singing, Coaches, Training",
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

export default CommunicationProducts;