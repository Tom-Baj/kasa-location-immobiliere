import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Description from '../../components/Description'
import Host from '../../components/Host'
import Menu from '../../components/Menu'
import logements from '../../assets/data/logements.json'

function FicheLogement() {
    let { id } = useParams()
    let logement = logements.find((logement) => logement.id === id)
    

    return (
        <div id="fiche-logement">
            <Carrousel logement={logement} />
            <div className="detail-container">
                <Description logement={logement} />
                <Host logement={logement} />
            </div>
            <Menu items={logement.dropdown} id="fiche-logement"/>
        </div>
    )
}

export default FicheLogement
