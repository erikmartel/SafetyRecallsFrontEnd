import "./form.css";
import React, { useState } from "react";

function Form() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [modelYear, setModelYear] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // axios.post('http://localhost:4000/insert', {
        //     fullName: name,
        //     companyRole:role
        // })
    }

  return (
    <div className="form-container">
      <header className="form-header">
        <div className="driver-form">
          <form onSubmit={handleSubmit}>
            <p>Driver First Name</p>
            <input
              className="Name"
              type="text"
              placeholder="First name ..."
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <p>Driver Last Name</p>
            <input
              className="Name"
              type="text"
              placeholder="Last name ..."
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <p>Vehicle Year</p>
            <input
              className="VehicleInfo"
              type="text"
              placeholder="Year...."
              onChange={(e) => {
                setModelYear(e.target.value);
              }}
            />
             <p>Vehicle Make</p>
            <input
              className="VehicleInfo"
              type="text"
              placeholder="Make...."
              onChange={(e) => {
                setMake(e.target.value);
              }}
            /> <p>Vehicle Model</p>
            <input
              className="VehicleInfo"
              type="text"
              placeholder="Model...."
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Form;
