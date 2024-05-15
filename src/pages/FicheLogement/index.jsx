import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import logements from '../../assets/data/logements.json'

function FicheLogement() {
     let { id } = useParams()
     let logement = logements.find((logement) => logement.id === id)

     return (
         <div>
          <Carrousel logement={logement} />
         </div>
     );
 }

export default FicheLogement
