import './recallCard.css'
import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react';


function RecallCard ({data}) {
  console.log(data)
    return(
        <><CCard className="recallCard" style={{ width: '18rem' }}>
        <CCardBody>
          <CCardTitle className="cardTitle">Card title</CCardTitle>
          <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
          <CCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CCardText>
          <CCardLink className="cardLink" href="#">Card link</CCardLink>
        </CCardBody>
      </CCard>
      <><div>
      {
         data.map(data=>{
          return(
            <div key={data.NHTSACampaignNumber} style={{alignItems:'center',margin:'20px 60px'}}>
            <h4>{data.ModelYear} {data.Make} {data.Model}</h4>
            <p><b>Component:</b> {data.Component}</p>
            <p><b>Summary:</b> {data.Summary}</p>
          </div>
          )

        })
      }
        </div></></>
    )
};

export default RecallCard;