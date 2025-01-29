import Banner from "../components/Banner";
import Carousel from "../components/Carosuel";
import Categories from "../components/Categories";
import GoogleMapEmbed from "../components/GoogleMapEmbed";
import Reviews from "../components/reviews/Reviews";
import Clients from "../components/clients";
import WhyChooseUs from "../components/why choose us/WhyChooseUs";


const Home = () => {
  return (
    <>
      <div className="">
        <Banner />
        <Carousel/>
        <Categories />
        <WhyChooseUs/>
        <Clients />
        <Reviews/>
        <GoogleMapEmbed/>
      </div>
    </>
  );
};

export default Home;
