import React from 'react'
import joinImg from '../assets/images/join.png'
import stakeImg from '../assets/images/Vector.png'
import logo from '../assets/images/Y INNOVATIONS.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState } from 'react'


function Navbar({hand}) {
    const { t, i18n } = useTranslation();
    const [toggle, setTogle]=useState(false)


    const togglebtn =()=>{
        setTogle(prev=>!prev)
    }
  return (
    <section className='nav-section '>
        <nav class="navbar navbar-expand-lg fixed-top size yh  ">
            <a className="navbar-brand me-9" href="#"> <img src={logo}  className='logo'  style={{width: "4.3vw"}} ></img>  </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Y INNOVATION</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active title" aria-current="page" href="/#">{t('nav.1')}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#about" >{t('nav.2')}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#roadmap" >{t('nav.3')}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#team">{t('nav.4')}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#fag">{t('nav.5')}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#community">{t('nav.6')}</a>
                    </li>

                 
                    </ul>
                    <div className='nav-buttons gap-4  d-flex  '> 
                        <p className='mx-4 '><a className='nav-btn btn px-2 button1' type="submit" href='https://t.me/Yinnovations' >{t('nav.7')} <img src={joinImg} alt="" /></a></p>
                        <p className=''><Link  to='/stake' className='nav-btn btn px-2 button1'>{t('nav.8')} <img src={stakeImg} alt="" style={{width: "19px"}}  /> </Link></p>
                        <p className='mx-4'><a className='nav-btn btn px-2 button1  position-relative' type="submit" onClick={togglebtn}  >LANGUAGE</a></p>
                        {
                            toggle && (
                                <div className=' ms-2 mt-3  position-absolute top-50 end-0'>
                                <p class="nav-link title"  type="submit" onClick={()=>hand('en')}  >en</p>
                                <p class="nav-link title"  type="submit" onClick={()=>hand('gre')}  >Greece</p>
                    
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar