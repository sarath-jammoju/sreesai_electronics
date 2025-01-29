// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { v4 as uuidv4 } from 'uuid';

// import acer_logo from '../assets/acer_logo.jpg';
// import brother_logo from '../assets/brother_logo.png';
// import canon_logo from '../assets/canon_logo.png';
// import cp_logo from '../assets/cp_logo.jpg';
// import dell from '../assets/dell.png';
// import epson_logo from '../assets/epson_logo.jpg';
// import hikvision_logo from '../assets/hikvision_logo.png';
// import hp_logo from '../assets/hp_logo.png';
// import lenovo_logo from '../assets/lenovo_logo.png';
// import lg_logo from '../assets/lg_logo.png';


// const ServiceCarousel = ({ categoryname }) => {
//   // Define logos for each category
//   const categoryLogos = {
//     security: [
//       hikvision_logo, epson_logo
//     ],
//     communication: [
//       acer_logo, dell, hp_logo, lenovo_logo
//     ],
//     displays: [
//       canon_logo, lg_logo
//     ],
//     solution: [
//       brother_logo, cp_logo, canon_logo
//     ],
//     computers: [
//       dell, acer_logo, lenovo_logo, hp_logo
//     ]
//   };

//   // Determine the logos to display based on category
//   const partnerLogos = categoryLogos[categoryname] || [];

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   return (
//     <div className="slider-container overflow-hidden mt-11">
//       <h2 className="section__header ">Our Brands</h2>
//       <Slider {...settings}>
//         {partnerLogos.map((logo, index) => (
//           <div key={uuidv4()} className="flex justify-center items-center p-2">
//             <img
//               className="carousel-logo w-32 h-32 object-contain" // Adjust width & height as needed
//               src={logo}
//               alt={`logo-${index}`}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ServiceCarousel;





import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';

import acer_logo from '../assets/acer_logo.jpg';
import brother_logo from '../assets/brother_logo.png';
import canon_logo from '../assets/canon_logo.png';
import cp_logo from '../assets/cp_logo.jpg';
import dell from '../assets/dell.png';
import epson_logo from '../assets/epson_logo.jpg';
import hikvision_logo from '../assets/hikvision_logo.png';
import hp_logo from '../assets/hp_logo.png';
import lenovo_logo from '../assets/lenovo_logo.png';
import lg_logo from '../assets/lg_logo.png';

const ServiceCarousel = ({ categoryname }) => {
  // Define logos for each category
  const categoryLogos = {
    security: [
      hikvision_logo, cp_logo
    ],
    communication: [
      acer_logo, dell, hp_logo, lenovo_logo
    ],
    displays: [
      canon_logo, lg_logo
    ],
    solution: [
      brother_logo, cp_logo, canon_logo
    ],
    computers: [
      dell, acer_logo, lenovo_logo, hp_logo
    ]
  };

  // Determine the logos to display based on category
  const partnerLogos = categoryLogos[categoryname] || [];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-header">Our Brands</h2>
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <div key={uuidv4()} className="carousel-item">
            <img
              className="carousel-logo"
              src={logo}
              alt={`logo-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
