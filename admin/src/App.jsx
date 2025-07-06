import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./pages/admin/admin";
import Login from "./Components/Login/Login";
import { ToastContainer} from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"");

  useEffect(() => {
    localStorage.setItem('token',token)
  }, [token])
  
  return (
    <div>
      <ToastContainer />
      {token === "" ? (
        <Login token={token} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <Admin token={token} />
        </>
      )}
    </div>
  );
};

export default App;
