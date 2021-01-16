const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());
app.options("*",cors());


const pool  = mysql.createConnection({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            : 'shreyas',
    password        : '123',
    database        : 'assignment',
    port            : '3308'
});


app.post("/api/insert", (req, res) => {
  const city = req.body.city;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

let query = "INSERT INTO distance (city,latitude,longitude) VALUES (?,?,?);";
pool.connect();
pool.query(query,[city,latitude,longitude],(err,rows) =>{
  if(err){
    console.log(err)
  }
  console.log(rows)
})
});

app.post("/api/post", (req, res) => {
  const city = req.body.city;
  const city2 = req.body.city2;


let query = "SELECT a.city AS from_city,b.city AS to_city,111.111 *DEGREES(ACOS(LEAST(1.0, COS(RADIANS(a.latitude))* COS(RADIANS(b.latitude)) * COS(RADIANS(a.longitude - b.longitude)) + SIN(RADIANS(a.latitude)) * SIN(RADIANS(b.latitude))))) AS distance_in_km FROM distance AS a JOIN distance AS b ON a.id <> b.id WHERE a.city = ? AND b.city = ?";
pool.connect();
/*query= SELECT a.city AS from_city,b.city AS to_city,111.111 *DEGREES(ACOS(LEAST(1.0, COS(RADIANS(a.latitude))
* COS(RADIANS(b.latitude))* COS(RADIANS(a.longitude - b.longitude)) + SIN(RADIANS(a.latitude)) * SIN(RADIANS(b.latitude)))))
 AS distance_in_km FROM distance AS a JOIN distance AS b ON a.city <> b.city WHERE a.city = '?' AND b.city = '?'*/ 
pool.query(query,[city,city2],(err,rows) =>{
  if(err){
    console.log(err);
  }
  else
   {
     return res.send(rows);
   }
})
});
app.listen(port, () => console.log(`Listening on port ${port}`));

