import React, { useState } from "react";
import { Bigcontainer, ItemContainer, ItemSort, TuningBack } from "./style";
import { Link } from "react-router-dom";
import TuningController from "./TuningController";
import TuningSwitch from "./tuningSwitchConroller";
const BASEURL = "http://localhost:5050/api/v1/";

const Tuning = () => {
  const [active, setActive] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [allData, setAllData] = React.useState([]);

  //getting datas
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}tuning/getAllTuning`);
        const caravan = await response.json();
        setAllData(caravan.data);
      } catch (error) {
        console.log("Tuning data is wrong:", error);
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
      <TuningBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/usedCar">Used Cars</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Tuning</h1>
      </TuningBack>
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
              <span style={{ color: "#006DAB", fontSize: "18px" }}>
                {totalItems}
              </span>
            </div>
            <TuningController
              onClick={(state) => {
                setActive(state);
              }}
            />
          </ItemSort>
          <TuningSwitch active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Tuning;
