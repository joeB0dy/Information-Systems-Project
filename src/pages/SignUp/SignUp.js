//SIGNUP and API Calls developed by Sam Jose.
import React, { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

function SignUp() {
  const [ID, setID] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setF] = useState("");
  const [lname, setL] = useState("");
  const [role, setRole] = useState("");

//const nav = useNavigate();
const register = async (ID, email, username, password, fname, lname, role) => {
  try {
    const response = await axios.post('http://localhost:8081/api/register', {
      ID: ID,
      email: email,
      username: username,
      password: password,
      fname: fname,
      lname: lname,
      role:role
  
    });
    console.log(response);
    alert("Account Made, verification send to email.");
    return response;
  } catch (error) {
    console.error('Registration error', error);
    alert("Registration failed.");
  }
}

  const displayContent = async (e) => {
    e.preventDefault();
    setID(Math.floor(Math.random()* 15))
    console.log(ID, email, username, password, fname, lname, role);
    await register(ID, email, username, password, fname, lname, role);
   
    alert("Account Made, verification sent to email.")
  };

  return (
    <div className="div-container">
      <h2>SIGNUP PAGE</h2>
      <form action="">
        <div className="FName">
          <label htmlFor="FName"></label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setF(e.target.value)}
            placeholder="Enter First Name"
          />
        </div>
        <div className="last">
          <label htmlFor="last"></label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setL(e.target.value)}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="email">
          <label htmlFor="email"> </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="Username">
          <label htmlFor="Username"> </label>
          <input
            type="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>
        <div className="Password">
          <label htmlFor="Password"> </label>
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"/>
        </div>
        <div className="Role">
          <label htmlFor="Role">Select Your Role</label>
          <select name="Roles" id="Roles" onChange={(e) => setRole(e.target.value)}>
            <option value="select">Select an Option</option>
            <option value="Conference Program Chair">Conference Program Chair</option>
            <option value="Author">Author</option>
            <option value="Reviewer">Reviewer</option>
          </select>   
        </div>
        {/* ... other elements ... */}

        <button onClick={displayContent}>Sign Up! </button>
      </form>
    </div>
  );
}

export default SignUp;




/*

import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

//import axios from "axios";


function SignUp() {
  //variables and functions
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setF] = useState("");
  const [lname, setL] = useState("");

  const [role, setRole] = useState(""); //send to Accounts Table in database.

const nav = useNavigate();
/*
  const register = async (email, password,) => {
    try {
      const response = await axios.post('http://localhost:8081/api/register', {
        email: email,
        password: password,
        secQ1: secQ1,
        secQ2: secQ2,
        secQ3: secQ3
      });
      console.log(response);
      alert("Account Made, verification send to email.");
      return response;
    } catch (error) {
      console.error('Registration error', error);
      alert("Registration failed.");
    }
  }
 //

 const displayContent = async (e) => {
    e.preventDefault();
    console.log(email, username, password,  fname, lname, role);
   
    // Call the register method from AuthService
 //   await register(email, password, sec1, sec2, sec3);
  //  console.log(response); // Handle the response accordingly
    alert("Account Made, verification send to email.")
  };



  return (
    <div className="div-container">
      <h2>SIGNUP PAGE</h2>

      <form action="">
      <div className="FName">
          <label htmlFor="FName"> </label>
          <input
            type="first"
            value={email}
            onChange={(e) => setF(e.target.value)}
            placeholder="Enter First Name"
          />
        </div>
        <div className="last">
          <label htmlFor="last"> </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setL(e.target.value)}
            placeholder="Enter Last Name"
          />
        </div>

        <div className="email">
          <label htmlFor="email"> </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="Username">
          <label htmlFor="Username"> </label>
          <input
            type="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>

        <div className="Password">
          <label htmlFor="Password"> </label>
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"/>
        </div>
        <div className="Role">
            <label htmlFor="Role">Select Your Role</label>

    <select name="Roles" id="Roles">
     <option value="CPC" onChange={setRole("Conference Program Chair")}>Conference Program Chair</option>
     <option value="Author"onChange={setRole("Author")}>Author</option>
     <option value="Reviewer"onChange={setRole("Reviewer")}>Reviewer</option>
        </select>   
        </div>
 
        <div>
          <button onClick={displayContent}>SIGN UP </button>
          <p>YOU AGREE TO OUR TERMS AND CONDITIONS. </p>
        </div>
        <div>
          <button onClick={()=> nav("/signup/passgen")}>Password Generator Page </button>
        </div>
      </form>
    </div>
  );


}
export default SignUp;
*/