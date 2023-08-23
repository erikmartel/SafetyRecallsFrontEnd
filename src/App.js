import "./App.css";
import Header from "./components/header/header";
import Checker from "./components/checker/checker";
import { useState, useEffect } from "react";
import RecallCard from "./components/recallCard/recallCard";
import React from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2023`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setError(false);
        setData(data);
      })
      .catch((error) => setError(true));
  }, []);

  

  console.log(data);

  return (
    <div className="App">
      <Header />

      <div className="appContainer">
        <Checker />
      </div>

      <div className="recallListContainer">
        <RecallCard data={data.results ? data.results : []} />
      </div>
      <div className="recallData"></div>
    </div>
  );
}

export default App;
