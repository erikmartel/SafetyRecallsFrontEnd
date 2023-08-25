import "./checker.css";
import { useState, useEffect } from "react";
import RecallCard from "../recallCard/recallCard";
// import VehicleCard from "../vehicleCard/vehicleCard";

function Checker({ drivers }) {
  const [driver, setDriver] = useState(null);

  const [driverInfo, setDriverInfo] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [recallInfo, setRecallInfo] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [vehicleRecallData, setVehicleRecallData]=useState([])

  //console.log(drivers);

//console.log(driver);

  useEffect(() => {
    if (driver) {
      // Fetch vehicles from MongoDB using Fetch API
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

//console.log(driverInfo.Vehicles.make);

  //Handling dropdown selection
  const handleChange = (event) => {
    setDriver(event.target.value);
    setVehicleRecallData([]);
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
  



//Mapping driver names to dropdown from MongoDB


  return (
    <div className="checkerContainer">
      <label className="driverSelectorLabel" for="driverSelector">
        Who's driving?
      </label>

      <form className="driverSelectorDropdown" id="driverSelector">
        <select placeholder="Who's driving?" onChange={handleChange}>
          <option disabled="">Select your driver</option>
          {drivers?.map((driver) => (
            <option key={driver.first_name} value={driver._id}>
              {driver.first_name} {driver.last_name}
            </option>
          ))}
        </select>
      </form>
      
      
     {/*  {Show vehicles once driver is selected } */}
      {driver ? <label className="yourVehiclesLabel">Your vehicles:</label> : null}

  
      <div className='vehicleCardsGrid'> 
          {
            driverInfo?.Vehicles.map((vehicle, index)=>{
              return(
                <div  class="vehicleCard" key={index}>
                  <div class="vehicleContainer">
                    <h3 className="cardTitle">{vehicle.modelYear} {vehicle.make} {vehicle.model}</h3>
                    <button className="recallSubmitButton" onClick={() => checkRecallsClick(index)}>Check for Recalls</button>
                  </div>
              </div>
              )
            })
          }
      </div> 
    
        <div className="recallListContainer">
            <RecallCard data={vehicleRecallData.results ? vehicleRecallData.results : []} />
          </div> 
    </div>
       
    );
  
}

export default Checker;
