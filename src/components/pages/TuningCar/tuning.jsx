import React, { useState } from "react";

import {
  Adressdiv,
  Bigcontainer,
  CancelButton,
  ChoicesCheck,
  ComapreCars,
  CostContainer,
  ItemContainer,
  ItemSort,
  MotorsBack,
  OptionsCheck,
  SelectionCars,
  SelectionDiv,
  SelectionNumbers,
  ThinLine,
} from "../motors/style";
import { Link } from "react-router-dom";
import TuningController from "./TuningController";
import TuningSwitchControl from "../caravan/caravanSwitchController";
import { TunedCarCard } from "../../test/tuningCarData";


const Tuning = ({ onClick }) => {
  const [active, setActive] = useState(true);
  const [filteredData, setFilteredData] = useState(TunedCarCard.carList);
  const handleClick = () => {
    const sortedCars = [...TunedCarCard.carList];
    sortedCars.sort((a, b) => {
      const nameA = a.car.name.toLowerCase();
      const nameB = b.car.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });

    const filteredCars = sortedCars.filter((data) =>
      data.car.name.startsWith("르벤투스")
    );

    setFilteredData(filteredCars);
  };
  return (
    <div style={{ background: "#fafafa" }}>
      <MotorsBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/">Home /</Link>
          <Link to="/usedCar">Used Cars</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Tuning</h1>
      </MotorsBack>
      <Bigcontainer>
        <CostContainer>
        <div style={{borderBottom:"1px solid  rgba(55, 55, 55, 0.5)", paddingTop:11}}>
            <h1>Cost of cars</h1>
          </div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <g clip-path="url(#clip0_221_1654)">
                  <path
                    d="M14.2046 4.375L7.95459 10.625L1.70459 4.375"
                    stroke="black"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_221_1654">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="matrix(0 1 -1 0 15.4546 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </OptionsCheck>
          <ThinLine />
          <ChoicesCheck>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Aidal</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Knal</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Escape</label>
            </div>
          </ChoicesCheck>
          <OptionsCheck>
            <div>
              <h1>Company</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <g clip-path="url(#clip0_221_1654)">
                  <path
                    d="M14.2046 4.375L7.95459 10.625L1.70459 4.375"
                    stroke="black"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_221_1654">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="matrix(0 1 -1 0 15.4546 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </OptionsCheck>
          <ThinLine />
          <ChoicesCheck>
            <div>
              <input type="checkbox" name="check" id="" onClick={handleClick} />
              <label htmlFor="">르벤투스S+</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Knal</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Escape</label>
            </div>
          </ChoicesCheck>
          <OptionsCheck>
            <div>
              <h1>Number of travelers</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <g clip-path="url(#clip0_221_1654)">
                  <path
                    d="M14.2046 4.375L7.95459 10.625L1.70459 4.375"
                    stroke="black"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_221_1654">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="matrix(0 1 -1 0 15.4546 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </OptionsCheck>
          <ThinLine />
          <ChoicesCheck>
            <div>
              <input type="checkbox" name="check" id="" onClick={handleClick} />
              <label htmlFor="">5인</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">4인</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">15</label>
            </div>
          </ChoicesCheck>
          <OptionsCheck>
            <div>
              <h1>Location</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <g clip-path="url(#clip0_221_1654)">
                  <path
                    d="M14.2046 4.375L7.95459 10.625L1.70459 4.375"
                    stroke="black"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_221_1654">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="matrix(0 1 -1 0 15.4546 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </OptionsCheck>
          <ThinLine />
          <ChoicesCheck>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Seoul</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Busan</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">Incheon</label>
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


        <ItemContainer>
          <ItemSort>
          <div style={{display:"flex", gap:30, alignItems:"center", justifyContent:"center"}}>
              <h1>Item</h1><span style={{color:"#006DAB", fontSize:"18px"}}>25000</span>
            </div>
            <SelectionDiv>
              <label htmlFor="input">Sort by</label>
              <SelectionCars placeholder="select">
                <option value="">Tuning Standart</option>
                <option value="">Tuning Premium</option>
                <option value="">Tuning Gold</option>
              </SelectionCars>
              <div>
                <SelectionNumbers name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </SelectionNumbers>
              </div>
            </SelectionDiv>
            <TuningController onClick={(state)=>{
                setActive(state)
            }}/>
          </ItemSort>
          <TuningSwitchControl active={active}/>
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Tuning;