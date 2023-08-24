import "./App.css";
import Header from "./components/header/header";
import Checker from "./components/checker/checker";
import { useState, useEffect } from "react";
import RecallCard from "./components/recallCard/recallCard";
import React from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [drivers, setDrivers] = useState([])

/*   useEffect(() => {
    const url = `https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2023`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setError(false);
        setData(data);
      })
      .catch((error) => setError(true));
  }, []);  */

  
  useEffect(() => {
    const driversUrl = `http://localhost:4000/api/drivers`;
    fetch(driversUrl)
      .then((response) => response.json())
      .then((drivers) => {
        console.log(drivers);
        setError(false);
        setDrivers(drivers);
      })
      .catch((error) => setError(true));
  }, []);


  console.log(data);

  return (
    <div className="App">
      <Header />

      <div className="appContainer">
        <Checker drivers={drivers}/>
      
      </div>


      <div className="recallData"></div>
    </div>
  );
}

export default App;
