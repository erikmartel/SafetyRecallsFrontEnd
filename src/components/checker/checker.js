import './checker.css'
import { useState } from 'react';
function Checker ({drivers}) {


const [driver, setDriver] = useState([])
console.log(drivers);

const handleChange = (event) => {
    setDriver(event.target.value);
  };

return (
<div className= "checkerContainer">
          
          <label className="driverSelectorLabel" for="driverSelector">Who's driving?</label>
          
          
        <form className="driverSelectorDropdown" id="driverSelector">
            <select placeholder="Who's driving?" onChange={handleChange}>
                <option disabled="">Select your driver</option>
                {
                drivers?.map((driver) => (
                    <option key={driver.first_name}>{driver.first_name} {driver.last_name}</option>
                ))}
            </select>
        </form>
          
          
          
          
          
          
          <button color = "#1AFFFF" className="recallSubmitButton">Check my recalls</button>
  
</div>

)};

export default Checker;