import Note from '../Note'

function Host({ logement }) {
     return (
          <div className="host-container">
               <div className="host-container__profil">
                    <p className="host-container__profil--name">{logement.host.name}</p>
                    <img
                         className="host-container__profil--photo"
                         src={logement.host.picture}
                         alt={logement.host.name}
                    ></img>
               </div>
               <Note valeur={logement.rating} />
          </div>
     )
}

export default Host
