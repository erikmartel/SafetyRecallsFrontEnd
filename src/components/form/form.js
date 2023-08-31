import "./form.css";
import React, { useState } from "react";
import axios from "axios";

function Form({handleNewDriver, fetchDrivers}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/drivers/newDriver", {
        first_name: firstName,
        last_name: lastName,
        modelyear: modelYear,
        make: make,
        model: model,
      })
      .then(() => {
        handleNewDriver();
        setFirstName("");
        setLastName("");
        setModelYear("");
        setMake("");
        setModel("");
        console.log("success - user added!");
        fetchDrivers();
      })
      .catch((error) => {
        console.log("something went wrong!");
        console.log(error)
      });
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <div className="driver-form">
          <form className="form" onSubmit={handleSubmit}>
          <div className="formItem"><p className="formLabel">Driver First Name:</p>
            <input
              className="inputItem"

              type="text"
              placeholder="First name ..."
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
            /></div>
            <div className="formItem">
              <p className="formLabel">Driver Last Name:</p>
            <input
              className="inputItem"
              type="text"
              placeholder="Last name ..."
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
            /></div>
            <div className="formItem">
              <p className="formLabel">Vehicle Year:</p>
            <input
              className="inputItem"
              type="number"
              placeholder="Year...."
              onChange={(e) => {
                setModelYear(e.target.value);
              }}
              value={modelYear}
            /></div>
            <div className="formItem">
              <p className="formLabel">Vehicle Make: </p>
            <input
              className="inputItem"
              type="text"
              placeholder="Make...."
              onChange={(e) => {
                setMake(e.target.value);
              }}
              value={make}
            /></div>
            <div className="formItem">
            <p className="formLabel">Vehicle Model: </p>
            <input
              className="inputItem"
              type="text"
              placeholder="Model...."
              onChange={(e) => {
                setModel(e.target.value);
              }}
              value={model}
            />  </div>
            <div className="submitButtonContainer"><button className="submitButton" type="submit">Submit</button></div>
          </form>
        </div> 
      </header>
    </div>
  );
}

export default Form;
