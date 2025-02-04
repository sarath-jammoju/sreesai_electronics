import React from 'react';
import "../styles/Home.css"
import Hero_Banner from "../assets/home/HeroSection_img.webp"
import Carousel from '../components/HomeSection/Carousel.js';
import Products from '../components/HomeSection/Products.js';
import WhyChooseUs from '../components/HomeSection/WhyChooseUs.js';
import Clients from '../components/HomeSection/Clients.js';
import ReviewsData from '../components/HomeSection/ReviewsData.js';



const Home = () => {
  return (
    <>
      <img className="hero-banner" src={Hero_Banner} alt="hero-section" />
      <Carousel />
      <Products />
      <WhyChooseUs />
      <Clients />
      <ReviewsData />
    </>
  );
};

export default Home;