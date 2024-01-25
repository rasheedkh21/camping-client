import React, { useState } from "react";

import {
  Bigcontainer,
  ItemContainer,
  ItemSort,
  MotorsBack,
  SelectionCars,
  SelectionDiv,
} from "../TuningCar/style";
import { Link } from "react-router-dom";
import CarvanSwitchControl from "./caravanSwitchController";
import CarvanController from "./CaravanController";

const Caravan = () => {
  const [active, setActive] = useState(true);

  return (
    <div style={{ background: "#fafafa" }}>
      <MotorsBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/motors">Motors</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Caravan</h1>
      </MotorsBack>
      <Bigcontainer>
        <ItemContainer>
          <ItemSort>
            <div
              style={{
                display: "flex",
                gap: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Item</h1>
              <span style={{ color: "#006DAB", fontSize: "18px" }}>25000</span>
            </div>
            <SelectionDiv>
              <label htmlFor="input">Sort by</label>
              <SelectionCars placeholder="select">
                <option value="">Caravan Standart</option>
                <option value="">Caravan Premium</option>
                <option value="">Caravan Gold</option>
              </SelectionCars>
            </SelectionDiv>
            <CarvanController
              onClick={(state) => {
                setActive(state);
              }}
            />
          </ItemSort>
          <CarvanSwitchControl active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Caravan;
