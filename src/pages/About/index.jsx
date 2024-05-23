import Banniere from '../../components/Banniere'
import Menu from '../../components/Menu'
import paysage from '../../assets/images/paysage2.jpg'
import aboutLists from "../../assets/data/aboutList.json"

function Apropos() {
    return (
        <div id='about'>
            <Banniere paysage={paysage} id='about'/>
            <Menu items={aboutLists[0].dropdown} id='about'/>
        </div>
    )
}

export default Apropos