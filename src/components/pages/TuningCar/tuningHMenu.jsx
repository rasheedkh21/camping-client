import React, { useState } from "react";
import {
  HMenuDesign,
  Order,
  OrderLeft,
  OrderRight,
  Writings,
  OrderButton,
} from "../myOrders/style";

import { Link } from "react-router-dom";
import {
  Adressdiv,
  Bigcontainer,
  ChoicesCheck,
  ComapreCars,
  CostContainer,
  OptionsCheck,
  ThinLine,
} from "./style";
const BASEURL = "https://api-camping.isabek.uz/api/v1/";

const TuningHMenu = () => {
  const [allData, setAllData] = React.useState([]);
  const [checkActive, setCheckActive] = useState(true);
  const [companyCheckboxes, setCompanyCheckboxes] = useState([]);
  const [filteredCaravan, setFilteredCaravan] = useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}tuning/getAllTuning`);
        const tuning = await response.json();
        setAllData(tuning.data);
        setFilteredCaravan(tuning.data);
        setCompanyCheckboxes(tuning.data);
      } catch (error) {
        console.log("Tuning data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  //ckeckbox cheking BY  car name
  const handleCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.name === "Ron");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handle르벤투스CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.name === "Banner");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handleHWCCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.name === "Heritage");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  //checkbox  cheking by Location
  const handleLocationBusanCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.location === "Busan");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handleLocationSeoulCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.location === "Seoul");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleLocationGwangjuCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.location === "Gwangju");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  // checkbox checking by number of people
  const handlePeople4CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.people === "4");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handlePeople3heckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.people === "3");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handlePeople5CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.people === "5");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  //chekboxcheking by car company
  const handleKnausCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Tourig");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleAidalCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Texino");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handle한울캠핑카CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Jayko");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  return (
    <Bigcontainer>
      <CostContainer>
        <Adressdiv>
          <div>
            <label>From</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">to</label>
            <input type="text" />
          </div>
        </Adressdiv>
        <OptionsCheck>
          <div>
            <h1>Brand</h1>
          </div>
        </OptionsCheck>
        <ThinLine />
        <ChoicesCheck>
          <div>
            <input type="checkbox" onClick={handleCheckboxClick} />
            <label htmlFor="">Ron</label>
          </div>
          <div>
            <input type="checkbox" onClick={handle르벤투스CheckboxClick} />
            <label htmlFor="">Banner</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleHWCCheckboxClick} />
            <label htmlFor="">Heritage</label>
          </div>
        </ChoicesCheck>
        <OptionsCheck>
          <div>
            <h1>Company</h1>
          </div>
        </OptionsCheck>
        <ThinLine />
        <ChoicesCheck>
          <div>
            <input type="checkbox" onClick={handle한울캠핑카CheckboxClick} />
            <label htmlFor="">Jayko</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleKnausCheckboxClick} />
            <label htmlFor="">Tourig</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleAidalCheckboxClick} />
            <label htmlFor="">Texino</label>
          </div>
        </ChoicesCheck>
        <OptionsCheck>
          <div>
            <h1>Number of travelers</h1>
          </div>
        </OptionsCheck>
        <ThinLine />
        <ChoicesCheck>
          <div>
            <input type="checkbox" onClick={handlePeople3heckboxClick} />
            <label htmlFor="">3인</label>
          </div>
          <div>
            <input type="checkbox" onClick={handlePeople4CheckboxClick} />
            <label htmlFor="">4인</label>
          </div>
          <div>
            <input type="checkbox" onClick={handlePeople5CheckboxClick} />
            <label htmlFor="">5인</label>
          </div>
        </ChoicesCheck>
        <OptionsCheck>
          <div>
            <h1>Location</h1>
          </div>
        </OptionsCheck>
        <ThinLine />
        <ChoicesCheck>
          <div>
            <input type="checkbox" onClick={handleLocationSeoulCheckboxClick} />
            <label htmlFor="">Seoul</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleLocationBusanCheckboxClick} />
            <label htmlFor="">Busan</label>
          </div>
          <div>
            <input
              type="checkbox"
              onClick={handleLocationGwangjuCheckboxClick}
            />
            <label htmlFor="">Gwangju</label>
          </div>
        </ChoicesCheck>
        <ComapreCars>
          <h1>Compare</h1>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ComapreCars>
      </CostContainer>
      <Order>
        {filteredCaravan.map((data) => {
          return (
            <Link to={`/tuningInfo/${data._id}`} key={data._id}>
              <HMenuDesign>
                <OrderLeft>{/* <TuningImageOfOffer/> */}</OrderLeft>
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
          );
        })}
      </Order>
    </Bigcontainer>
  );
};
export default TuningHMenu;
