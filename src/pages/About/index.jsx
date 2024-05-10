import Header from '../../components/Header'
import Banniere from '../../components/Banniere'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import paysage from '../../assets/images/paysage2.jpg'
import aboutLists from "../../assets/data/aboutList.json"



function Apropos() {
    return (
        <div id='about'>
            <Header />
            <Banniere paysage={paysage} id='about'/>
            <Menu aboutLists={aboutLists}/>
            <Footer />
        </div>
    )
}

export default Apropos