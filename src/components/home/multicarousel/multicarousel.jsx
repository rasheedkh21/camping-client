import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slidecar from "../../../assets/slidecar.png"

const MultiCarousel = () => {
  const carouselItems = [
    {
        src: `${slidecar}`,
      alt: 'Image 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src: `${slidecar}`,
      alt: 'Image 2',
      description: 'Nulla venenatis ipsum non laoreet tristique.',
    },
    {
        src: `${slidecar}`,
      alt: 'Image 3',
      description: 'Suspendisse tristique nunc eget efficitur luctus.',
    },
    {
        src: `${slidecar}`,
      alt: 'Image 3',
      description: 'Suspendisse tristique nunc eget efficitur luctus.',
    },
    {
        src: `${slidecar}`,
      alt: 'Image 3',
      description: 'Suspendisse tristique nunc eget efficitur luctus.',
    },
    {
        src: `${slidecar}`,
      alt: 'Image 3',
      description: 'Suspendisse tristique nunc eget efficitur luctus.',
    },
    {
        src: `${slidecar}`,
      alt: 'Image 3',
      description: 'Suspendisse tristique nunc eget efficitur luctus.',
    },
    {
        src: `${slidecar}`,
      alt: 'Image 3',
      description: 'Suspendisse tristique nunc eget efficitur luctus.',
    },
    {
        src: `${slidecar}`,
      alt: 'Image 3',
      description: 'Suspendisse tristique nunc eget efficitur luctus.',
    },
    {
        src: `${slidecar}`,
      alt: 'Image 3',
      description: 'Suspendisse tristique nunc eget efficitur luctus.',
    },
    // Add more images as needed
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 4,
    },
    phone: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} infinite>
      {carouselItems.map((item, index) => (
        <div key={index}>
          <img src={item.src} alt={item.alt} />
          <p>{item.description}</p>
          <button>Click Me</button>
        </div>
      ))}
    </Carousel>
  );
};

export default MultiCarousel;