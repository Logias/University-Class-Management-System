import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [section, setSection] = useState(0);
  const [term, setTerm] = useState(0);
  const [instructor, setInstructor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [building, setBuilding] = useState("");

  const [classList, setClassList] = useState([]);

  const displayInfo = () => {
    console.log(name + section + term, instructor, date, time, building);
  };

  const addUniClass = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      section: section,
      term: term,
      instructor: instructor,
      date: date,
      time: time,
      building: building,
    }).then(() => {
      console.log("success");
    });
  };

  const getClasses = () => {
    Axios.get("http://localhost:3001/classes").then((response) => {
      // console.log(response);
      setClassList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="universityclass">
        <label>Name: </label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>Section: </label>
        <input
          type="number"
          onChange={(event) => {
            setSection(event.target.value);
          }}
        ></input>
        <label>Term: </label>
        <input
          type="number"
          onChange={(event) => {
            setTerm(event.target.value);
          }}
        ></input>
        <label>Instructor: </label>
        <input
          type="text"
          onChange={(event) => {
            setInstructor(event.target.value);
          }}
        ></input>
        <label>Date: </label>
        <input
          type="text"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        ></input>
        <label>Time: </label>
        <input
          type="text"
          onChange={(event) => {
            setTime(event.target.value);
          }}
        ></input>
        <label>Building: </label>
        <input
          type="text"
          onChange={(event) => {
            setBuilding(event.target.value);
          }}
        ></input>
        <button type="button" onClick={addUniClass}>
          Add Class
        </button>
      </div>
      <div className="universities">
        <button type="button" onClick={getClasses}>
          Show Added Universities
        </button>
        {classList.map((val, key) => {
          return (
            <div className="classes">
              <h3>Name: {val.name}</h3>
              <h3>Section: {val.section}</h3>
              <h3>Term: {val.term}</h3>
              <h3>Instructor: {val.instructor}</h3>
              <h3>Date: {val.date}</h3>
              <h3>Time: {val.time}</h3>
              <h3>Building: {val.building}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
