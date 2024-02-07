import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group buttons">
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
        <div className="signup-link">
          <a href="#">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
