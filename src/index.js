import React from 'react';
import ReactDOM from 'react-dom/client';
import MainComponents from './script';
import Footer from "./components/footer/footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainComponents/>
    <Footer/>
  </React.StrictMode>
);

