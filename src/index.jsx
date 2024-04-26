import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/* import './src/styles/main.scss'
 */import Home from './pages/Home/'
import FicheLogement from './pages/FicheLogement/'
import Error from './pages/Error/'
import Apropos from './pages/About/'

ReactDOM.render(
     <React.StrictMode>
          <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/fiche_logement" element={<FicheLogement />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/about" element={<Apropos />} />
               </Routes>
          </Router>
     </React.StrictMode>,
     document.getElementById('root')
)
