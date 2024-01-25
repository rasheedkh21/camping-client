import React, { useState } from "react";

import { MotorsBack,
  Bigcontainer,
  ItemContainer,
  ItemSort,
  SelectionCars,
  SelectionDiv,
} from "../TuningCar/style";
import { Link } from "react-router-dom";

import UsedCarSwitchControl from "./usedCarSwitchController";
import UsedCarController from "./UsedCarController";




const UsedCar = ({}) => {
  const [active, setActive] = useState(true);

  return (
    <div style={{ background: "#fafafa" }}>
      <MotorsBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/tuning">Tuning</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Used Cars</h1>
      </MotorsBack>
      <Bigcontainer>
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
            </SelectionDiv>
            <UsedCarController onClick={(state)=>{
                setActive(state)
            }}/>
          </ItemSort>
  
          <UsedCarSwitchControl active={active}/>
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default UsedCar;