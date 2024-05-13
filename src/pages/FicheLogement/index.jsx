import Carrousel from "../../components/Carrousel"
import logements from "../../assets/data/logements.json"

function FicheLogement() {
    return (
        <div>
            <Carrousel logements={logements}/>
        </div>
    )
}

export default FicheLogement
