import React from "react";
import { HMenuDesign, Order, OrderButton, OrderLeft, OrderRight, Writings } from "../myOrders/style";

import { motorsCarCard } from "../../test/motorsCarData";
import { Link } from "react-router-dom";


const HMenu = () => {
  const datas = motorsCarCard.CarInfo
  return (
    <Order>
      {datas.map((data)=>{
        return(
          <Link to={`/aidal/${data.id}`}>
          <HMenuDesign>
          <OrderLeft>
              {/* <img src={hmenuimg} alt="order" /> */}
          </OrderLeft>
          <OrderRight>
              <Writings>
              <div>
                <h1>{data.car.name}</h1>
                  <p>{data.car.company}</p>
                </div>
                <div>
                  <h2>{data.car.cost}</h2>
                </div>
              </Writings>
              <Writings>
              <OrderButton>Order</OrderButton>
              <OrderButton>Compare</OrderButton>
              </Writings>
          </OrderRight>
      </HMenuDesign>
      </Link>
        )
      })}
</Order>
  )}
export default HMenu;