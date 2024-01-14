import React from "react";
import ReactDOM from "react-dom";
import MainComponents from "./script";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import CV from "./components/pages/cvDownland/cv";
import Caravan from "./components/pages/caravan/caravan";
import Tuning from "./components/pages/TuningCar/tuning";
import UsedCar from "./components/pages/UsedCar/usedCar";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

function MainRoutes() {
  const location = useLocation();
  const isLoginPage = location.pathname === `/login`;
  const isRegisterPage = location.pathname === `/register`;

  return (
    <React.StrictMode>
      {!isLoginPage && !isRegisterPage && <Navbar />}
      <Routes>
        <Route path="test" element={<CV />} />
        <Route path="/" element={<MainComponents />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="aidal/:id" element={<Aidal />} />
        <Route path="motors" element={<Motors/>} />
        <Route path="caravan" element={< Caravan/>} />
        <Route path="tuning" element={< Tuning/>} />
        <Route path="usedCar" element={< UsedCar/>} />
        <Route path="places" element={<Places />} />
        <Route path="location" element={<Location />} />
        <Route path="card" element={<AddToCard />} />
        <Route path="comparemodels" element={<CompareModels />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
      {!isLoginPage && !isRegisterPage && <Footer />}
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
