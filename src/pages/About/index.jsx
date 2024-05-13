import Banniere from '../../components/Banniere'
import Menu from '../../components/Menu'
import paysage from '../../assets/images/paysage2.jpg'
import aboutLists from "../../assets/data/aboutList.json"



function Apropos() {
    return (
        <div id='about'>
            <Banniere paysage={paysage} id='about'/>
            <Menu aboutLists={aboutLists}/>
        </div>
    )
}

export default Apropos