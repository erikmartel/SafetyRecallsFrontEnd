import "./App.css";
import Header from "./components/header/header";
import Checker from "./components/checker/checker";
import { useState, useEffect } from "react";

import React from "react";

function App() {
  /* const [error, setError] = useState(false);
  const [drivers, setDrivers] = useState([])

  
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
 */
  return (
    <div className="App">
      <Header />

      <div className="appContainer">
        <Checker />
      </div>

      <div className="recallData"></div>
      <div className="footer">
        <div className="yellowFooter"></div>
        <div className="blueFooter">
          <div className="copyRight">&copy; 2023 Safety Recall Checker</div> 
          <div className="contactInfo">
            Connect with us!<br></br>
            Jacob Moore<br></br>
            Dayna Tynan<br></br>
            Erik Martel
            </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
