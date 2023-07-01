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

const Home = () => {
  return (
    <div>
      <Example />
      <div style={{ display: `flex`, flexDirection: `column` }}>
        <Homecontainer>
          <h1>Recommend</h1>
          <Linediv></Linediv>
          <h1>Videos</h1>
          <Linediv></Linediv>
          <Videodiv>
            <video controls>
              <source src="https://youtu.be/IP5umfDTiHI" type="video/mp4" />
            </video>
            <video controls>
              <source src="https://youtu.be/K4r6nw6aeg4" type="video/mp4" />
            </video>
            <video controls>
              <source src="https://youtu.be/K4r6nw6aeg4" type="video/mp4" />
            </video>
            <video controls>
              <source src="https://youtu.be/K4r6nw6aeg4" type="video/mp4" />
            </video>
            <video controls>
              <source src="https://youtu.be/K4r6nw6aeg4" type="video/mp4" />
            </video>
            <video controls>
              <source src="https://youtu.be/K4r6nw6aeg4" type="video/mp4" />
            </video>
            <video controls>
              <source src="https://youtu.be/K4r6nw6aeg4" type="video/mp4" />
            </video>
            <video controls>
              <source src="https://youtu.be/K4r6nw6aeg4" type="video/mp4" />
            </video>
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
              <img src={image} alt="Image 1" />
              <img src={image1} alt="Image 2" />
              <img src={image2} alt="Image 3" />
              <img src={image} alt="Image 4" />
              <img src={image1} alt="Image 5" />
              <img src={image2} alt="Image 6" />
            </Imagecontainer>
          </Blogscontainer>
        </Homecontainer>
      </div>
    </div>
  );
};

export default Home;

