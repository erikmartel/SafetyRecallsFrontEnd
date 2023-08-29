import "./checker.css";
import { useState, useEffect } from "react";
import RecallCard from "../recallCard/recallCard";
import Form from "../form/form";

function Checker() {
  const [driver, setDriver] = useState(null);
  const [driverInfo, setDriverInfo] = useState(null);
  const [vehicleRecallData, setVehicleRecallData]=useState([]);
  const [addNewDriver, setAddNewDriver] = useState(false);
  const [error, setError] = useState(false);
  const [drivers, setDrivers] = useState([])

  //fetching all drivers from local database
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
  }, [driver]);
  

  useEffect(() => {
    if (driver) {
      // Fetch drivers from MongoDB using Fetch API
      fetch(`http://localhost:4000/api/drivers/${driver}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setDriverInfo(data);
        })
        .catch(error => {
          console.error("Error fetching vehicles:", error);
        });
    }
  }, [driver]);

console.log(driver);

  //Handling dropdown selection
  const handleChange = (event) => {
      setDriver(event.target.value);
      setVehicleRecallData([]);
    console.log(driver);
    console.log(event.target.value)
  };


//handle recall click
function checkRecallsClick(index){
  console.log(driverInfo.Vehicles[index]);
  const vehicle = driverInfo.Vehicles[index]
  const url = `https://api.nhtsa.gov/recalls/recallsByVehicle?make=${vehicle.make}&model=${vehicle.model}&modelYear=${vehicle.modelYear}`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    setError(false);
    setVehicleRecallData(data);
    console.log(data);
  })
  .catch((error) => setError(true));
}

function handleNewDriver(){
  setAddNewDriver(!addNewDriver)
  
}
  



//Mapping driver names to dropdown from MongoDB


  return (
    <div className="checkerContainer">
      <label className="driverSelectorLabel" for="driverSelector">
        Who's driving?
      </label>
    

      <form className="driverSelectorDropdown" id="driverSelector">
        <select className="dropdown" placeholder="Who's driving?" onChange={handleChange}>
          <option value="">-- Select your driver --</option>
          {drivers?.map((driver) => (
            <option key={driver.first_name} value={driver._id}>
              {driver.first_name} {driver.last_name}
            </option>
          ))}
        </select>
      </form>
      <div><button className="addDriverButton" onClick={handleNewDriver}>{addNewDriver ? "Close Form" : "Add Driver"}</button></div>
      
      
     {/*  {Show vehicles once driver is selected } */}
     {addNewDriver ? <Form addNewDriver={addNewDriver} driver={driver}/> : <div></div>}
      {driver ? <label className="yourVehiclesLabel">Your vehicles:</label> : null}

  
      {driver ? <div className='vehicleCardsGrid'> 
     
          {
            driverInfo?.Vehicles.map((vehicle, index)=>{
              return(
                <div  class="vehicleCard" key={index}>
                  <div class="vehicleContainer">
                    <h3 className="cardTitle">{vehicle.modelYear} {vehicle.make} {vehicle.model}</h3>
                    <div>
                    <img src="/images/carIcon.png" alt="carIcon" />
                    </div>
                    <button className="recallSubmitButton" onClick={() => checkRecallsClick(index)}>Check for Recalls</button>
                  </div>
              </div>
              )
            })
          }
      </div> : <div></div>}
    
        <div className="recallListContainer">
            <RecallCard data={vehicleRecallData.results ? vehicleRecallData.results : []} />
          </div> 
    </div>
       
    );
  
}

export default Checker;
