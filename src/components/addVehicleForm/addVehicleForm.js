import "./addVehicleForm.css";
import React, { useState } from "react";
import axios from "axios";

function AddVehicleForm({driver}) {
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
            <p>Vehicle Year</p>
            <input
              className="VehicleInfo"
              type="text"
              placeholder="Year...."
              onChange={(e) => {
                setModelYear(e.target.value);
              }}
              value={modelYear}
            />
            <p>Vehicle Make</p>
            <input
              className="VehicleInfo"
              type="text"
              placeholder="Make...."
              onChange={(e) => {
                setMake(e.target.value);
              }}
              value={make}
            />
            <p>Vehicle Model</p>
            <input
              className="VehicleInfo"
              type="text"
              placeholder="Model...."
              onChange={(e) => {
                setModel(e.target.value);
              }}
              value={model}
            />
            <button className="submitVehicleButton" type="submit">Add</button>
          </form>
        </div> 
      </header>
    </div>
  );
}

export default AddVehicleForm;