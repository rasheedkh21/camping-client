import React from "react";
import ReactDOM from "react-dom";
import MainComponents from "./script";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Login from "./components/navbar/loginpage/login";
import Register from "./components/navbar/regiterfom/register";

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
    </Routes>
    {!isLoginPage && !isRegisterPage && <Footer />}
  </React.StrictMode>
);
}

ReactDOM.render(<App />, document.getElementById("root"));
