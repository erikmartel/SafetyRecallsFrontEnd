import "./checker.css";
import { useState } from "react";
import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react';

// import VehicleCard from "../vehicleCard/vehicleCard";

function Checker({ drivers }) {
  const [driver, setDriver] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(false);

  console.log(drivers);

  const handleChange = (event) => {
    setDriver(event.target.value);
    setSelectedDriver(true);
  };

let driverName=driver;
console.log(driverName);
  return (
    <div className="checkerContainer">
      <label className="driverSelectorLabel" for="driverSelector">
        Who's driving?
      </label>

      <form className="driverSelectorDropdown" id="driverSelector">
        <select placeholder="Who's driving?" onChange={handleChange}>
          <option disabled="">Select your driver</option>
          {drivers?.map((driver) => (
            <option key={driver.first_name}>
              {driver.first_name} {driver.last_name}
            </option>
          ))}
        </select>
      </form>

      {selectedDriver ? <label>Your vehicles:</label> : null}

    {/*   <>
      <><div>
      {
         driver.Vehicles?.map(driver=>{
          return(
            <div>
             <CCard key={driver._id} className="vehicleCard" style={{ width: 'auto' }}>
              <CCardBody>
                  <CCardTitle className="cardTitle">Vehicle: {driver.Vehicles.modelYear} {driver.Vehicles.make} {driver.Vehicles.model}</CCardTitle>
              
              </CCardBody>
              </CCard>
          </div>
          )
        })
      }
        </div></></> */}




      <button color="#1AFFFF" className="recallSubmitButton">
        Check my recalls
      </button>
    </div>
  );
}

export default Checker;
