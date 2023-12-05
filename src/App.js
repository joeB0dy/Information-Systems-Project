import "./styles.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import AdminHome from "./pages/AdminPage/AdminHome";
import AuthorHome from "./pages/AuthorPage/AuthorHome";
import CPHome from "./pages/CPChairPage/CPHome";
import ReviewerHome from "./pages/ReviewerPage/ReviewerHome";


export default function App() {
  //declare variables and functions b4 return.
  const navigate = useNavigate();
  const [data, setData] = useState(null); //USED TO DISPLAY JSON.

  useEffect(() => {
    // Fetch data from Express server
    fetch('http://localhost:8081/api/account-data')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.error("Error fetching data", err));
}, []);


  return (
    <div className="App">
      <h1>Conference Paper System </h1>
      <button onClick={() => navigate("/login")}>Login </button>
      <button onClick={() => navigate("/")}>Home </button>
      <div>
      <h1>Account Data</h1>
      <ul>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </ul>
 
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login/Admin" element={<AdminHome />} />
          <Route path="/login/CPC" element={<CPHome />} />
          <Route path="/login/Author" element={<AuthorHome />} />
          <Route path="/login/Reviewer" element={<ReviewerHome />} />
        </Routes>
      </div>
    </div>
  );
}

/*
  useEffect(() => {
    // Fetch data from Express server
    fetch("http://localhost:8081/api/account-data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data", err));
  });

*/