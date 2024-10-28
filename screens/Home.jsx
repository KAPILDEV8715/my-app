import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeStyle.css';

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Home Component</h1>
      </div>

      <div className="nav-buttons">
        <Link to="/registration" className="nav-button">
          Add User
        </Link>
        <Link to="/data" className="nav-button">
          User Profiles
        </Link>
        <Link to="/file-upload" className="nav-button">
          Upload File
        </Link>
        <Link to="/file-download" className="nav-button">
          Download File
        </Link>
      </div>
    </div>
  );
};

export default Home;
