import React, { useReducer } from "react";
import { Dropmenu, Infos, Navdiv, Selection } from "./style";
import message from "../../assets/Vector (1).png";
import people from "../../assets/Vector.png";
import car from "../../assets/car.png";

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
      <h1>Camper</h1>
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
        <img src={message} />
        <img src={people} />
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
