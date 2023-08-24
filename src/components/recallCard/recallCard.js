import './recallCard.css'
import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react';


function RecallCard ({data}) {
  console.log(data)
    return(
        <>
      <><div>
      {
         data.map((data)=>{
          return(
            <div key={data.NHTSACampaignNumber}>
             <CCard  className="recallCard" style={{ width: 'auto' }}>
              <CCardBody>
                  <CCardTitle className="cardTitle">Vehicle: {data.ModelYear} {data.Make} {data.Model}</CCardTitle> 
                    <CCardSubtitle className="mb-2 text-medium-emphasis">Component: {data.Component}</CCardSubtitle>
                      <CCardText>
                      Summary: {data.Summary}
                      </CCardText>
                    <CCardLink className="cardLink" href="#">More Details</CCardLink>
              
              </CCardBody>
              </CCard>
          </div>
          )
        })
      }
        </div></></>
    )
};

export default RecallCard;