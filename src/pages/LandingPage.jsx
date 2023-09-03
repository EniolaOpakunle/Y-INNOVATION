import React from 'react'
import Main from '../components/Main'
import Ratings from '../components/Ratings'
import About from '../components/About'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Fag from '../components/Fag'
import Community from '../components/Community'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div>
        <Main/>
        <Ratings/>
        <About/>
        <Roadmap/>
        <Team/>
        <Fag/>
        <Community/>
        {/* <Partners/> */}
        <Footer/>
    </div>
  )
}

export default LandingPage