import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./MultiCarouselstyle.css";
import offercar from "../../../assets/offercar1.png"
import offercar1 from "../../../assets/offercar2.png"
import offercar2 from "../../../assets/offercar3.png"
import offercar3 from "../../../assets/offercar4.png"

import Slider from 'react-slick';

const MultiCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 834,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 414,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



  return (
    <div className='multicarousel'>
        <Slider {...settings}>
            <div className="box">
                <img src={offercar}/>
                <h1>Cranus</h1>
                <button>Discover the range</button>
                <a href="/">Choosa a model</a>
            </div>
            <div className="box">
            <img src={offercar1} />
            <h1>Aidal</h1>
                <button>Discover the range</button>
                <a href="/">Choosa a model</a>
            </div>
            <div className="box">
            <img src={offercar2}/>
            <h1>Escape</h1>
                <button>Discover the range</button>
                <a href="/">Choosa a model</a>
            </div>
            <div className="box">
            <img src={offercar3}/>
            <h1>Lyseo</h1>
                <button>Discover the range</button>
                <a href="/">Choosa a model</a>
            </div>
            <div className="box">
                <img src={offercar}/>
                <h1>Cranus</h1>
                <button>Discover the range</button>
                <p>Choose a model</p>
            </div>
        </Slider>
    </div>    
  )
}

export default MultiCarousel;