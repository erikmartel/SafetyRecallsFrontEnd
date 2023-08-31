import './trash.css'
import axios from "axios";

function TrashCan ({driver, vehicleId, fetchVehicles}){

function trashClick() {
    console.log(driver)
    console.log(vehicleId)
    // alert('Are you sure you want to delete this vehicle!')
    const confirmed = window.confirm('Are you sure you want to delete this vehicle?');
    if (confirmed) {
      // Delete item
       
 
    axios.delete(`http://localhost:4000/api/drivers/${driver}/vehicles/${vehicleId}`, {
        })
        .then(() => {
        console.log("success - vehicle deleted!");
        fetchVehicles();
        })
        .catch(() => {
        console.log("something went wrong!");
        });
    }else{
        console.log('Delete cancelled!');
      }
    };

     return(
        <div className="trashCanContainer">
            <img classname="trash" title="Remove this vehicle?" src="/images/trash.png" alt="trashCanIcon" style={{width: 15, height: 15}} onClick={trashClick}/>
        </div>
    )
}

export default TrashCan;