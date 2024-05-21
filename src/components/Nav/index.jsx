import { NavLink } from 'react-router-dom'

function Nav() {
     return (
          <nav>
               <ul className='nav-container'>
                    <li>
                         <NavLink to="/" className="nav-container__link">
                              Accueil
                         </NavLink>
                    </li>
                    <li>
                         <NavLink to="/about" className="nav-container__link">
                              A Propos
                         </NavLink>
                    </li>
               </ul>
          </nav>
     )
}

export default Nav
