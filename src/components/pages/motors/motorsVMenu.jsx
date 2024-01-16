import React from "react";
import {ImageOfOffer, OrderSort, Orders} from "./style";
import { Link } from "react-router-dom";

const BASEURL = "http://localhost:5050/api/v1/";

const MotorsVMenu = () => {
  const [allData, setAllData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}motors/getAllMotors`);
        const motors = await response.json();
        setAllData(motors.data);
      } catch (error) {
        console.log("Motor data is wrong:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <OrderSort>
      {allData.map((data) => {
        return (
          <Link to={`/aidal/${data._id}`}>
            <Orders key={data.id}>
              <ImageOfOffer />
              <h1>{data.name}</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                }}
              >
                <p>{data.company}</p>
                <p>{data.date}</p>
              </div>
              <h2>{data.cost}</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <a href="/orders">Oreder</a>
                <a href="comparemodels">Compare</a>
              </div>
            </Orders>
          </Link>
        );
      })}
    </OrderSort>
    
  );
};

export default MotorsVMenu;
