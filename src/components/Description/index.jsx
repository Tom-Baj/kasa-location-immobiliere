import Tags from '../Tags'

function Description({ logement }) {
    return (
         <div className="description-container">
              <h1 className="description-container__titre">{logement.title}</h1>
              <p className="description-container__localisation">{logement.location}</p>
              <Tags logement={logement}/>
         </div>
    )
}

export default Description;