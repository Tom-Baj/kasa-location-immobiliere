import Header from '../../components/Header'
import Banniere from '../../components/Banniere'
import Footer from '../../components/Footer'
import paysage from '../../assets/images/paysage2.jpg'


function Apropos() {
    return (
        <div id='about'>
            <Header />
            <Banniere paysage={paysage} id='about'/>
            <Footer />
        </div>
    )
}

export default Apropos