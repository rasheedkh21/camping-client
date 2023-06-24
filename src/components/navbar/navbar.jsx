import React, { useReducer } from "react";
import {
  Camper,
  Dropmenu,
  Hamburger,
  HamburgerRight,
  Infos,
  Navdiv,
  Selection,
} from "./style";
import message from "../../assets/Vector (1).png";
import people from "../../assets/Vector.png";
import car from "../../assets/car.png";
import hamburger from "../../assets/hamburger.png";
import { Link } from "react-router-dom";
import ImageWithDropdown from "./ImageDropdown/dropdown";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleShowText":
      return { showText: !state.showText };
    default:
      return state;
  }
};

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, {
    showText: false,
  });
  return (
    <Navdiv>
      <Hamburger>
        <a href="">
          <img src={hamburger} />
        </a>
      </Hamburger>
      <Camper to='/'>Camper</Camper>
      <Infos>
        <p
          onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}
        >
          Motor
        </p>
        {state.showText && (
          <Dropmenu>
            <div>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
            </div>
            <button>See all</button>
          </Dropmenu>
        )}
        <p
          onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}
        >
          Caravan
        </p>
        {state.showText && (
          <Dropmenu>
            <div>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
            </div>
            <button>See all</button>
          </Dropmenu>
        )}
        <p
          onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}
        >
          Tuning
        </p>
        {state.showText && (
          <Dropmenu>
            <div>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
            </div>
            <button>See all</button>
          </Dropmenu>
        )}
        <p
          onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}
        >
          Used car
        </p>
        {state.showText && (
          <Dropmenu>
            <div>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
            </div>
            <button>See all</button>
          </Dropmenu>
        )}
        <p
          onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}
        >
          Camping place
        </p>
        {state.showText && (
          <Dropmenu>
            <div>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
              <img src={car} />
              <p>Car name</p>
            </div>
            <button>See all</button>
          </Dropmenu>
        )}
      </Infos>
      <Selection>
        <a href="">
        <ImageWithDropdown className="message"/>
        </a>
        <Link to='login'>
        <img src={people} className="people" />
        </Link>
        <HamburgerRight>
          <a href="">
            <img src={hamburger} alt="" />
          </a>
        </HamburgerRight>
        <select name="Language">
          <option value="eng">ENG</option>
          <option value="kor">KOR</option>
          <option value="uz">UZ</option>
          <option value="rus">RUS</option>
        </select>
      </Selection>
    </Navdiv>
  );
};

export default Navbar;
