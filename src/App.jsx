import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Merchandise from './pages/Merchandise'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<LandingPage/>}/>
      <Route path='/merchandise' element = {<Merchandise/>}/>
    </Routes>
    </>
  )
}

export default App
