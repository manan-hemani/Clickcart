import React from "react";
import { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setstate] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login =async (params) => {
    console.log("Login Successful", formData)
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  }
  
  const signup = async (params) => {
    console.log("Signup Successfull", formData)
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data);
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/")
    }
    else {
      alert(responseData.errors)
    }
  }

  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>{state}</h1>
        <div className="login-signup-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Enter Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Enter Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="login-signup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setstate("Login");
              }}
            >
              LOGIN
            </span>
          </p>
        ) : (
          <p className="login-signup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setstate("Sign Up");
              }}
            >
              CLICK HERE
            </span>
          </p>
        )}
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
