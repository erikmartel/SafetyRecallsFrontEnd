import './recallCard.css'
import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react';

function RecallCard () {
    return(
        <CCard className = "recallCard" style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle className="cardTitle">Card title</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CCardText>
              <CCardLink className="cardLink" href="#">Card link</CCardLink>
            </CCardBody>
          </CCard>
    )
};

export default RecallCard;