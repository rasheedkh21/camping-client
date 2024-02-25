import React, { useState } from "react";

import {
  Bigcontainer,
  CaravanBack,
  ItemContainer,
  ItemSort,
} from "../TuningCar/style";
import { Link } from "react-router-dom";
import CarvanSwitchControl from "./caravanSwitchController";
import CarvanController from "./CaravanController";
const BASEURL = "http://localhost:5050/api/v1/";
const Caravan = () => {
  const [active, setActive] = useState(true);
  const [totalItems, setTotalItems]= useState(0)
  const [allData, setAllData] = React.useState([]);

    //getting datas
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${BASEURL}caravan/getAllCaravan`);
          const caravan = await response.json();
          setAllData(caravan.data);
        } catch (error) {
          console.log("Caravan data is wrong:", error);
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
      <CaravanBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/motors">Motors</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Caravan</h1>
      </CaravanBack>
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
