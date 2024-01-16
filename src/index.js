import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Login from "./components/navbar/loginpage/login";
import Register from "./components/navbar/regiterfom/register";
import Aidal from "./components/pages/Aidal/carInfoById";
import Motors from "./components/pages/motors/Motors";
import Places from "./components/pages/CampingPlaces/Places";
import Location from "./components/pages/Location/Location";
import "./index.css";
import AddToCard from "./components/pages/AddToCard/AddToCard";
import CompareModels from "./components/pages/CompareModels/CompareModels";
import Orders from "./components/pages/myOrders/orders";
import Caravan from "./components/pages/caravan/caravan";
import Tuning from "./components/pages/TuningCar/tuning";
import UsedCar from "./components/pages/UsedCar/usedCar";
import DisplayNavbar from "./components/navbar/disolayNavbar";
import Home from "./components/home/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DisplayNavbar>
      <Navbar />
    </DisplayNavbar>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="aidal/:id" element={<Aidal />} />
      <Route path="motors" element={<Motors />} />
      <Route path="caravan" element={<Caravan />} />
      <Route path="tuning" element={<Tuning />} />
      <Route path="usedCar" element={<UsedCar />} />
      <Route path="places" element={<Places />} />
      <Route path="location" element={<Location />} />
      <Route path="card" element={<AddToCard />} />
      <Route path="comparemodels" element={<CompareModels />} />
      <Route path="orders/:id" element={<Orders />} />
    </Routes>
    <DisplayNavbar>
      <Footer />
    </DisplayNavbar>
  </BrowserRouter>
);
