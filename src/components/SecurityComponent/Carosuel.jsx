import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cp_logo from '../../assets/home/logos/cp_logo.webp'
import hikvision from '../../assets/home/logos/hikvision_logo.webp'
import dahva_logo from '../../assets/home/logos/dahua_logo.webp'
import honeywell_logo from '../../assets/home/logos/Honeywell-Logo.webp'



// Define logos array
const partnerLogos = [
  cp_logo,
 hikvision,
 dahva_logo,
 honeywell_logo
];


const Carousel = () => {
  // State to store the slidesToShow based on screen size
  const [slidesToShow, setSlidesToShow] = useState(5);

  // Update slidesToShow based on screen size
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
    window.addEventListener('resize', updateSlidesToShow);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow, // Use the slidesToShow state here
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className="slider-container">
      <h2 className="section-header">Explore the Best Brands in Tech</h2>
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <div key={index} className="carousel-item">
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