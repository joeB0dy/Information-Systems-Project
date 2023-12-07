//setup code for api calls to query from db
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
app.use(cors());


const PORT = 8081;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//local sql server where its not nonsense.
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "infosysprj",
});  


app.listen(PORT, () => {
  console.log("listening on PORT", PORT);
});

//api data , login, register calls. app.get, app.post

app.post("/api/register", async (req,res) => {
  const {ID, email, username, password, fname, lname, role} = req.body; //sent in this order by axios
  db.query("Insert into Account_Info (`Account_ID`,`Email`, `Username`, `Password`, `F_Name`, `L_Name`) VALUES (?,?,?,?,?,?)",[ID, email, username, password, fname, lname], (err, result) =>{
    if (err) {
      console.log(err);
      res.status(500).send('Server Error');
  } else {
      res.status(200).json({ success: true, message: "Registration successful" });
  }
  });
});

app.post('/api/login', (req, res) => {
  const username = req.body.username; // Assuming you are using email to login
  const password = req.body.password;
  db.query(`SELECT username, password from ACCOUNT_INFO WHERE username =${username} AND password=${password}`, [username, password], (err,result) => {
    if (err) {
      console.error("Error during password comparison", err);
      res.status(500).json({ success: false, message: "Internal server error" });
      return;
  }
  else {
    res.redirect("localhost:3000/author");  //compare roles here.
  }
  })
});


// Endpoint to just display data in a json format.
app.get("/api/account-data", (req, res) => {
  // Query your database and send data

    db.query("SELECT * FROM Account_Info", (err, result) => {
      if (err) throw err;
     setTimeout(() =>res.json(result), 10000);
     console.log(res.json(result));
    });
   
  
    //console.log(res);
});



/*
const mongoose = require('mongoose');
const localdb = "mongodb+srv://sjoseroot:root@cluster0.vcwj2gx.mongodb.net/"

const mongodb = async () => {
  await mongoose.connect(localdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("mongo db connected.");
}
//https://aiven.io/
const db = mysql.createConnection({
  host: "mysql-1a630c24-abjsam34-5762.a.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_YFxA-efuCi1mHAtNRmS",
  database: "defaultdb",
});  //deleted semi-colon. see if works now

*/