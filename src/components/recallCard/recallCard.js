import './recallCard.css'

function RecallCard ({data}) {
  console.log(data)
    return(
        <>
      <><div class="recallCardContainer">
      {
         data.map((data)=>{
          return(
            <div className="recallCard" key={data.NHTSACampaignNumber} >
            
              
                  <h2 className="cardTitle">Vehicle: {data.ModelYear} {data.Make} {data.Model}</h2>
                    <p className="componentInfo">Component: {data.Component}</p>
                      <p className="recallCardSummary">
                      Summary: {data.Summary}
                      </p>
                    <a className="cardLink" href="#">More Details</a>
                    <br /> 
          </div>
          )
        })
      }
        </div></></>
    )
};

export default RecallCard;