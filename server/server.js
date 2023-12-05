//setup code for api calls to query from db
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const http = require('http');

const PORT = 8081;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//website i hosted from = fuuck
//local sql server where its not nonsense.
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "infosysprj",
});  



//api data , login, register calls. app.get, app.post

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

app.listen(PORT, () => {
  console.log("listening on PORT", PORT);
});


/*
//https://aiven.io/
const db = mysql.createConnection({
  host: "mysql-1a630c24-abjsam34-5762.a.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_YFxA-efuCi1mHAtNRmS",
  database: "defaultdb",
});  //deleted semi-colon. see if works now

*/