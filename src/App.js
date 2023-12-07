import "./styles.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import AdminHome from "./pages/AdminPage/AdminHome";
import AuthorHome from "./pages/AuthorPage/AuthorHome";
import AuthorPapers from "./pages/AuthorPage/AuthorPapers";
import CPHome from "./pages/CPChairPage/CPHome";
import ReviewerHome from "./pages/ReviewerPage/ReviewerHome";
import AdminCreate from "./pages/AdminPage/AdminCreate";
import SignUp from "./pages/SignUp/SignUp";
import ReviewPaper from "./pages/ReviewerPage/ReviewerPaper";
import SelectConf from "./pages/SelectConference/selectConf";
import CPCCreateConference from "./pages/CPChairPage/CPCreate";


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
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/cpc" element={<CPHome />} />
          <Route path="/author" element={<AuthorHome />} />
          <Route path="/author/my-papers" element={<AuthorPapers/>}/>
          <Route path="/review" element={<ReviewerHome />} />
          <Route path="/review/my-papers" element ={<ReviewPaper/>}/>
          <Route path="/admin/create" element={<AdminCreate/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/selectconf" element={<SelectConf/>}/>
          <Route path="/cpcreate" element={<CPCCreateConference/>}/>


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