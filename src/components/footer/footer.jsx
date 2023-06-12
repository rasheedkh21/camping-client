import React from "react";
import { Footerdiv, Servicesdiv, Writings } from "./style";
import youtube from "../../assets/youteube.png";
import insta from "../../assets/insta.png";
import naver from "../../assets/naver.png";

const Footer = () => {
  return (
    <div>
      <Footerdiv>
        <h1>Camper</h1>
        <Servicesdiv>
          <h1>Services</h1>
          <Writings>
            <p>Camping</p>
            <p>Lodging</p>
            <p>Harbour</p>
            <p>Day Use</p>
          </Writings>
        </Servicesdiv>
        <Servicesdiv>
          <h1>Menu</h1>
          <Writings>
            <p>About</p>
            <p>Services</p>
            <p>Booking</p>
            <p>Blog</p>
          </Writings>
        </Servicesdiv>
        <div>
          <h1 style={{ fontSize: `20xp`, fontFamily: `monospace` }}>Contact</h1>
          <div
            style={{
              display: "flex",
              flexDirection: `row`,
              justifyContent: `space-evenly`,
              alignItems: `center`,
              marginTop: `40px`,
            }}
          >
            <img src={youtube} alt="none" />
            <img src={insta} alt="none" />
            <img src={naver} alt="none" />
          </div>
          <p style={{ color: `white` }}>021 Korea Seul, LA</p>
          <p style={{ color: `white` }}>Camper@example.com</p>
          <p style={{ color: `white` }}>(021) 345-6789-99</p>
        </div>
      </Footerdiv>
    </div>
  );
};

export default Footer;
