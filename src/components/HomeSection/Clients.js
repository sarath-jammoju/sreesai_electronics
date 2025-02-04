import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
  const clients = [
    'CRDA', 'APGENCO', 'AP TRANCO', 'TTD', 'APIIC', 
    'POLICE CONTROL ROOM', 'RTPP', 'GMR AIRPORT/HIGH WAYS', 
    'NIFT', 'TS GENCO', 'AMAZON', 'SAMSUNG', 'BENQ', 
    'AXIS BANK', 'HDFC BANK', 'POLICE STATIONS', 'Golden Jubilee HOTEL', 
    'Mytra Energy', 'RAMOJI FILM CITY', 'ISB'
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 7000,
    cssEase: "linear",
  };

  return (
    <div className="clients-container">
      <h1 className="clients-header">OUR CLIENTS</h1>
      
      {/* Carousel for client names */}
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div className="client-item" key={index}>
            <p>{client}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
