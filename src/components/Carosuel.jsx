import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';

import asus_logo from '../assets/asus_logo.png';
import brother_logo from '../assets/brother_logo.png';
import canon_logo from '../assets/canon_logo.png';
import cp_logo from '../assets/cp_logo.jpg';
import dell from '../assets/dell.png';
import epson_logo from '../assets/epson_logo.jpg';
import hikvision_logo from '../assets/hikvision_logo.png';
import hp_logo from '../assets/hp_logo.png';
import lenovo_logo from '../assets/lenovo_logo.png';
import lg_logo from '../assets/lg_logo.png';


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const partnerLogos = [
    asus_logo, brother_logo, canon_logo, cp_logo, dell,
    epson_logo, hikvision_logo, hp_logo, lenovo_logo, lg_logo
  ];

  return (
    <div className="slider-container">
      <h2 className="section-header">Our Affiliate Dealers</h2>
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

export default Carousel;
