import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";

const Login = ({ token }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        token(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
  };
  return (
    <div className="login-center">
      <div className="login">
        <h1>Admin Panel</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-details">
            <div>
              <p>Email Address</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <p>Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
