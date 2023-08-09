import React, { useReducer,} from "react";
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
          <Header/>
      </Hamburger>
        <a href="/" >Camper</a>
      <Infos>
        <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", gap:"7px"}}>
        <a href="/motors">
          Motor
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" 
        style={{cursor:"pointer"}}
        onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}>
  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>

</svg>
</div>
        {state.showText && (
          <Dropmenu>
            <DropdownShow>
              <div>
                <img src={car}  alt="car"/>
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
                <img src={car}  alt="car"/>
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
              <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", gap:"7px"}}>
        <a href="/motors">
          Carvan
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" 
        style={{cursor:"pointer"}}
        onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}>
  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>

</svg>
</div>
        {state.showText && (
          <Dropmenu>
            <DropdownShow>
              <div>
                <img src={car}  alt="car"/>
                <p>Car name</p>
              </div>
              <div>
                <img src={car}  alt="car"/>
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car"/>
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
              <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", gap:"7px"}}>
        <a href="/motors">
          Tuning
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" 
        style={{cursor:"pointer"}}
        onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}>
  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>

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
                <img src={car} alt="car"/>
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car"/>
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car"/>
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
               <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", gap:"7px"}}>
        <a href="/motors">
          Used Car
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" 
        style={{cursor:"pointer"}}
        onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}>
  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>

</svg>
</div>
        {state.showText && (
          <Dropmenu>
            <DropdownShow>
              <div>
                <img src={car} alt="car"/>
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car"/>
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car"/>
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car"/>
                <p>Car name</p>
              </div>
            </DropdownShow>
            <button>See all</button>
          </Dropmenu>
        )}
               <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", gap:"7px"}}>
        <a href="/places">
          Camping Places
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" 
        style={{cursor:"pointer"}}
        onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}>
  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>

</svg>
</div>
        {state.showText && (
          <Dropmenu>
            <DropdownShow>
              <div>
                <img src={car} alt="car"/>
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car}  alt="car"/>
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car" />
                <p>Car name</p>
              </div>
              <div>
                <img src={car} alt="car"/>
                <p>Car name</p>
              </div>
            </DropdownShow>
            <button>See all</button>
          </Dropmenu>
        )}
      </Infos>
      <Selection>
          <ImageWithDropdown />
        <Link to="login">
          <img src={people} className="people" alt="people"/>
        </Link>
        <HamburgerRight>
            {/* <img src={hamburger} alt="humburger"  /> */}
            <Header/>
          
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
