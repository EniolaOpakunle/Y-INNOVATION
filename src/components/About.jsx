import React from 'react'
import buyImg from '../assets/images/Vector1.png'
import joinImg from '../assets/images/join.png'

function About() {
  return (
    <div className='about text-light' id='about'>
      <div className=' py-5 background size' >
        <div className='size row justify-content-space-between'>
          <div className='col-lg-6 div1'>
            <div className=' w-100'>
              <img src='' alt="" className='w-100'/>
            </div>
          </div>
          <div className='col-lg-6 px-4 div2'>
            <div className=''>
              <h4 className='title'>WHY WE STARTED Y</h4>
              <h3 className=''>ABOUT Y</h3>
              <p>Our aim at Y INNOVATIONS is pretty simple, bringing real life uses caes and utilities to the digital world. Using it's proceeds to benefit our investors and having what is left over go into charity</p>
              <p>Y INNOVATIONS is a Non-profit organisation as our CEO is a philantropist and he created this firm to benefit its investors and the world as a whole.</p>
              <p>Y INNOVATIONS is emulating companies like SpaceX, X(twitter) and a few other firms to become the next technologically advanced firm</p>
            </div>
            <div className='mt-5'>
              <h4 className='secondaryColor1 title'>WHAT WE OFFER</h4>
              <h3>Y INNOVATIONS STARTING UTILITIES</h3>
              <p>As we have said earlier, we are not your regular token that builds its utility to pump up price, we offer innovative utilities that solve real problems</p>
              <p>All our utilites basically aim to profit our investors and ensure they are endlessly rewarded for being a part of Y INNOVATIONS</p>
            </div>
            <div className='row'>
              <div className='col-6 pr-1'>
                <div className=" utility-div pt-1">
                    <p><span className='title'>Staking Dappo: </span> This gives passive income for holding $Y</p>
                </div>
              </div>
              <div className='col-6 pr-1'>
                <div className=" utility-div pt-1">
                    <p><span className='title'>Shillbot:</span> This help project advertise and get volume without relying on no volume callers</p>
                </div>
              </div>
              <div className='col-6 pr-1'>
                <div className="utility-div pt-1">
                    <p><span className='title'>Charity :</span> We give out a part of our proceeds to charities to help better the lives of children</p>
                </div>
              </div>
              <div className='col-6 pr-1'>
                <div className=" utility-div pt-1">
                    <p><span className='title'>Burns: </span>With our daily burn mechanism, the value of $Y will rise</p>
                </div>
              </div>
            </div>
            <div className='btn-div'>
              <button className='btn btn1 px-5 text-light'>JOIN TELEGRAM <img src= {joinImg} alt="" /></button>
              <button className='btn px-5 mx-3 button1'>BUY NOW <img src={buyImg} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About