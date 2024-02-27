import React, { useState } from "react";
import {
  Bigcontainer,
  ImageOfOffer,
  OrderSort,
  Orders,
  Adressdiv,
  ChoicesCheck,
  ComapreCars,
  CostContainer,
  OptionsCheck,
  ThinLine,
} from "../TuningCar/style";
import { Link } from "react-router-dom";
const BASEURL = "https://api-camping.isabek.uz/api/v1/";

const MotorVMenu = () => {
  const [allData, setAllData] = React.useState([]);
  const [checkActive, setCheckActive] = useState(true);
  const [companyCheckboxes, setCompanyCheckboxes] = useState([]);
  const [filteredCaravan, setFilteredCaravan] = useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}motors/getAllMotors`);
        const motor = await response.json();
        setAllData(motor.data);
        setFilteredCaravan(motor.data);
        setCompanyCheckboxes(motor.data);
      } catch (error) {
        console.log("Motor data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  //ckeckbox cheking BY  car name
  const handleCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.name === "Clover");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handle르벤투스CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.name === "Freya");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handleHWCCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.name === "Vandalf");
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
  const handleAirstreamCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Airstream");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleBohoCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Boho");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleVolkswagenCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Volkswagen");
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
            <label htmlFor="">Clover</label>
          </div>
          <div>
            <input type="checkbox" onClick={handle르벤투스CheckboxClick} />
            <label htmlFor="">Freya</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleHWCCheckboxClick} />
            <label htmlFor="">Vandalf</label>
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
            <input type="checkbox" onClick={handleAirstreamCheckboxClick} />
            <label htmlFor="">Airstream</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleBohoCheckboxClick} />
            <label htmlFor="">Boho</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleVolkswagenCheckboxClick} />
            <label htmlFor="">Volkswagen</label>
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
            <input type="checkbox" onClick={handlePeople3heckboxClick}/>
            <label htmlFor="">3인</label>
          </div>
          <div>
            <input type="checkbox" onClick={handlePeople4CheckboxClick} />
            <label htmlFor="">4인</label>
          </div>
          <div>
            <input type="checkbox"  onClick={handlePeople5CheckboxClick} />
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
            <input type="checkbox"  onClick={handleLocationSeoulCheckboxClick}/>
            <label htmlFor="">Seoul</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleLocationBusanCheckboxClick} />
            <label htmlFor="">Busan</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleLocationGwangjuCheckboxClick}/>
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
      <OrderSort>
        {filteredCaravan.map((data) => {
          return (
            <Link to={`/motorInfo/${data._id}`} key={data._id}>
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
                  <a href="/comparemodels">Compare</a>
                </div>
              </Orders>
            </Link>
          );
        })}
      </OrderSort>
    </Bigcontainer>
  );
};

export default MotorVMenu;