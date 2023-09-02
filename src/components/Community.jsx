import React from 'react'
import joinImg from '../assets/images/join.png'
import buyImg from '../assets/images/Vector1.png'

function Community() {
  return (
    <div className=' py-5 community text-light  ' id='community'>
        <div className='size'>
        <p className='col-lg-6 m-auto text-center'>OUR COMMUNITY</p>
        <p className='col-lg-6 m-auto text-center'>JOIN OUR COMMUNITY AND GET EARLY ACCESS</p>
        <div className='d-flex justify-content-center mt-5 btn-div col-lg-6 m-auto'>
              <button className='btn btn1 px-5 text-light'>JOIN TELEGRAM <img src= {joinImg} alt="" /></button>
              <button className='btn px-5 mx-3 button1'>BUY NOW <img src={buyImg} alt="" /></button>
            </div>
        </div>
  </div>
  )
}

export default Community