import React from "react";
import { AddButtonDiv, CarModels, CompCArsBAck, OrderCars } from "./CompareModelsStyle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import car from "../../../assets/offercar1.png";
import { Link } from "react-router-dom";

const CompareModels = () => {
  return (
    <div>
        <CompCArsBAck>
        <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
        <Link to="/home">Home /</Link>
        <Link to="/motors">Motors /</Link>
        <Link to="/comparemodels">Compare</Link>
        </div>
        <h1>Compare our models</h1>
        </CompCArsBAck>
      <AddButtonDiv>
        <div>
          <h1>Compare Model </h1>
        </div>
        <div>
          <AddCircleOutlineIcon style={{ cursor: "pointer" }} />
          <p>Add model</p>
        </div>
      </AddButtonDiv>
      <OrderCars>
        <CarModels>
          <div>
            <img src={car} alt="car" />
          </div>
          <h1>Name of car</h1>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <button>Order</button>
        </CarModels>
        <CarModels>
          <div>
            <img src={car} alt="car" />
          </div>
          <h1>Name of car</h1>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <button>Order</button>
        </CarModels>
        <CarModels>
          <div>
            <img src={car} alt="car" />
          </div>
          <h1>Name of car</h1>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <select name="" id="">
            <option value="">Model</option>
          </select>
          <button>Order</button>
        </CarModels>
      </OrderCars>
    </div>
  );
};

export default CompareModels;
