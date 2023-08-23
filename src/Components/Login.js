import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import your custom CSS file

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Sign into your account</h2>

        <div className="form-group">
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Enter Password"
            type="password"
            className="form-control"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <button className="btn btn-dark btn-block" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
