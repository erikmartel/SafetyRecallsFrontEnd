import './trash.css'
import axios from "axios";

function TrashCan ({driver, vehicleId}){

function trashClick() {
    console.log(driver)
    console.log(vehicleId)

    axios.delete(`http://localhost:4000/api/drivers/${driver}/vehicles/${vehicleId}`, {
        })
        .then(() => {
        console.log("success - vehicle deleted!");
        })
        .catch(() => {
        console.log("something went wrong!");
        });
    };

    return(
        <div className="trashCanContainer">
            <img classname="trash" src="/images/trash.png" alt="trashCanIcon" style={{width: 15, height: 15}} onClick={trashClick}/>
        </div>
    )
}

export default TrashCan;