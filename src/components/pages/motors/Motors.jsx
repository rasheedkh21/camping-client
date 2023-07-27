import React from "react";
import Example from "../carouselcomp/carousel";
import {
  Adressdiv,
  Bigcontainer,
  CancelButton,
  Choices,
  ChoicesCheck,
  ComapreCars,
  CostContainer,
  ImageOfOffer,
  ItemContainer,
  ItemSort,
  MotorsBack,
  Options,
  OptionsCheck,
  OrderSort,
  Orders,
  SelectionCars,
  SelectionDiv,
  SelectionNumbers,
  ThinLine,
} from "./style";

const Motors = () => {
  return (
    <div>
      <MotorsBack>
        <h2>Home / Motors</h2>
        <h3>Our Ranges</h3>
        <h1>Motors</h1>
      </MotorsBack>
      <Bigcontainer>
        <CostContainer>
          <div>
            <h1>Cost of cars</h1>
          </div>
          <ThinLine />
          <Adressdiv>
            <div>
              <label htmlFor="">From</label>
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
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">5</label>
            </div>
            <div>
              <input type="checkbox" name="check" id="" />
              <label htmlFor="">10</label>
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
            <div>
              <h1>Item 250000</h1>
            </div>
            <SelectionDiv>
              <label htmlFor="input">Sort by</label>
              <SelectionCars placeholder="select">
                <option value="">Car</option>
                <option value="">Car</option>
                <option value="">Car</option>
                <option value="">Car</option>
                <option value="">Car</option>
              </SelectionCars>
              <div>
                <SelectionNumbers name="" id="">
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </SelectionNumbers>
              </div>
              <div
                style={{
                  width: "80px",
                  height: "30px",
                  border: "1px solid black",
                }}
              >
                Icons
              </div>
            </SelectionDiv>
          </ItemSort>
          <ThinLine />
          <OrderSort>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
            <Orders>
              <ImageOfOffer />
              <h1>Name of the car</h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "40px" }}
              >
                <p>Brand name</p>
                <p>icons</p>
              </div>
              <h2>250$</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <button>Oreder</button>
                <button>Compare</button>
              </div>
            </Orders>
          </OrderSort>
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Motors;
