const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "universitysystem",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const section = req.body.section;
  const term = req.body.term;
  const instructor = req.body.instructor;
  const date = req.body.date;
  const time = req.body.time;
  const building = req.body.building;

  //insert query into unviversityclass table with the array and use callback function
  db.query(
    "INSERT INTO universityclass (name, section, term, instructor, date, time, building) VALUES (?,?,?,?,?,?,?)",
    [name, section, term, instructor, date, time, building],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/classes", (req, res) => {
  db.query("SELECT * FROM universityclass", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Woohoo your server is running on port 3001");
});
