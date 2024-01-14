import React from "react";
import {ImageOfOffer, OrderSort, Orders} from "./style";
import { motorsCarCard } from "../../test/motorsCarData";
import { Link } from "react-router-dom";



const MotorsVMenu = () => {
  const datas = motorsCarCard.CarInfo;
  return (
    <OrderSort>
      {datas.map((data) => {
        return (
          <Link to={`/aidal/${data.id}`}>
            <Orders key={data.id}>
              <ImageOfOffer />
              <h1>{data.car.name}</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                }}
              >
                <p>{data.car.company}</p>
                <p>{data.car.date}</p>
              </div>
              <h2>{data.car.cost}</h2>
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
