import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 // const [loginError, setLoginError] = useState(false);
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //make a condition for success and failure of login.
    if(username == "admin" && password == "root") {
      console.log("admin logged in");
      navigate("/admin"); 
    }
    else if (username =="author" && password == "123") {
      console.log("author logged in");
      navigate("/author"); 
    }
    else if (username =="CPC" && password == "123") {
      console.log("CPC logged in");
      navigate("/cpc"); 
    }
    else if (username =="reviewer" && password == "123") {
      console.log("reviewer logged in")
      navigate("/review")
    }
    else {
      alert ("Invalid credentials. try again.")
      navigate("/login")
    }
  };
  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label> Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <div>
        <Link to="/signup">Register New Account </Link>
      </div>
    </div>
  );
}

export default Login;
