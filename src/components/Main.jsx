import React from 'react'
import Navbar from './Navbar'
import buyImg from '../assets/images/Vector1.png'
import joinImg from '../assets/images/join.png'

function Main() {
  return (
    <div className='header'>
        <Navbar/>
        <div className="main size pt-5">
          <div className='row mt-5 py-4'>
            <div className='col-lg-5  col-md-9 py-4'>
              <h3 className='text1'>OUR TOKEN IS <span className='text-light'>LIVE !!!</span></h3>
              <h1 className='text2 mt-3'>THIS IS WHERE <span className=''>CRYPTO</span> MEETS INNOVATION AND CHARITY</h1>
              <p className=' my-4 text-light text'>Y INNOVATIONS is not just a crypto project, it is a franchise made to revolutionize the crypto as we see it, bringing you real use case utilities and pivoting from the crypto markets into the stock markets</p>
              <div className='mt-4 d-flex'>
                <a className='btn px-5 btn1 title text-light ' href = "https://twitter.com/ThexkillerY">JOIN TELEGRAM <img src={joinImg} alt=""/></a>
                <button className='btn px-5 button1 mx-3 text-light title'>BUY NOW! <img src={buyImg} alt="" /></button>
              </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-end img-div align-items-center'>
              {/* <img src={} alt="" style={{width: "70%", height: "90%"}} className=''/> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main