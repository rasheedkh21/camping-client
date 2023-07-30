import styled from "styled-components";
import slidercar from "../../../assets/slidecar.png";
import Car from "../../../assets/offercar1.png";
import BackCar from "../../../assets/car1.png";




export const MotorsBack = styled.div`
  background-image: url(${BackCar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    font-family: monospace;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-family: monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }
  h3 {
    color: #fff;
    font-family: monospace;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }
`;

export const Bigcontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  gap: 15px;
  justify-content: start;
  align-items: start;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const CostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;
  flex: 1;
  h1 {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;
  flex: 4;
`;
export const ItemSort = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  h1 {
    color: #373737;
    font-family: monospace;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }
`;
export const SelectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: fit-content;
  label {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;
export const SelectionCars = styled.select`
  width: 50%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  color: rgba(55, 55, 55, 0.6);
  font-family: monospace;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
export const SelectionNumbers = styled.select`
  width: 80px;
  height: 30px;
  color: rgba(55, 55, 55, 0.6);
  font-family: monospace;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
export const ThinLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(55, 55, 55, 0.5);
  /* margin-top: 10px; */
`;
export const OrderSort = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  height: fit-content;
  gap: 20px;
  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
    height: fit-content;
  }
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: auto;
    width: 100%;
    height: fit-content;
  }
`;
export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 307px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  h1 {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* margin-left: -100px; */
  }
  h2 {
    color: var(--blue, #006dab);
    font-family: monospace;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: -150px;
  }
  p {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  button {
    border-radius: 10px;
    border: 1px solid var(--blue, #006dab);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    width: 94px;
    height: 35px;
    flex-shrink: 0;
    color: var(--blue, #006dab);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button:hover {
    cursor: pointer;
    background-color: #006dab;
    color: white;
  }
`;
export const ImageOfOffer = styled.div`
  background-image: url(${slidercar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 202.42px;
  height: 137.433px;
  flex-shrink: 0;
  display: flex;
`;
export const Adressdiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
  }
  label {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
  }
  input {
    width: 91px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.6);
  }
`;
export const OptionsCheck = styled.div`
  /* margin-top: 30px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
  }
`;
export const ChoicesCheck = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
  }
  label {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
  }
  input {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #666;
    background: #fff;
    cursor: pointer;
  }
`;
export const CancelButton = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  button {
    width: 115.804px;
    height: 38.968px;
    flex-shrink: 0;
    border-radius: 60px;
    background: var(--blue, #006dab);

    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-family: monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button:hover {
    border-radius: 60px;
    background: var(--sariq, #ff7a00);

    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  }
`;
export const ComapreCars = styled.div`
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  div {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  span {
    width: 76px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    background-image: url(${Car});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  h1 {
    color: var(--blue, #006dab);
    font-family: monospace;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
