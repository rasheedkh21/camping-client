import React from "react";
import ReactDOM from "react-dom";
import MainComponents from "./script";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Login from "./components/navbar/loginpage/login";
import Register from "./components/navbar/regiterfom/register";
import Aidal from "./components/pages/Aidal/Aidal";
import Motors from "./components/pages/motors/Motors";
import Places from "./components/pages/CampingPlaces/Places";
import Location from "./components/pages/Location/Location";

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
    {!isLoginPage &&  !isRegisterPage && <Navbar />}
    <Routes>
      <Route path="/" element={<MainComponents />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="aidal" element={<Aidal/>} />
      <Route path="motors" element={<Motors/>}/>
      <Route path="places" element={<Places/>}/>
      <Route path="location" element={<Location/>}/>
    </Routes>
    {!isLoginPage && !isRegisterPage && <Footer />}
  </React.StrictMode>
);
}

ReactDOM.render(<App />, document.getElementById("root"));
