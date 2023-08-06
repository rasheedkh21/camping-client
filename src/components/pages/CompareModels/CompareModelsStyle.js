import styled from "styled-components";
import BackCar from "../../../assets/car1.png";


export const CompCArsBAck=styled.div`
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
  h1{

    color: #FFF;
font-family: monospace;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;
  }
  a{
    text-decoration: none;
    color: #FFF;
font-family: monospace;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
  }
`


export const AddButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (max-width: 420px) {
      display: flex;
      flex-direction: column;
    }
  }
  p {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h1 {
    color: var(--text, #373737);
    font-family: monospace;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const OrderCars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 742px;
`;
export const CarModels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    height: 198px;
    width: 100%;
  }
  img {
    width: 100%;
    height: 173px;
  }
  select {
    margin-top: 40px;
    width: 100%;
    border: none;
    color: rgba(55, 55, 55, 0.8);
    font-family: monospace;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  button {
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    border: 2px solid var(--blue, #006dab);

    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    color: #006dab;
    font-family: monospace;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 50px;
  }
  button:hover {
    background-color: #006dab;
    color: #fff;
  }
`;
