import React from 'react'
import joinImg from '../assets/images/join.png'
import stakeImg from '../assets/images/Vector.png'

function Navbar() {
  return (
    <section className='nav-section w-100'>
        <nav class="navbar navbar-expand-lg fixed-top size">
            <a class="navbar-brand" href="#">Y INNOVATION</a>
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
                        <a class="nav-link title" href="/#community">en</a>
                    </li>
                    </ul>
                    <div className='nav-buttons d-flex'> 
                        <p className='mx-4'><button className='nav-btn btn px-5 button1 title' type="submit">JOIN US <img src={joinImg} alt="" /></button></p>
                        <p><button className='nav-btn btn px-5 button1 title'>STAKE <img src={stakeImg} alt="" style={{width: "19px"}} /></button></p>
                    </div>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar