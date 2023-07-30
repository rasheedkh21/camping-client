import React from "react";
import imagecarback from "../../../assets/carbackground.png";
import Comfort from "../../../assets/comfort.png";
import Tyding from "../../../assets/tyding.png";
import Ventiled from "../../../assets/ventiled.png";
import Access from "../../../assets/access.png";
import Heating from "../../../assets/heating.png";
import Zoom from "react-reveal/Zoom";
import {
  AidalBack,
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
import Comment from "./comment";



const Aidal = () => {
  return (
    <div>
      <AidalBack>
        <h1>Aidal</h1>
        <div>
          <a href="/card">Add to Card</a>
          <a href="/comparemodels">Compare</a>
        </div>
      </AidalBack>
      <PriceAidal>
        <ImageDivCar>
          <Zoom left>
            <img src={imagecarback} alt="vcar" />
          </Zoom>
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
          <Zoom>
            <h1>Comfort</h1>
          </Zoom>
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
          <Zoom right>
            <img src={Comfort} alt="Comfort" />
          </Zoom>
        </ComfortImage>
      </PriceAidal>
      <PriceAidal>
        <ComfortImage>
          <Zoom left>
            <img src={Tyding} alt="tyding" />
          </Zoom>
        </ComfortImage>
        <ComfortAllDivLorem>
          <Zoom>
            <h1>Tidying away is child's play!</h1>
          </Zoom>
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
          <Zoom>
            <h1>Ventilated , Lit up</h1>
          </Zoom>
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
          <Zoom right>
            <img src={Ventiled} alt="Ventiled" />
          </Zoom>
        </ComfortImage>
      </PriceAidal>
      <PriceAidal>
        <ComfortImage>
          <Zoom left>
            <img src={Access} alt="Access" />
          </Zoom>
        </ComfortImage>
        <ComfortAllDivLorem>
          <Zoom>
            <h1>Easy Access</h1>
          </Zoom>
          <p>
            We add little touches that your joints will thank you for… All our
            motorhomes are equipped with a built-in step to facilitate entry to
            the vehicle All our vans are equipped with an electric step.
          </p>
        </ComfortAllDivLorem>
      </PriceAidal>
      <PriceAidal>
        <ComfortAllDivLorem>
          <Zoom>
            <h1>Heating when driving</h1>
          </Zoom>
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
          <Zoom right>
            <img src={Heating} alt="heeating" />
          </Zoom>
        </ComfortImage>
        <Buttondivseconnd>
          <button>Add to Card</button>
          <button>Compare</button>
        </Buttondivseconnd>
      </PriceAidal>

      <Comment />
    </div>
  );
};

export default Aidal;
