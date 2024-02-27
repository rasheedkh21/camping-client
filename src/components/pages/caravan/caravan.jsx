import React, { useState } from "react";

import {
  Bigcontainer,
  CaravanBack,
  ItemContainer,
  ItemSort,
  SelectionDiv,
} from "../TuningCar/style";
import { Link } from "react-router-dom";
import CarvanSwitchControl from "./caravanSwitchController";
import CarvanController from "./CaravanController";
const BASEURL = "https://api-camping.isabek.uz/api/v1/";
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
            <SelectionDiv>
            <div class="animation">
  <h2 class="title">
    <span class="title-word title-word-1">Camping</span>
    <span class="title-word title-word-2">with</span>
    <span class="title-word title-word-3">Camper</span>
  </h2>
</div>
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
