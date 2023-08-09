import React from 'react';
import './style.css';
import message from "../../../assets/Vector (1).png"

const ImageWithDropdown = () => {
  return (
    <div className="container1"> 
      <div className="dropdown">
        <img src={message} className='dropbtn' alt="none" />
        <div className="dropdown-content">
          <a href="/orders" style={{color:"black", fontSize:"20px"}}>My orders</a>
          <a href="#" style={{color:"black", fontSize:"20px"}}>Settings</a>
          <a href="#" style={{color:"black", fontSize:"20px"}}>Log out</a>
        </div>
      </div>
    </div>
  );
};

export default ImageWithDropdown;