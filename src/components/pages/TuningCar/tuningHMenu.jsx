import React from 'react'
import { HMenuDesign, Order, OrderLeft, OrderRight, Writings, OrderButton} from '../myOrders/style'

import { Link } from 'react-router-dom'
const BASEURL = "http://localhost:5050/api/v1/";

const TuningHMenu = () => {
  const [allData, setAllData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}tuning/getAllTuning`);
        const tuning = await response.json();
        setAllData(tuning.data);
      } catch (error) {
        console.log("Tuning data is wrong:", error);
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
              {/* <img src={hmenuimg} alt="order" /> */}
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
export default TuningHMenu;