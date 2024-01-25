import React, { useState } from 'react'
import { Adressdiv, Bigcontainer, CancelButton, ChoicesCheck, ComapreCars, CostContainer, ImageOfOffer, OptionsCheck, OrderSort, Orders, ThinLine } from '../TuningCar/style';
import { Link } from 'react-router-dom';

const BASEURL = "http://localhost:5050/api/v1/";

const UsedCArVMenu = () => {
  const [allData, setAllData] = React.useState([]);
  const [checkActive, setCheckActive] = useState(true);
  const [companyCheckboxes, setCompanyCheckboxes] = useState([]);
  const [filteredCaravan, setFilteredCaravan] = useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}usedCar/getAllUsedCar`);
        const usedCar = await response.json();
        setAllData(usedCar.data);
        setFilteredCaravan(usedCar.data);
        setCompanyCheckboxes(usedCar.data);
      } catch (error) {
        console.log("Used Car data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  //ckeckbox cheking BY  car name
  const handleCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.name === "Gentra");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handle르벤투스CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.name === "르벤투스");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handleHWCCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.name === "HWC");
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
      const checkedBox = allData.filter((data) => data.company === "Knaus");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleAidalCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Aidal");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handle한울캠핑카CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "한울캠핑카");
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
            <label htmlFor="">트레블라인</label>
          </div>
          <div>
            <input type="checkbox" onClick={handle르벤투스CheckboxClick} />
            <label htmlFor="">르벤투스</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleHWCCheckboxClick} />
            <label htmlFor="">HWC</label>
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
            <label htmlFor="">한울캠핑카</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleKnausCheckboxClick} />
            <label htmlFor="">Knaus</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleAidalCheckboxClick} />
            <label htmlFor="">Aidal</label>
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
        <CancelButton>
          <div>
            <button>Cancel</button>
            <button>Search</button>
          </div>
        </CancelButton>
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
            <Link to={`/usedCarInfo/${data._id}`} key={data._id}>
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


export default UsedCArVMenu