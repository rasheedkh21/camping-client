import React, { useState } from "react";

import {
  Bigcontainer,
  ItemContainer,
  ItemSort,
  MotorsBack,
} from "../TuningCar/style";
import { Link } from "react-router-dom";
import MotorSwitchControl from "./motorSwitchController";
import MotorController from "./MotorController";
const BASEURL = "http://localhost:5050/api/v1/";


const Motors = () => {
  const [active, setActive] = useState(true);
  const [totalItems, setTotalItems]= useState(0)
  const [allData, setAllData] = React.useState([]);

    //getting datas
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${BASEURL}motors/getAllMotors`);
          const caravan = await response.json();
          setAllData(caravan.data);
        } catch (error) {
          console.log("Motors data is wrong:", error);
        }
      };
      fetchData();
    }, []);
  
  React.useEffect(() => {
    // Calculate total users after data is fetched
    setTotalItems(allData.length);
  }, [allData]);

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
              <span style={{ color: "#006DAB", fontSize: "18px" }}>{totalItems}</span>
            </div>
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