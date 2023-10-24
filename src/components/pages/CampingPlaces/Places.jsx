import React from "react";
import placeone from "../../../assets/place1.png";
import placetwo from "../../../assets/place3.png";
import placethree from "../../../assets/place2.png";
import { PlaceOffers, PlaceOptions, PlacesBack } from "./placesStyle";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";

const Places = () => {
  return (
    <div>
      <PlacesBack>
        <Link to="/">Home / Camping place</Link>
        <p>Camping places</p>
      </PlacesBack>
      <Reveal>
        <PlaceOptions>
          <PlaceOffers>
            <img src={placeone} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link href="/location">Location</Link>
            </div>
          </PlaceOffers>
          <PlaceOffers>
            <img src={placetwo} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          <PlaceOffers>
            <img src={placethree} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>

          <PlaceOffers>
            <img src={placeone} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          <PlaceOffers>
            <img src={placetwo} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          <PlaceOffers>
            <img src={placethree} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>

          <PlaceOffers>
            <img src={placeone} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          <PlaceOffers>
            <img src={placetwo} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          <PlaceOffers>
            <img src={placethree} alt="none" />
            <div>
              <p>Camping place name</p>
              <a href="/location">Location</a>
            </div>
          </PlaceOffers>
          <PlaceOffers>
            <img src={placeone} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          <PlaceOffers>
            <img src={placetwo} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          <PlaceOffers>
            <img src={placethree} alt="none" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
        </PlaceOptions>
      </Reveal>
    </div>
  );
};

export default Places;
