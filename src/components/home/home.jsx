import {
  Blogscontainer,
  Homecontainer,
  Imagecontainer,
  Linediv,
  Loremcontainer,
  VideoPlayer,
  Videodiv,
} from "./style";
import Example from "../pages/carouselcomp/carousel";
import image from "../../assets/car22.png";
import image1 from "../../assets/car33.png";
import image2 from "../../assets/imag3car.png";
import MultiCarousel from "../pages/multicarousel/multicarousel";
import Flip from "react-reveal/Flip";
import TransitionsModal from "../popup/pupup";

const Home = () => {
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
            <div>
              <TransitionsModal />
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
    </div>
  );
};

export default Home;
