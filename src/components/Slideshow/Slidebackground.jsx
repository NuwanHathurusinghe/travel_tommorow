import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500, // adjust the speed as needed
    autoplay: true,
    autoplaySpeed: 3000, // adjust the duration for each slide
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300',
    // Add more image URLs as needed
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={{ backgroundImage: `url(${image})`, height: '100vh', backgroundSize: 'cover' }}>
          {/* You can customize the content inside each slide if needed */}
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;