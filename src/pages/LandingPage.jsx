import React from 'react'
import Main from '../components/Main'
import Ratings from '../components/Ratings'
import About from '../components/About'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Fag from '../components/Fag'
import Community from '../components/Community'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next';



function LandingPage() {

  const { t, i18n } = useTranslation();

  function handleClick(lang){
      i18n.changeLanguage(lang);
  }
 
  return (
    <div>
        <Main  handle={handleClick} />
        <Ratings  handle={handleClick}/>
        <About  handle={handleClick}/>
        <Roadmap  handle={handleClick}/>
        <Team  handle={handleClick}/>
        <Fag  handle={handleClick}/>
        <Community  handle={handleClick}/>
        <Footer  handle={handleClick}/>
    </div>
  )
}

export default LandingPage