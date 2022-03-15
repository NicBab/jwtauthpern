import React from "react";
import { Link } from "react-router-dom";
import './css/Home.css'

const Home = () => {
  return (
    <>
      <h1 className="homeText">Home</h1>
      <div className="buttons">
      <button className="btn btn-primary">
        <Link to="/login">Login</Link>
      </button>
      <button className="btn btn-info">
        <Link to="/register">Register</Link>
      </button>
      </div>

    </>
  );
};

export default Home;
