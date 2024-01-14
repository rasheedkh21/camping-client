import React from "react";
import { CaravanCarCard } from "../../test/caravanCarData";
import { ImageOfOffer, OrderSort, Orders } from "../motors/style";
import { Link } from "react-router-dom";

const CaravanVMenu = () => {
  const datas = CaravanCarCard.CarInfo;
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
                <a href="/comparemodels">Compare</a>
              </div>
            </Orders>
          </Link>
        );
      })}
    </OrderSort>
  );
};

export default CaravanVMenu;
