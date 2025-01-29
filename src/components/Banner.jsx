// import React from "react";
// import image1 from "../assets/banner-1.png";
// import image2 from "../assets/category-1.jpg";
// import image3 from "../assets/banner-2.jpg";

// const Banner = () => {
//   return (
//     <section className="relative w-full h-screen">
//       {/* Image Divs Container */}
//       <div className="absolute inset-0 flex justify-between items-center">
//         <div className="w-1/3 h-full overflow-hidden">
//           <img
//             src={image2}
//             alt="Image 2"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-1/3 h-full overflow-hidden">
//           <img
//             src={image1}
//             alt="Image 1"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-1/3 h-full overflow-hidden">
//           <img
//             src={image3}
//             alt="Image 3"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Centered Content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
//         <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
//         <p className="text-xl mb-6">Your journey to excellence starts here!</p>
//         <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-purple-700 transition">
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Banner;






import React from "react";
import HeroSection from '../assets/Hero_Section.png'

const Banner = () => {
  return (
    <div className="HeroSection">
        <img src = {HeroSection} alt="hero section"/>
    </div>
  );
};

export default Banner;
