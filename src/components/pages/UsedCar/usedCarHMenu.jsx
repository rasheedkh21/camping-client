import React from 'react'
import { HMenuDesign, Order, OrderButton, OrderLeft, OrderRight, Writings } from '../myOrders/style'
import hmenuimg from "../../../assets/hmenu.webp"
import { Link } from 'react-router-dom'



const BASEURL = "http://localhost:5050/api/v1/";


const UsedCarHMenu = () => {
  const [allData, setAllData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}usedCar/getAllUsedCar`);
        const usedCar = await response.json();
        setAllData(usedCar.data);
      } catch (error) {
        console.log("Used Car data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Order>
      {allData.map((data)=>{
        return(
          <Link to={`/aidal/${allData.id}`}>
          <HMenuDesign>
          <OrderLeft>
              <img src={hmenuimg} alt="order" />
          </OrderLeft>
          <OrderRight>
              <Writings>
              <div>
                <h1>{data.name}</h1>
                  <p>{data.company}</p>
                </div>
                <div>
                  <h2>{data.cost}</h2>
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
export default UsedCarHMenu;