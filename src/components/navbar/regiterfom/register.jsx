import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // Create state variables to hold the form field values and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic validation to check for empty fields and password matching
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (password !== repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
    }

    // Check if there are any errors before submitting the form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, we can submit the data here
      // For this example, we'll just log the values
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Registrate</h1>
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
          <Link to="/home">
          <button className="register" type="submit">
            Registrate
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
