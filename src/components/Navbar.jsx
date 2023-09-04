import React from 'react'
import joinImg from '../assets/images/join.png'
import stakeImg from '../assets/images/Vector.png'
import logo from '../assets/images/Y INNOVATIONS.png'
import { Link } from 'react-router-dom'
function Navbar() {
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
                        <a class="nav-link active title" aria-current="page" href="/#">home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#about" >about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#roadmap" >roadmap</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#team">team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#fag">fag</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link title" href="/#community">Community</a>
                    </li>
                    </ul>
                    <div className='nav-buttons d-flex'> 
                        <p className='mx-4'><a className='nav-btn btn px-5 button1' type="submit" href='https://t.me/Yinnovations' >JOIN US <img src={joinImg} alt="" /></a></p>
                        <p><Link  to='/stake' className='nav-btn btn px-5 button1'>STAKE <img src={stakeImg} alt="" style={{width: "19px"}}  /> </Link></p>
                    </div>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar