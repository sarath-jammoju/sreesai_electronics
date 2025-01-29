import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReviewsData from './ReviewsData';
import Slider from 'react-slick';

// Import slick-carousel CSS files (leave this as is)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="reviews-slider-container">
      <h1 className="reviews-header">Our Trusted Clients Testimonials</h1>
      <Slider {...settings}>
        {ReviewsData.map((review) => (
          <div key={uuidv4()} className="review-item">
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
