import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css'; 
import logo from '../assets/critic-high-resolution-logo-transparent.png'; 

const StartPage = () => {
const navigate = useNavigate();

  return (
    <div className="page">
      <img src={logo} alt="Critic Logo" className="logo" />
      <div className="button-container">
      <button className="start-button" onClick={() => navigate('/login')}>Login</button>
      <button className="start-button" onClick={() => navigate('/signup')}>Create an Account</button>
      </div>
    </div>
  );
};

export default StartPage;
