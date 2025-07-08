import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./CSS/LoginSignup.css";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginSignup = () => {
  const [state, setstate] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { token, setToken, backendURL } = useContext(ShopContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (isChecked) {
      try {
        if (state === "Sign Up") {
          console.log(backendURL);
          const response = await axios.post(backendURL + "/api/user/signup", {
            name,
            email,
            password,
          });
          console.log(response.data);
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            toast.success("Account Created Successfully");
          } else {
            toast.error(response.data.errors);
          }
        } else {
          const response = await axios.post(backendURL + "/api/user/login", {
            email,
            password,
          });
          console.log(response.data);
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            toast.success("Logged In Successfully");
          } else {
            toast.error(response.data.errors);
          }
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    } else {
      toast.error("Please check the box to proceed");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="login-signup">
        <div className="login-signup-container">
          <h1>{state}</h1>
          <div className="login-signup-fields">
            {state === "Sign Up" ? (
              <input
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
              />
            ) : (
              <></>
            )}
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email Address"
            />
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <button>Continue</button>
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
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              id="agree"
            />
            <p>By continuing, I agree the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;
