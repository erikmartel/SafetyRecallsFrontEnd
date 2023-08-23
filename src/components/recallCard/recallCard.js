import './recallCard.css'
import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react';


function RecallCard ({data}) {
  console.log(data)
    return(
        <>
      <><div>
      {
         data.map(data=>{
          return(
            <div>
             <CCard key={data.NHTSACampaignNumber} className="recallCard" style={{ width: 'auto' }}>
              <CCardBody>
                  <CCardTitle className="cardTitle">{data.ModelYear} {data.Make} {data.Model}</CCardTitle> 
                    <CCardSubtitle className="mb-2 text-medium-emphasis">{data.Component}</CCardSubtitle>
                      <CCardText>
                      {data.Summary}
                      </CCardText>
                    <CCardLink className="cardLink" href="#">Card link</CCardLink>
              
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