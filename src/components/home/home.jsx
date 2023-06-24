import React from "react";
import {
  Blogscontainer,
  Homecontainer,
  Imagecontainer,
  Linediv,
  Loremcontainer,
  Videodiv,
} from "./style";
import Example from "./carouselcomp/carousel";
import image from "../../assets/car22.png";
import image1 from "../../assets/car33.png";
import image2 from "../../assets/imag3car.png";
import MultiCarousel from "./multicarousel/multicarousel";


const Home = () => {
  return (
    <div>
      <Example />
      <div
        style={{ display: `flex`, flexDirection: `column` }}
      >
        <Homecontainer>
          <h1>Recommend</h1>
          <Linediv></Linediv>
          <MultiCarousel/>
          <h1>Videos</h1>
          <Linediv></Linediv>
          <Videodiv>
            <video src={image}></video>
            <video src=""></video>
            <video src=""></video>
            <video src=""></video>
            <video src=""></video>
            <video src=""></video>
            <video src=""></video>
            <video src=""></video>
          </Videodiv>
          <h1>Blogs</h1>
          <Linediv></Linediv>
          <Blogscontainer>
            <Loremcontainer>
              <h1>Lorem ipsum</h1>
              <h3>@Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat platea mauris at turpis. Volutpat, morbi sit vitae id.
                Aliquam eleifend aenean neque in in a quam vivamus
              </p>
            </Loremcontainer>
            <Imagecontainer>
              <img src={image} />
              <img src={image1} />
              <img src={image2} />
              <img src={image} />
              <img src={image1} />
              <img src={image2} />
            </Imagecontainer>
          </Blogscontainer>
        </Homecontainer>
      </div>
    </div>
  );
};

export default Home;
