import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (username == 'fathima@gmail.com' && password =='test123') {
      navigate("/app1"); // Navigate to App1 if login is successful
      
    } else {
      alert("Invalid Password or Username"); 
      
    }
  }

  return (
    <div className="div-container">
      
      <h1>Login Page</h1>
      <div className="login-div">
        <form onSubmit={onSubmit}>
          <label>
            Enter Your User Name:
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Enter the Password:
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" className="loginbutn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
