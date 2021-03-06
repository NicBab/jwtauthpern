import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import './css/Dashboard.css'

const Dashboard = ({ setAuth }) => {
  
  const navigate = useNavigate()
  const [name, setName] = useState("");

  const getName = async () => {
    try {
      const response = await fetch("http://localhost:3000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("You have logged out!");
      navigate("/")
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <>
      <h1 className="dashboardText"> Dashboard </h1>
      <div className="userName">Welcome, {name} !</div>
      <div className="logoutButton">
      <button className="btn btn-primary" onClick={(e) => logout(e)}>
        Logout
      </button>
      </div>
     
    </>
  );
};

export default Dashboard;
