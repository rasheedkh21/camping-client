import React from 'react';
import ReactDOM from 'react-dom/client';
import MainComponents from './script';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar/navbar';
// import Footer from './components/footer/footer';
import Login from './components/navbar/loginpage/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   {/* <Navbar/> */}
   <Routes>
    <Route path="/" element={<MainComponents/>}/>
    <Route path='login' element={<Login/>}/>
   </Routes>
   {/* <Footer/> */}
   </BrowserRouter>
  </React.StrictMode>
);

