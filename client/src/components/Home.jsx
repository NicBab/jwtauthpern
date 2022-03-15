import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-center">Home</h1>
      <button className="btn btn-warning mx-5">
        <Link to="/login">Login</Link>
      </button>
      <button className="btn btn-warning">
        <Link to="/register">Register</Link>
      </button>
    </>
  );
};

export default Home;
