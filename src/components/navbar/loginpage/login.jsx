import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import naver from "../../../assets/naver logo.png";
import google from "../../../assets/google-ion.png";
import ktalk from "../../../assets/kakao-talk-fill.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    console.log(email);
    console.log(password);

    // history.push("/");
  };

  return (
    <body>
      <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
            <button className="signin" type="submit">
              Sign In
            </button>
          </div>
        </form>
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
