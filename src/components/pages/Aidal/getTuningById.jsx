import React, { useEffect, useState } from "react";
import imagecarback from "../../../assets/usedcarimgoffer.jpeg";
import Comfort from "../../../assets/tuningacces.jpeg";
import Tyding from "../../../assets/tyding.png";
import Ventiled from "../../../assets/tuningventilate.jpeg";
import Access from "../../../assets/tunigncomfort.jpeg";
import Heating from "../../../assets/tuningheating.jpeg";
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
import Comment from "./swipableMenu";
import { Link, useParams } from "react-router-dom";

const BASEURL = "https://api-camping.isabek.uz/api/v1/";

    const TunigCarInfo = () => {
  const { id } = useParams();
  const [dataByID, setDataByID] = useState("");

  useEffect(() => {
    const fetchMotor = async () => {
      try {
        const response = await fetch(`${BASEURL}tuning/${id}`);
        const tuningData = await response.json();
        setDataByID(tuningData.data);
      } catch (error) {
        console.error("Error fetching tuning:", error);
        // Handle error gracefully, e.g., display an error message
      }
    };
    fetchMotor();
  }, [id]);
  console.log(dataByID);

  return (
    <div style={{ background: "#fafafa" }}>
      <AidalBack>
        <h1>{dataByID.name}</h1>
        <div>
          <Link to="/card">Add to Card</Link>
          <Link to="/comparemodels">Compare</Link>
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
            <h2>{dataByID.name}</h2>
            <h1>{dataByID.cost}</h1>
          </FirstAidalDiv>
          <LineAidal></LineAidal>
          <FirstAidalDiv>
            <p>Company</p>
            <p>{dataByID.company}</p>
          </FirstAidalDiv>
          <FirstAidalDiv>
            <p>People</p>
            <p>{dataByID.people}</p>
          </FirstAidalDiv>
          <FirstAidalDiv>
            <p>License type</p>
            <p>{dataByID.licence}</p>
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
            <Link to="/card">Add to Card</Link>
            <Link to="/comparemodels">Compare</Link>
          </Buttondiv>
        </ComfortAllDivLorem>
        <ComfortImage>
          <Zoom right>
            <img src={Heating} alt="heeating" />
          </Zoom>
        </ComfortImage>
        <Buttondivseconnd>
          <Link to="/card">Add to Card</Link>
          <Link to="/comparemodels">Compare</Link>
        </Buttondivseconnd>
      </PriceAidal>

      <Comment />
    </div>
  );
};

export default TunigCarInfo;