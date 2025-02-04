import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
// Import slick-carousel CSS files (leave this as is)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user_1 from "../../assets/home/reviews_profileImage/user_1.webp"
import user_2 from "../../assets/home/reviews_profileImage/user_2.webp"
import user_3 from "../../assets/home/reviews_profileImage/user_3.webp"
import user_4 from "../../assets/home/reviews_profileImage/user_4.webp"
import user_5 from "../../assets/home/reviews_profileImage/user_5.webp"
import user_6 from "../../assets/home/reviews_profileImage/user_6.webp"
import user_7 from "../../assets/home/reviews_profileImage/user_7.webp"


export default function ReviewsData() {
    
const ReviewsData = [
    {
      name: "Rajesh Kumar",
      location: "Hyderabad",
      rating: 5,
      reviewText: "Sree Sai Electronics offers exceptional service! Their customer support team is incredibly helpful, and the product range is vast. I bought a washing machine from them, and the installation was smooth.",
      image: user_1,
    },
    {
      name: "Priya Reddy",
      location: "Bangalore",
      rating: 4,
      reviewText: "Good experience overall. The product I purchased was of high quality, and it was delivered on time. The only issue was with the packaging. It could be improved, but the product itself is great.",
      image: user_2,
    },
    {
      name: "Manoj Sharma",
      location: "Chennai",
      rating: 5,
      reviewText: "I have been a loyal customer of Sree Sai Electronics for years. Their after-sales service is the best. My AC broke down after a year of use, but they quickly resolved the issue without any hassle.",
      image: user_3,
    },
    {
      name: "Neha Patel",
      location: "Mumbai",
      rating: 4,
      reviewText: "The prices are competitive, and they have a wide range of electronics. My laptop was delivered within a few days, but I had a minor issue with the charger. However, their team handled it very efficiently.",
      image: user_4,
    },
    {
      name: "Sandeep Verma",
      location: "Delhi",
      rating: 5,
      reviewText: "Sree Sai Electronics is the best place to buy electronics. The staff is knowledgeable, and the store atmosphere is friendly. They gave me great advice on selecting a refrigerator.",
      image: user_5,
    },
    {
      name: "Vikram Singh",
      location: "Kolkata",
      rating: 5,
      reviewText: "I recently purchased a microwave, and the experience was fantastic. The product was high-quality, and the delivery was prompt. The staff made sure I understood how to use it. Very satisfied with my purchase!",
      image: user_6,
    },
    {
      name: "Anjali Mehta",
      location: "Pune",
      rating: 4,
      reviewText: "Great store with an excellent variety of products. The delivery was quick, and I received constant updates about my order. One minor issue, the packaging was not as secure as expected.",
      image: user_7,
    }
  ];
  

    const [ReviewsSlidesToShow, setReviewsSlidesToShow] = useState(5);
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 374) {
        setReviewsSlidesToShow(1); // Show 2 slides for smaller screens
      }
      if (window.innerWidth <= 600) {
        setReviewsSlidesToShow(1); // Show 2 slides for smaller screens
      } else if (window.innerWidth <= 768) {
        setReviewsSlidesToShow(2); // Show 3 slides for tablets
      } else if (window.innerWidth <= 1024) {
        setReviewsSlidesToShow(2); // Show 4 slides for larger tablets
      } else {
        setReviewsSlidesToShow(3); // Show 5 slides for larger screens
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
      dots: true,
      infinite: true,
      slidesToShow: ReviewsSlidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 1000,
      cssEase: 'linear',
    };
  
    return (
      <div className="reviews-slider-container">
        <h1 className="reviews-header">Our Trusted Clients Testimonials</h1>
        <Slider {...settings}>
          {ReviewsData.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-card">
                <img
                  src={review.image}
                  alt={`${review.name}'s profile`}
                  className="review-image"
                />
                <h3 className="review-name">{review.name}</h3>
                <p className="review-location">
                  <strong>Location:</strong> {review.location}
                </p>
                <p className="review-rating">
                  <strong>Rating:</strong> {review.rating} / 5
                </p>
                <p className="review-text">{review.reviewText}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  


