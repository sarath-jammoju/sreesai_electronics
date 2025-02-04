import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import asus_logo from "../../assets/home/logos/asus_logo.webp";
import brother_logo from "../../assets/home/logos/brother_logo.webp";
import canon_logo from "../../assets/home/logos/canon_logo.webp";
import cp_logo from "../../assets/home/logos/cp_logo.webp";
import dell from "../../assets/home/logos/dell_logo.webp";
import epson_logo from "../../assets/home/logos/epson_logo.webp";
import hikvision_logo from "../../assets/home/logos/hikvision_logo.webp";
import hp_logo from "../../assets/home/logos/hp_logo.webp";
import lenovo_logo from "../../assets/home/logos/lenovo_logo.webp";
import lg_logo from "../../assets/home/logos/lg_logo.webp";
import Honeywell_Logo from "../../assets/home/logos/Honeywell-Logo.webp";
import dahua_logo from "../../assets/home/logos/dahua_logo.webp";
import acer_logo from "../../assets/home/logos/acer_logo.webp";
import zebronics_logo from "../../assets/home/logos/zebronics_logo.webp";
import samsung_logo from "../../assets/home/logos/samsung_logo.webp";

const partnerLogos = [
  asus_logo,
  brother_logo,
  canon_logo,
  cp_logo,
  dell,
  epson_logo,
  hikvision_logo,
  hp_logo,
  lenovo_logo,
  lg_logo,
  Honeywell_Logo,
  dahua_logo,
  acer_logo,
  samsung_logo,
  zebronics_logo,
];

const Carousel = () => {
   const [slidesToShow, setSlidesToShow] = useState(5);
  const updateSlidesToShow = () => {
    if (window.innerWidth >= 374) {
      setSlidesToShow(1); // Show 2 slides for smaller screens
    }
    if (window.innerWidth <= 600) {
      setSlidesToShow(2); // Show 2 slides for smaller screens
    } else if (window.innerWidth <= 768) {
      setSlidesToShow(3); // Show 3 slides for tablets
    } else if (window.innerWidth <= 1024) {
      setSlidesToShow(4); // Show 4 slides for larger tablets
    } else {
      setSlidesToShow(5); // Show 5 slides for larger screens
    }
  };

  // Use effect hook to update slidesToShow on window resize
  useEffect(() => {
    updateSlidesToShow(); // Set the initial slidesToShow based on screen size

    // Add event listener for window resize to update slidesToShow
    window.addEventListener("resize", updateSlidesToShow);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <h2 className="section-header">Brands We Deal With</h2>
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <div key={uuidv4()} className="carousel-item">
            <img className="carousel-logo" src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
