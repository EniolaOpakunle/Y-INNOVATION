import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Stake from './pages/Stake'

function App() {

  return (
    
    <>
    <Routes>
      <Route path='/' element = {<LandingPage/>} />
      <Route path='/stake' element={<Stake />} />
    </Routes>
    </>
  )
}

export default App
