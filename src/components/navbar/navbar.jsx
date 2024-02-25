import React, { useReducer } from "react";
import {
  DropdownShow,
  Dropmenu,
  Hamburger,
  HamburgerRight,
  Infos,
  Navdiv,
  Selection,
} from "./style";
import people from "../../assets/Vector.png";
import car from "../../assets/car.png";
import { Link } from "react-router-dom";
import ImageWithDropdown from "./ImageDropdown/dropdown";
import Header from "./ResponsiveHamburger";
import Translate from "../googleTranslate/translate";

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
        <Header />
      </Hamburger>
      <a href="/home">Camper</a>
      <Infos>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to= "/motors">Motor</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "toggleShowText" });
            }}
          >
            <path
              d="M11.25 6.125L7.5 9.875L3.75 6.125"
              stroke="#373737"
              stroke-width="2"
            />
          </svg>
        </div>
        {state.showText && (
          <Dropmenu>
            <DropdownShow>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
            </DropdownShow>
            <button>See all</button>
          </Dropmenu>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to="/caravan">Carvan</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "toggleShowText" });
            }}
          >
            <path
              d="M11.25 6.125L7.5 9.875L3.75 6.125"
              stroke="#373737"
              stroke-width="2"
            />
          </svg>
        </div>
        {state.showText && (
          <Dropmenu>
            <DropdownShow>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
            </DropdownShow>
            <button>See all</button>
          </Dropmenu>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to="/tuning">Tuning</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "toggleShowText" });
            }}
          >
            <path
              d="M11.25 6.125L7.5 9.875L3.75 6.125"
              stroke="#373737"
              stroke-width="2"
            />
          </svg>
        </div>
        {state.showText && (
          <Dropmenu>
            <DropdownShow>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
            </DropdownShow>
            <button>See all</button>
          </Dropmenu>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to="/usedCar">Used Car</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "toggleShowText" });
            }}
          >
            <path
              d="M11.25 6.125L7.5 9.875L3.75 6.125"
              stroke="#373737"
              stroke-width="2"
            />
          </svg>
        </div>
        {state.showText && (
          <Dropmenu>
            <DropdownShow>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
            </DropdownShow>
            <button>See all</button>
          </Dropmenu>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to="/places">Camping Places</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "toggleShowText" });
            }}
          >
            <path
              d="M11.25 6.125L7.5 9.875L3.75 6.125"
              stroke="#373737"
              stroke-width="2"
            />
          </svg>
        </div>
        {state.showText && (
          <Dropmenu>
            <DropdownShow>
              <div>
                <img src={car} alt="car" />
                <p>Seoul</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Busan</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Gwangju</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Daegu</p>
              </div>
           
            </DropdownShow>
            <button>See all</button>
          </Dropmenu>
        )}
      </Infos>
      <Selection>
        <ImageWithDropdown />
        <Link to="/">
          <img src={people} className="people" alt="people" />
        </Link>
        <HamburgerRight>
          <Header />
        </HamburgerRight>
        {/* <select name="Language">
          <option value="eng">ENG</option>
          <option value="kor">KOR</option>
          <option value="uz">UZ</option>
          <option value="rus">RUS</option>
        </select> */}
    {/* <Translate/>    */}
         
        
      </Selection>
    </Navdiv>
  );
};

export default Navbar;
