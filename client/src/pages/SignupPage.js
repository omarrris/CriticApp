import React from 'react';
import './Page.css'; // Use the shared CSS file

const SignupPage = () => {
  return (
    <div className="page">
    <h1 className="title">Create An Account</h1>
      <div className="input-container">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
      </div>
      <button className="start-button login-button">Start Watching</button>
    </div>
  );
};

export default SignupPage;
