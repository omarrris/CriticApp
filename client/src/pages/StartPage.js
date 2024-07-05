import React from 'react';
import './StartPage.css'; 
import logo from '../assets/critic-high-resolution-logo-transparent.png'; 

const StartPage = () => {
  return (
    <div className="start-page">
      <img src={logo} alt="Critic Logo" className="logo" />
      <div className="button-container">
        <button className="start-button">Login</button>
        <button className="start-button">Create an Account</button>
      </div>
    </div>
  );
};

export default StartPage;
