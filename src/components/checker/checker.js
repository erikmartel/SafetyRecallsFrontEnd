import "./checker.css";
import { useState, useEffect } from "react";
import RecallCard from "../recallCard/recallCard";
import Form from "../form/form";
import AddVehicleForm from "../addVehicleForm/addVehicleForm";
import TrashCan from "../trashCan/trash";

function Checker() {
  const [driver, setDriver] = useState(null);
  const [driverInfo, setDriverInfo] = useState(null);
  const [vehicleRecallData, setVehicleRecallData] = useState([]);
  const [addNewDriver, setAddNewDriver] = useState(false);
  const [error, setError] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [addNewVehicle, setAddNewVehicle] = useState(false);
  const [toggleRecallCount, setToggleRecallCount] = useState(false);

  const fetchDrivers = () => {
    const driversUrl = `http://localhost:4000/api/drivers`;
    fetch(driversUrl)
      .then((response) => response.json())
      .then((drivers) => {
        console.log(drivers);
        setError(false);
        setDrivers(drivers);
      })
      .catch((error) => setError(true));
  };

  //refetch vehicles after change
  const fetchVehicles = () => {
    if (driver) {
      // Fetch drivers from MongoDB using Fetch API
      fetch(`http://localhost:4000/api/drivers/${driver}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setDriverInfo(data);
        })
        .catch((error) => {
          console.error("Error fetching vehicles:", error);
        });
    }
  };

  //fetching all drivers from local database
  useEffect(fetchDrivers, [driver]);
  //fetching all vehicles from local database
  useEffect(fetchVehicles, [driver]);

  console.log(driver);

  //Handling dropdown selection
  const handleChange = (event) => {
    setDriver(event.target.value);
    setVehicleRecallData([]);
    console.log(driver);
    console.log(event.target.value);
    setToggleRecallCount(false);
  };

  //handle recall click
  function checkRecallsClick(index) {
    console.log(driverInfo.Vehicles[index]);
    const vehicle = driverInfo.Vehicles[index];
    const url = `https://api.nhtsa.gov/recalls/recallsByVehicle?make=${vehicle.make}&model=${vehicle.model}&modelYear=${vehicle.modelYear}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setError(false);
        setVehicleRecallData(data);
        console.log(data);
        handleToggleRecallCount();
      })
      .catch((error) => setError(true));
  }

  function handleNewDriver() {
    setAddNewDriver(!addNewDriver);
    setToggleRecallCount(false);
  }

  function handleNewVehicle() {
    setAddNewVehicle(!addNewVehicle);
    setToggleRecallCount(false);
  }

  function handleToggleRecallCount() {
    setToggleRecallCount(true);
  }
  //Mapping driver names to dropdown from MongoDB

  return (
    <div className="checkerContainer">
      <label className="driverSelectorLabel" for="driverSelector">
        Who's driving?
      </label>

      <form className="driverSelectorDropdown" id="driverSelector">
        <select
          className="dropdown"
          placeholder="Who's driving?"
          onChange={handleChange}
        >
          <option value="">-- Select your driver --</option>
          {drivers?.map((driver) => (
            <option key={driver.first_name} value={driver._id}>
              {driver.first_name} {driver.last_name}
            </option>
          ))}
        </select>
      </form>
      <div>
        <button className="addDriverButton" onClick={handleNewDriver}>
          {addNewDriver ? "Close Form" : "Add Driver"}
        </button>
      </div>

      {/* Show add driver form once add driver button is clicked*/}
      {addNewDriver ? (
        <div className="formContainer">
          <Form
            className="addDriverForm"
            fetchDrivers={fetchDrivers}
            handleNewDriver={handleNewDriver}
            addNewDriver={addNewDriver}
            driver={driver}
          />
        </div>
      ) : (
        <div></div>
      )}

      {/*  {Show vehicles once driver is selected } */}
      {driver ? (
        <div>
          <button className="addVehicleButton" onClick={handleNewVehicle}>
            {addNewVehicle ? "Close Vehicle Form" : "Add Vehicle"}
          </button>
        </div>
      ) : null}

      {/* Show add vehicle form once add vehicle button is clicked*/}
      {addNewVehicle ? (
        <div className="formContainer">
          {" "}
          <AddVehicleForm
            handleNewVehicle={handleNewVehicle}
            fetchVehicles={fetchVehicles}
            driver={driver}
          />
        </div>
      ) : (
        <div></div>
      )}

      {driver ? (
        <div className="vehicleCardsGrid">
          {driverInfo?.Vehicles.map((vehicle, index) => {
            return (
              <div class="vehicleCard" key={index}>
                <div className="trashCanContainer">
                  <div className="trashButton">
                    <TrashCan
                      fetchVehicles={fetchVehicles}
                      vehicleId={vehicle._id}
                      driver={driver}
                    />
                  </div>
                </div>
                <div class="vehicleContainer">
                  <h3 className="cardTitle">
                    {vehicle.modelYear} {vehicle.make} {vehicle.model}
                  </h3>

                  <div>
                    <img src="/images/carIcon.png" alt="carIcon" />
                  </div>
                  <button
                    className="recallSubmitButton"
                    onClick={() => checkRecallsClick(index)}
                  >
                    Check for Recalls
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}

      <div className="recallListContainer">
        <div>
          {toggleRecallCount ? (
            <p className="recallCount">
              There are{" "}
              <b style={{ color: "#d41111" }}>{vehicleRecallData.Count} </b>
              recalls for the vehicle you selected.<br></br><br></br><hr></hr>
            </p>
          ) : (
            <div></div>
          )}
        </div>
        <RecallCard
          vehicleRecallData={vehicleRecallData}
          data={vehicleRecallData.results ? vehicleRecallData.results : []}
        />
      </div>
    </div>
  );
}

export default Checker;
