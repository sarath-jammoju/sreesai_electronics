import React, { Fragment } from "react";
import dummy_hero from '../../assets/coumputerAssets/heroSection_Images/dummy_hero_original.webp'
import Carousel from '../../components/computerComponents/Carousel';
import Products from '../../components/computerComponents/Products';
import Dialougebox from '../../components/computerComponents/Dialougebox';
import '../../styles/Computers.css'
// import WhyChooseUs from "../components/WhyChooseUs";
// import Clients from "../components/Clients";
// import ReviewsData from "../components/ReviewsData";
// import GoogleMapEmbed from "../components/GoogleMapEmbed";


const Computers = () => {
  return (
    <Fragment>
    
        <img src = {dummy_hero} alt='Computers Hero Section' className="HeroSection-img" />

      <Carousel />
      <Products />
      <Dialougebox />
      {/* <WhyChooseUs /> */}
      {/* <Clients /> */}
      {/* <ReviewsData /> */}
      {/* <GoogleMapEmbed /> */}
    </Fragment>
  );
};

export default Computers;
