import React, { useState } from "react";

import {
  Adressdiv,
  Bigcontainer,
  CancelButton,
  ChoicesCheck,
  ComapreCars,
  CostContainer,
  ItemContainer,
  ItemSort,
  MotorsBack,
  OptionsCheck,
  SelectionCars,
  SelectionDiv,
  SelectionNumbers,
  ThinLine,
} from "../motors/style";
import { Link } from "react-router-dom";
import { UsedCarCard } from "../../test/usedCarData";
import MenuSwitchController from "./motorsMenuController";
import MotorController from "./motorController";



const Motors = ({ onClick }) => {
  const [active, setActive] = useState(true);
  const [filteredData, setFilteredData] = useState(UsedCarCard.carList);
  const handleClick = () => {
    const sortedCars = [...UsedCarCard.carList];
    sortedCars.sort((a, b) => {
      const nameA = a.car.name.toLowerCase();
      const nameB = b.car.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });

    const filteredCars = sortedCars.filter((data) =>
      data.car.name.startsWith("르벤투스")
    );

    setFilteredData(filteredCars);
  };
  return (
    <div style={{ background: "#fafafa" }}>
      <MotorsBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/caravan">Caravan</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Motors</h1>
      </MotorsBack>
      <Bigcontainer>
      <CostContainer>
        <div style={{borderBottom:"1px solid  rgba(55, 55, 55, 0.5)", paddingTop:11}}>
            <h1>Cost of cars</h1>
          </div>
          <Adressdiv>
            <div>
              <label>From</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">to</label>
              <input type="text" />
            </div>
          </Adressdiv>
          <OptionsCheck>
            <div>
              <h1>Brand</h1>
            </div>
          </OptionsCheck>
          <ThinLine />
          <ChoicesCheck>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Aidal</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Knal</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Escape</label>
            </div>
          </ChoicesCheck>
          <OptionsCheck>
            <div>
              <h1>Company</h1>
            </div>
          </OptionsCheck>
          <ThinLine />
          <ChoicesCheck>
            <div>
              <input type="checkbox" name="check" id="" onClick={handleClick} />
              <label htmlFor="">르벤투스S+</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Knal</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Escape</label>
            </div>
          </ChoicesCheck>
          <OptionsCheck>
            <div>
              <h1>Number of travelers</h1>
            </div>
          </OptionsCheck>
          <ThinLine />
          <ChoicesCheck>
            <div>
              <input type="checkbox" name="check" id="" onClick={handleClick} />
              <label htmlFor="">5인</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">4인</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">15</label>
            </div>
          </ChoicesCheck>
          <OptionsCheck>
            <div>
              <h1>Location</h1>
            </div>
          </OptionsCheck>
          <ThinLine />
          <ChoicesCheck>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Seoul</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Busan</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Incheon</label>
            </div>
          </ChoicesCheck>
          <CancelButton>
            <div>
              <button>Cancel</button>
              <button>Search</button>
            </div>
          </CancelButton>
          <ComapreCars>
            <h1>Compare</h1>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </ComapreCars>
        </CostContainer>




        <ItemContainer>
          <ItemSort>
          <div style={{display:"flex", gap:30, alignItems:"center", justifyContent:"center"}}>
              <h1>Item</h1><span style={{color:"#006DAB", fontSize:"18px"}}>25000</span>
            </div>
            <SelectionDiv>
              <label htmlFor="input">Sort by</label>
              <SelectionCars placeholder="select">
                <option value="">Used Car Standart</option>
                <option value="">Used Car Premium</option>
                <option value="">Used Car Gold</option>
              </SelectionCars>
              <div>
                <SelectionNumbers name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </SelectionNumbers>
              </div>
            </SelectionDiv>
          
            <MotorController onClick={(state)=>{
              setActive(state)
            }}/>
          </ItemSort>
          <MenuSwitchController active={active}/>
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Motors;