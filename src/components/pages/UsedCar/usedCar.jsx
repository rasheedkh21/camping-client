import React, { useState } from "react";

import {
  MotorsBack,
  Bigcontainer,
  ItemContainer,
  ItemSort,
  SelectionCars,
  SelectionDiv,
  UsedcarBack,
} from "../TuningCar/style";
import { Link } from "react-router-dom";

import UsedCarSwitchControl from "./usedCarSwitchController";
import UsedCarController from "./UsedCarController";

const BASEURL = "http://localhost:5050/api/v1/";

const UsedCar = ({}) => {
  const [active, setActive] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [allData, setAllData] = React.useState([]);

  //getting datas
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}usedCar/getAllUsedCar`);
        const caravan = await response.json();
        setAllData(caravan.data);
      } catch (error) {
        console.log("Used car data is wrong:", error);
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
      <UsedcarBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/tuning">Tuning</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Used Cars</h1>
      </UsedcarBack>
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
              <h1>Items</h1>
              <span
                style={{ color: "#006DAB", fontSize: "22px", font: "bold" }}
              >
                {totalItems}
              </span>
            </div>
            <SelectionDiv>
              <label htmlFor="input">Sort by</label>
              <SelectionCars placeholder="select">
                <option value="">Used Car Standart</option>
                <option value="">Used Car Premium</option>
                <option value="">Used Car Gold</option>
              </SelectionCars>
            </SelectionDiv>
            <UsedCarController
              onClick={(state) => {
                setActive(state);
              }}
            />
          </ItemSort>

          <UsedCarSwitchControl active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default UsedCar;
