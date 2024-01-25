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
import MotorSwitchControl from "./motorSwitchController";
import MotorController from "./MotorController";

const Motors = () => {
  const [active, setActive] = useState(true);

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
                <option value="">Motor Standart</option>
                <option value="">Motor Premium</option>
                <option value="">Motor Gold</option>
              </SelectionCars>
            </SelectionDiv>
            <MotorController
              onClick={(state) => {
                setActive(state);
              }}
            />
          </ItemSort>
          <MotorSwitchControl active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Motors;