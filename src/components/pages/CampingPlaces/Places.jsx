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
        <Link to="/home">Home / Camping place</Link>
        <p>Camping places</p>
      </PlacesBack>
      <Reveal>
        <PlaceOptions>
          <Link to="/location">
          <PlaceOffers>
            <img src={placeone} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placetwo} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placethree} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placetwo} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placeone} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placethree} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>

          <Link to="/location">
          <PlaceOffers>
            <img src={placeone} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placethree} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placetwo} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placeone} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placetwo} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
          <Link to="/location">
          <PlaceOffers>
            <img src={placethree} alt="place" />
            <div>
              <p>Camping place name</p>
              <Link to="/location">Location</Link>
            </div>
          </PlaceOffers>
          </Link>
        </PlaceOptions>
      </Reveal>
    </div>
  );
};

export default Places;
