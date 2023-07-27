import React, { useState } from "react";
import {
  Blogscontainer,
  Homecontainer,
  Imagecontainer,
  Linediv,
  Loremcontainer,
  VideoPlayer,
  Videodiv,
} from "./style";
import Popup from "reactjs-popup";
import Example from "../pages/carouselcomp/carousel";
import image from "../../assets/car22.png";
import image1 from "../../assets/car33.png";
import image2 from "../../assets/imag3car.png";
import MultiCarousel from "../pages/multicarousel/multicarousel";
import Flip from "react-reveal/Flip";
import Bounce from 'react-reveal/Bounce';
import "./home.css"

const Home = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div style={{ width: "100vw" }}>
      <Example />
      <div style={{ display: `flex`, flexDirection: `column` }}>
        <Homecontainer>
          <h1>Recommend</h1>
          <Linediv></Linediv>
          <MultiCarousel />
          <h1>Videos</h1>
          <Linediv></Linediv>
          <Videodiv>
            <Bounce bottom>
            <VideoPlayer>
              <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
              >
                <path
                  d="M22.3333 12.9533L6.20834 3.60085C5.99081 3.48394 5.75152 3.432 5.51226 3.44975C5.273 3.46751 5.04137 3.5544 4.83845 3.70252C4.63553 3.85063 4.46777 4.05527 4.35045 4.2978C4.23312 4.54033 4.16994 4.81305 4.16667 5.09113V23.7881C4.16464 24.0735 4.22613 24.3548 4.34518 24.6046C4.46424 24.8544 4.63684 25.0644 4.8463 25.2142C5.05576 25.3641 5.295 25.4487 5.5409 25.4599C5.7868 25.4712 6.03104 25.4086 6.25001 25.2783L22.3333 15.9258C22.5716 15.7871 22.7719 15.5743 22.9118 15.3111C23.0518 15.0479 23.1259 14.7448 23.1259 14.4356C23.1259 14.1263 23.0518 13.8232 22.9118 13.56C22.7719 13.2969 22.5716 13.084 22.3333 12.9453V12.9533Z"
                  fill="white"
                />
              </svg>
              </div>
            </VideoPlayer>
            </Bounce>
            <Bounce top>
            <VideoPlayer>
              <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
              >
                <path
                  d="M22.3333 12.9533L6.20834 3.60085C5.99081 3.48394 5.75152 3.432 5.51226 3.44975C5.273 3.46751 5.04137 3.5544 4.83845 3.70252C4.63553 3.85063 4.46777 4.05527 4.35045 4.2978C4.23312 4.54033 4.16994 4.81305 4.16667 5.09113V23.7881C4.16464 24.0735 4.22613 24.3548 4.34518 24.6046C4.46424 24.8544 4.63684 25.0644 4.8463 25.2142C5.05576 25.3641 5.295 25.4487 5.5409 25.4599C5.7868 25.4712 6.03104 25.4086 6.25001 25.2783L22.3333 15.9258C22.5716 15.7871 22.7719 15.5743 22.9118 15.3111C23.0518 15.0479 23.1259 14.7448 23.1259 14.4356C23.1259 14.1263 23.0518 13.8232 22.9118 13.56C22.7719 13.2969 22.5716 13.084 22.3333 12.9453V12.9533Z"
                  fill="white"
                />
              </svg>
              </div>
            </VideoPlayer>
            </Bounce>
            <Bounce bottom>
            <VideoPlayer>
              <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
              >
                <path
                  d="M22.3333 12.9533L6.20834 3.60085C5.99081 3.48394 5.75152 3.432 5.51226 3.44975C5.273 3.46751 5.04137 3.5544 4.83845 3.70252C4.63553 3.85063 4.46777 4.05527 4.35045 4.2978C4.23312 4.54033 4.16994 4.81305 4.16667 5.09113V23.7881C4.16464 24.0735 4.22613 24.3548 4.34518 24.6046C4.46424 24.8544 4.63684 25.0644 4.8463 25.2142C5.05576 25.3641 5.295 25.4487 5.5409 25.4599C5.7868 25.4712 6.03104 25.4086 6.25001 25.2783L22.3333 15.9258C22.5716 15.7871 22.7719 15.5743 22.9118 15.3111C23.0518 15.0479 23.1259 14.7448 23.1259 14.4356C23.1259 14.1263 23.0518 13.8232 22.9118 13.56C22.7719 13.2969 22.5716 13.084 22.3333 12.9453V12.9533Z"
                  fill="white"
                />
              </svg>
              </div>
            </VideoPlayer>
            </Bounce>
            <Bounce top>
            <VideoPlayer>
              <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
              >
                <path
                  d="M22.3333 12.9533L6.20834 3.60085C5.99081 3.48394 5.75152 3.432 5.51226 3.44975C5.273 3.46751 5.04137 3.5544 4.83845 3.70252C4.63553 3.85063 4.46777 4.05527 4.35045 4.2978C4.23312 4.54033 4.16994 4.81305 4.16667 5.09113V23.7881C4.16464 24.0735 4.22613 24.3548 4.34518 24.6046C4.46424 24.8544 4.63684 25.0644 4.8463 25.2142C5.05576 25.3641 5.295 25.4487 5.5409 25.4599C5.7868 25.4712 6.03104 25.4086 6.25001 25.2783L22.3333 15.9258C22.5716 15.7871 22.7719 15.5743 22.9118 15.3111C23.0518 15.0479 23.1259 14.7448 23.1259 14.4356C23.1259 14.1263 23.0518 13.8232 22.9118 13.56C22.7719 13.2969 22.5716 13.084 22.3333 12.9453V12.9533Z"
                  fill="white"
                />
              </svg>
              </div>
            </VideoPlayer>
            </Bounce>
            <Bounce bottom>
            <VideoPlayer>
              <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
              >
                <path
                  d="M22.3333 12.9533L6.20834 3.60085C5.99081 3.48394 5.75152 3.432 5.51226 3.44975C5.273 3.46751 5.04137 3.5544 4.83845 3.70252C4.63553 3.85063 4.46777 4.05527 4.35045 4.2978C4.23312 4.54033 4.16994 4.81305 4.16667 5.09113V23.7881C4.16464 24.0735 4.22613 24.3548 4.34518 24.6046C4.46424 24.8544 4.63684 25.0644 4.8463 25.2142C5.05576 25.3641 5.295 25.4487 5.5409 25.4599C5.7868 25.4712 6.03104 25.4086 6.25001 25.2783L22.3333 15.9258C22.5716 15.7871 22.7719 15.5743 22.9118 15.3111C23.0518 15.0479 23.1259 14.7448 23.1259 14.4356C23.1259 14.1263 23.0518 13.8232 22.9118 13.56C22.7719 13.2969 22.5716 13.084 22.3333 12.9453V12.9533Z"
                  fill="white"
                />
              </svg>
              </div>
            </VideoPlayer>
            </Bounce>
            <Bounce top>
            <VideoPlayer>
              <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
              >
                <path
                  d="M22.3333 12.9533L6.20834 3.60085C5.99081 3.48394 5.75152 3.432 5.51226 3.44975C5.273 3.46751 5.04137 3.5544 4.83845 3.70252C4.63553 3.85063 4.46777 4.05527 4.35045 4.2978C4.23312 4.54033 4.16994 4.81305 4.16667 5.09113V23.7881C4.16464 24.0735 4.22613 24.3548 4.34518 24.6046C4.46424 24.8544 4.63684 25.0644 4.8463 25.2142C5.05576 25.3641 5.295 25.4487 5.5409 25.4599C5.7868 25.4712 6.03104 25.4086 6.25001 25.2783L22.3333 15.9258C22.5716 15.7871 22.7719 15.5743 22.9118 15.3111C23.0518 15.0479 23.1259 14.7448 23.1259 14.4356C23.1259 14.1263 23.0518 13.8232 22.9118 13.56C22.7719 13.2969 22.5716 13.084 22.3333 12.9453V12.9533Z"
                  fill="white"
                />
              </svg>
              </div>
            </VideoPlayer>
            </Bounce>
            <Bounce bottom>
            <VideoPlayer>
              <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
              >
                <path
                  d="M22.3333 12.9533L6.20834 3.60085C5.99081 3.48394 5.75152 3.432 5.51226 3.44975C5.273 3.46751 5.04137 3.5544 4.83845 3.70252C4.63553 3.85063 4.46777 4.05527 4.35045 4.2978C4.23312 4.54033 4.16994 4.81305 4.16667 5.09113V23.7881C4.16464 24.0735 4.22613 24.3548 4.34518 24.6046C4.46424 24.8544 4.63684 25.0644 4.8463 25.2142C5.05576 25.3641 5.295 25.4487 5.5409 25.4599C5.7868 25.4712 6.03104 25.4086 6.25001 25.2783L22.3333 15.9258C22.5716 15.7871 22.7719 15.5743 22.9118 15.3111C23.0518 15.0479 23.1259 14.7448 23.1259 14.4356C23.1259 14.1263 23.0518 13.8232 22.9118 13.56C22.7719 13.2969 22.5716 13.084 22.3333 12.9453V12.9533Z"
                  fill="white"
                />
              </svg>
              </div>
            </VideoPlayer>
            </Bounce>




            <div>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
          ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
          doloribus. Odit, aut.
        </div>
      </Popup>
    </div>



          </Videodiv>
          <h1>Blogs</h1>
          <Linediv></Linediv>
          <Blogscontainer>
            <Loremcontainer>
              <h1>Camper</h1>
              <h3>@Camper</h3>
              <p>
                Camping truly is for everyone, from your oldest family member to
                little campers just trekking out for the first time. Whether
                your plan is to relax, explore or reconnect, CAMPER campgrounds
                are a great place to create memories with those you love.
              </p>
            </Loremcontainer>
            <Imagecontainer>
              <Flip top>
                <img src={image} alt="Image 1" />
              </Flip>
              <Flip right>
                <img src={image1} alt="Image 2" />
              </Flip>
              <Flip left>
                <img src={image2} alt="Image 3" />
              </Flip>
              <Flip bottom>
                <img src={image} alt="Image 4" />
              </Flip>
              <Flip top>
                <img src={image1} alt="Image 5" />
              </Flip>
              <Flip right>
                <img src={image2} alt="Image 6" />
              </Flip>
            </Imagecontainer>
          </Blogscontainer>
        </Homecontainer>
      </div>
      {/* <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div style={{ zIndex: "10" }}>
 

          <video controls>
            <source src="https://youtu.be/K4r6nw6aeg4" type="video/mp4" />
          </video>
        </div>
      </Popup> */}
    </div>
  );
};

export default Home;
