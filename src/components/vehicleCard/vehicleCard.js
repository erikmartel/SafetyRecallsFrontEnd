/* import './vehicleCard.css'
import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react';


function VehicleCard ({driver}) {
  console.log(driver)
    return(
        <>
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
        </div></></>
    )
};

export default VehicleCard; */