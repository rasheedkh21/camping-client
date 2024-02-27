import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
const BASEURL = "https://api-camping.isabek.uz/api/v1/";




const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegisterSubmit = async () => {
    try {
      const response = await fetch(`${BASEURL}auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/home');
      } else {
        setErrors('Registration failed');
      }
    } catch (error) {
      setErrors('Data not found');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
    }

    if (password !== repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleRegisterSubmit();
    }
  };

  const passwordStrength = () => {
    if (password.length === 0) {
      return '';
    } else if (password.length < 6) {
      return 'Weak';
    } else if (password.length < 10) {
      return 'Moderate';
    } else {
      return 'Strong';
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Registrate</h1>
        <div onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span style={ {color:'red'}} className="error">{errors.email}</span>}
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
            {errors.password && <span style={ {color:'red'}} className="error">{errors.password}</span>}
            <div className="password-strength">{passwordStrength()}</div>
          </div>
          <div className="password">
            <label htmlFor="repeatpass">Repeat Your Password</label>
            <input
              type="password"
              id="repeatpass"
              placeholder="Repeat Password..."
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {errors.repeatPassword && <span style={ {color:'red'}} className="error">{errors.repeatPassword}</span>}
          </div>
          <div className="checkbox">
            <div className="check">
              <input type="checkbox" />
              <label>Keep me logged in</label>
            </div>
          </div>
          
          <button className="register" type="submit" onClick={handleSubmit}>
            Registrate
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
