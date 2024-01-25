import React, { useState } from "react";
import { MotorsBack, 
  Bigcontainer,
  ItemContainer,
  ItemSort,
  SelectionCars,
  SelectionDiv,
} from "./style";
import { Link } from "react-router-dom";
import TuningController from "./TuningController";
import TuningSwitch from "./tuningSwitchConroller";

const Tuning = ({}) => {
  const [active, setActive] = useState(true);
  return (
    <div style={{ background: "#fafafa" }}>
      <MotorsBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/usedCar">Used Cars</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Tuning</h1>
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
                <option value="">Tuning Standart</option>
                <option value="">Tuning Premium</option>
                <option value="">Tuning Gold</option>
              </SelectionCars>
            </SelectionDiv>
            <TuningController onClick={(state)=>{
                setActive(state)
            }}/>
          </ItemSort>
          <TuningSwitch active={active}/>
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Tuning;