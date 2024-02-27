import React from "react";
import img from "../../../assets/car.png";
import {Review, ReviewsCard, ReviewsDataRight } from "./style";
const BASEURL = "https://api-camping.isabek.uz/api/v1/";



const Items = () => {

  const [allData, setAllData] = React.useState([]);


  //
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
  console.log(allData)

  return (
    <Review>
      {allData.slice(0, 6).map((value, key) => (
        <div key={key}>
          <div>
            <ReviewsCard>
                <div>
                  <img src={img} alt="img" />
                </div>
              
              <ReviewsDataRight>
                <div>
                  <div>{value.name}</div>
                  <div>{value.company}</div>
                  <div>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p></p>
                </div>
              </ReviewsDataRight>
            </ReviewsCard>
          </div>
        </div>
      ))}
    </Review>
  );
};

export default Items;
