import React from "react";
import { Fragment } from "react";
import Carousel from "../../components/CommunicationComponent/Carosuel";
import CommunicationProducts from "../../components/CommunicationComponent/CommunicationProduct";
import CommunicationDialogBox from "../../components/CommunicationComponent/CommunityDialogBox";
import communicationImg from "../../assets/CommunicationAssests/communittySystem.webp";
const Communication = () => {
  return (
    <Fragment>
      <img src={communicationImg} alt="Communication Hero Section"  className="HeroSection-img"/>

      <Carousel />
      <CommunicationProducts />
      <CommunicationDialogBox />
    </Fragment>
  );
};

export default Communication;
