import React from 'react';
import './style.css';
import message from "../../../assets/Vector (1).png"

const ImageWithDropdown = () => {
  return (
    <div className="container">
      {/* <img src={message} alt="Your Image" /> */}
      <div className="dropdown">
        {/* <button className="dropbtn">Dropdown</button> */}
        <img src={message} className='dropbtn' alt="" />
        <div className="dropdown-content">
          <a href="#">My orders</a>
          <a href="#">Settings</a>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default ImageWithDropdown;