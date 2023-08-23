import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    mobileNumber: "",
    gender: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
        Create A New Account
      </h5>

      <div className="form-outline mb-4">
        <input
          placeholder="Enter Your Name"
          type="text"
          className="form-control form-control-lg"
          name="name"
          value={input.name}
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>

      <div className="form-outline mb-4">
        <input
          placeholder="Enter Valid Email Address"
          type="email"
          className="form-control form-control-lg"
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
      <div className="form-outline mb-4">
        <input
          placeholder="Enter Password"
          type="password"
          className="form-control form-control-lg"
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
      <div className="form-outline mb-4">
        <input
          placeholder="Age"
          type="age"
          className="form-control form-control-lg"
          name="age"
          value={input.age}
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>
      <div className="form-outline mb-4">
        <input
          placeholder="Enter Valid Mobile Number"
          type="number"
          className="form-control form-control-lg"
          name="number"
          value={input.number}
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>
      <div className="form-outline mb-4">
        <input
          placeholder="Enter Gender"
          type="gender"
          className="form-control form-control-lg"
          name="gender"
          value={input.gender}
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>

      <div className="pt-1 mb-4">
        <button className="btn btn-dark btn-lg btn-block" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
