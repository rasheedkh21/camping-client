import React from "react";
import Example from "../../home/carouselcomp/carousel";
import imagecarback from "../../../assets/carbackground.png";
import Comfort from "../../../assets/comfort.png";
import Tyding from "../../../assets/tyding.png";
import Ventiled from "../../../assets/ventiled.png";
import Access from "../../../assets/access.png";
import Heating from "../../../assets/heating.png";
import {
  AdditionalInfos,
  Buttondiv,
  Buttondivseconnd,
  ComfortAllDivLorem,
  ComfortImage,
  FirstAidalDiv,
  ImageDivCar,
  InfoDiv,
  LineAidal,
  PriceAidal,
} from "./style";
// import Comment from "./comment";

const Aidal = () => {
  return (
    <div>
      <Example />
      <PriceAidal>
        <ImageDivCar>
          <img src={imagecarback} alt="vcar" />
        </ImageDivCar>
        <InfoDiv>
          <FirstAidalDiv>
            <h2>Aidal</h2>
            <h1>50.000$</h1>
          </FirstAidalDiv>
          <LineAidal></LineAidal>
          <FirstAidalDiv>
            <p>Company</p>
            <p>Aidal</p>
          </FirstAidalDiv>
          <FirstAidalDiv>
            <p>People</p>
            <p>12</p>
          </FirstAidalDiv>
          <FirstAidalDiv>
            <p>License type</p>
            <p>License type</p>
          </FirstAidalDiv>
        </InfoDiv>
      </PriceAidal>
      <PriceAidal>
        <ComfortAllDivLorem>
          <h1>Comfort</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh
            urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id
            in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar.
            Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis
            arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed
            proin iaculis mi.
          </p>
        </ComfortAllDivLorem>
        <ComfortImage>
          <img src={Comfort} alt="Comfort" />
        </ComfortImage>
      </PriceAidal>
      <PriceAidal>
        <ComfortImage>
          <img src={Tyding} alt="tyding" />
        </ComfortImage>
        <ComfortAllDivLorem>
          <h1>Tidying away is child's play!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh
            urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id
            in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar.
            Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis
            arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed
            proin iaculis mi.
          </p>
        </ComfortAllDivLorem>
      </PriceAidal>
      <PriceAidal>
        <ComfortAllDivLorem>
          <h1>Ventilated , Lit up</h1>
          <p>
            In our vans and motorhomes, all our body lighting is 100% LED: a
            guarantee of energy efficiency and durability. As for ventilation,
            we also often offer double ventilation in the bathroom (Skylight +
            window), which is very popular with our customers… Camper relies on
            legendary Seitz windows. They offer the best insulation and are also
            the easiest to use and safest because they can’t be removed from the
            outside.
          </p>
        </ComfortAllDivLorem>
        <ComfortImage>
          <img src={Ventiled} alt="Ventiled" />
        </ComfortImage>
      </PriceAidal>
      <PriceAidal>
        <ComfortImage>
          <img src={Access} alt="Access" />
        </ComfortImage>
        <ComfortAllDivLorem>
          <h1>Easy Access</h1>
          <p>
            We add little touches that your joints will thank you for… All our
            motorhomes are equipped with a built-in step to facilitate entry to
            the vehicle All our vans are equipped with an electric step.
          </p>
        </ComfortAllDivLorem>
      </PriceAidal>
      <PriceAidal>
        <ComfortAllDivLorem>
          <h1>Heating when driving</h1>
          <p>
            Fuel heating is now very popular in the industry, but this was not
            always the case; Camper (once again) led the way in this area over
            15 years ago. One of the advantages it offers is that it can heat up
            your vehicle while you drive, for a more comfortable arrival.
          </p>
          <Buttondiv>
            <button>Add to Card</button>
            <button>Compare</button>
          </Buttondiv>
        </ComfortAllDivLorem>
        <ComfortImage>
          <img src={Heating} alt="heeating" />
        </ComfortImage>
        <Buttondivseconnd>
            <button>Add to Card</button>
            <button>Compare</button>
          </Buttondivseconnd>
      </PriceAidal>
      <AdditionalInfos>
        <div>Item reviews</div>
        <div>Q&A</div>
        <div>FAQ</div>
        <div>Contact</div>
      </AdditionalInfos>
      {/* <Comment/> */}
    </div>
  );
};

export default Aidal;
