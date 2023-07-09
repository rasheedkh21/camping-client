import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultiCarouselstyle.css";
import offercar from "../../../assets/offercar1.png";
import offercar1 from "../../../assets/offercar2.png";
import offercar2 from "../../../assets/offercar3.png";
import offercar3 from "../../../assets/offercar4.png";

import Slider from "react-slick";
import { Link } from "react-router-dom";

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
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="multicarousel">
      <Slider {...settings}>
        <div className="box">
          <div>
            <img
              src={offercar}
              alt="car"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </div>
          <h1>Cranus</h1>
          <Link to="/aidal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button>Discover the range</button>
            </div>
          </Link>
          <a
            href="/aidal"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Choosa a model
          </a>
        </div>
        <div className="box">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={offercar1}
              alt="car"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </div>
          <h1>Aidal</h1>
          <Link to="/aidal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button>Discover the range</button>
            </div>
          </Link>
          <a
            href="/aidal"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Choosa a model
          </a>
        </div>
        <div className="box">
          <div>
            <img
              src={offercar2}
              alt="car"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </div>
          <h1>Escape</h1>
          <Link to="/aidal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button>Discover the range</button>
            </div>
          </Link>
          <a
            href="/aidal"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Choosa a model
          </a>
        </div>
        <div className="box">
          <div>
            <img
              src={offercar3}
              alt="car"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </div>
          <h1>Lyseo</h1>
          <Link to="/aidal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button>Discover the range</button>
            </div>
          </Link>
          <a
            href="/aidal"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Choosa a model
          </a>
        </div>
        <div className="box">
          <img
            src={offercar}
            alt="car"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <h1>Cranus</h1>
          <Link to="/aidal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button>Discover the range</button>
            </div>
          </Link>
          <a
            href="/aidal"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Choose a model
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default MultiCarousel;
