
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SpeiseKarte from './pages/speisekarte/SpeiseKarte'
import Oeffnungszeiten from './pages/oeffnungszeiten/Oeffnungszeiten'
import Galerie from './pages/galerie/Galerie'
import Kontakt from './pages/kontakt/Kontakt'
import Header from './components/header/Header'

function App() {


  return (
    <>
    
<Routes>
  <Route path='/' element={<SpeiseKarte/>}/>
  <Route path='/kontakt' element={<Kontakt/>}/>
  <Route path='/oeffnnungszeiten' element={<Oeffnungszeiten/>}/>
  <Route path='/galerie' element={<Galerie/>}/>

</Routes>
    </>
  )
}

export default App
