import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import naver from "../../../assets/naver logo.png";
import google from "../../../assets/google-ion.png";
import ktalk from "../../../assets/kakao-talk-fill.png";
const BASEURL = "https://api-camping.isabek.uz/api/v1/";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to manage error messages

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${BASEURL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/home");
      } else {
        setError("Invalid email or password"); // Set error message on failure
      }
    } catch (error) {
      setError("Your data is not found");
    }
  };

  return (
    <body>
      <div className="container">
        <h1>Sign In</h1>
        <div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(""); // Clear error message when input changes
              }}
            />
            <span className="error">{error}</span> {/* Display error message */}
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // Clear error message when input changes
              }}
            />
            <span className="error">{error}</span> {/* Display error message */}
          </div>
          <div className="checkbox">
            <div className="check">
              <input type="checkbox" />
              <label>Keep me logged in</label>
            </div>
            <div>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div>
            <button className="signin" type="submit" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
        </div>
        <div className="or">
          <h3>Or</h3>
        </div>
        <div className="logos">
          <div className="circle-green">
            <a href="#">
              <img src={naver} alt="Naver" />
            </a>
          </div>
          <div className="circle-red">
            <a href="#">
              <img src={google} alt="Google" />
            </a>
          </div>
          <div className="circle-yellow">
            <a href="#">
              <img src={ktalk} alt="KakaoTalk" />
            </a>
          </div>
        </div>
        <Link to="/register">
          <button className="register">CREATE ACCOUNT</button>
        </Link>
      </div>
    </body>
  );
};

export default Login;

