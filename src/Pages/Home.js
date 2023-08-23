import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  return (
    <div class="card-body p-5">
      <h2 class="text-uppercase text-center mb-5">User Details</h2>
      <p class="text-center">Welcome - {userName.name}</p>
      <p class="text-center"> Email ID :{userName.email}</p>
      <p class="text-center"> MobileNumber :{userName.number}</p>
      <p class="text-center"> AGE :{userName.age}</p>
      <p class="text-center"> Gender :{userName.gender}</p>

      <button
        onClick={handleLogout}
        type="button"
        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body center"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
