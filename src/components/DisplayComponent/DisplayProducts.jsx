import React, { Fragment } from "react";
import img_1 from "../../assets/DisplaysAssests/displayImg-1.webp"
import img_2 from "../../assets/DisplaysAssests/displayImg-2.webp"
import img_3 from "../../assets/DisplaysAssests/displayImg-3.webp"
import img_4 from "../../assets/DisplaysAssests/displayImg-4.webp"
import img_5 from "../../assets/DisplaysAssests/displayImg-5.webp"
import '../../styles/Displays.css'




const DisplayProducts= () => {
  const products = [
    {
      image: img_1,
      title: "Leg tv 75 Inch Interactive Flat Panel",
      description:
        "Lg tv 75 Inch Interactive Flat Panel | Android 14 Smart Digital Board | 8 GB RAM 256 GB ROM | Multitouch Screen Display for Teaching, School, College, Institute, Classroom and Office Use",
    },
    {
      image: img_2,
      title: "Standee 43 inch Half Glass",
      description:
        "Standee 43 inch Half Glass Advertisement Display HD Screen Led Kiosk Floor Stand for Restaurants Exhibition Corporate Office Shopping Mall Events (LB431-IUH)",
    },
    {
      image: img_3,
      title: "  Kisoo Standeee 43 Inch",
      description:
        " Kisoo Standee  43 Inch (1 Year Warranty) for Advertising Half Glass Full HD Resolution Screens Led Display for Restaurants, Shopping Mall, Airport",
    },
    {
      image: img_4,
      title: "HD Interactive Panel 16:9 Floor Standing and Wall Mount Digital Signage Displays",
      description:
        "HD Interactive Panel 16:9 Floor Standing and Wall Mount Digital Signage Displays for Wide Applications, Built-In CMS, Crisp Video Quality, Long Life",
    },
    {
      image:img_5,
      title: " Alluminium Rollup Standee 3 * 6 feet",
      description:
        "Shivis™ alluminium Rollup Standee 3 * 6 feet for Advertising and Trade Show,Exhibition",
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

export default DisplayProducts;