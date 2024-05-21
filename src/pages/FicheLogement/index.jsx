import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Description from '../../components/Description'
import Host from '../../components/Host'
import Tags from '../../components/Tags'
import Note from '../../components/Note'
/* import Menu from '../../components/Menu' */
import logements from '../../assets/data/logements.json'

function FicheLogement() {
     let { id } = useParams()
     let logement = logements.find((logement) => logement.id === id)

     return (
          <div id="fiche-logement">
               <Carrousel logement={logement} />
               <Description logement={logement} />
               <Tags logement={logement} />
               <Host logement={logement} />
               <Note valeur={logement.rating} />
               {/* <Menu logement={logement}/> */}
          </div>
     )
}

export default FicheLogement
