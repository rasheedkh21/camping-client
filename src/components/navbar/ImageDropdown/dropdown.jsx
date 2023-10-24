import React from 'react';
import './style.css';
import message from "../../../assets/Vector (1).png"
import { Link } from 'react-router-dom';

const ImageWithDropdown = () => {
  return (
    <div className="container1"> 
      <div className="dropdown">
        <img src={message} className='dropbtn' alt="none" />
        <div className="dropdown-content">
          <Link to="/orders" style={{color:"black", fontSize:"20px"}}>My orders</Link>
          <Link to="#" style={{color:"black", fontSize:"20px"}}>Settings</Link>
          <Link to="#" style={{color:"black", fontSize:"20px"}}>Log out</Link>
        </div>
      </div>
    </div>
  );
};

export default ImageWithDropdown;