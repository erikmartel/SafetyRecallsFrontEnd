import "./addVehicleForm.css";
import React, { useState } from "react";
import axios from "axios";

function AddVehicleForm({driver, fetchVehicles, handleNewVehicle}) {
  const [modelYear, setModelYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  
  console.log(driver);

 

  const handleSubmitVehicle = (e) => {
    e.preventDefault();

    axios
      .patch("http://localhost:4000/api/drivers/", {
        id: driver,
        modelyear: modelYear,
        make: make,
        model: model,
      })
      .then(() => {
        setModelYear("");
        setMake("");
        setModel("");
        console.log("success - user added!");
        fetchVehicles();
        handleNewVehicle();
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  };

  return (
    <div className="vehicle-form-container">
      <header className="vehicle-form-header">
        <div className="driver-form">
          <form className="form" onSubmit={handleSubmitVehicle}>
          <div className="formItem">
            <p>Vehicle Year:</p>
            <input 
              className="inputItem"
              type="text"
              placeholder="Year...."
              onChange={(e) => {
                setModelYear(e.target.value);
              }}
              value={modelYear}
            /></div>
            <div className="formItem"><p>Vehicle Make:</p>
            <input
              className="inputItem"
              type="text"
              placeholder="Make...."
              onChange={(e) => {
                setMake(e.target.value);
              }}
              value={make}
            /></div>
            <div className="formItem"><p>Vehicle Model:</p>
            <input
             className="inputItem"
              type="text"
              placeholder="Model...."
              onChange={(e) => {
                setModel(e.target.value);
              }}
              value={model}
            /></div>
            <div className="submitButtonContainer"><button className="submitVehicleButton" type="submit">Add</button></div>
          </form>
        </div> 
      </header>
    </div>
  );
}

export default AddVehicleForm;