import React from 'react'
import arrow from '../assets/images/arrow.png'
import arrowUpside from '../assets/images/arrowUpside.png'

function Roadmap() {
  return (
    <div className='roadmap text-light' id='roadmap'>
        <div className='size'>
          <p className='text-center title1'>ROADMAP</p>
          <h1 className='text-center title2'>HOW IT ALL STARTED</h1>
          <div className=''>
            <div className='row'>
                <div className='col-lg-6 d-flex justify-content-center'>
                     <img src={arrow} alt="" className='w-50' />
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                     <img src={arrow} alt="" className='w-50' />
                </div>
            </div>
            <div className='row mt-5 '>
                <div className='col-lg-3 col-md-6'>
                    <div className=" box rounded ">
                        <div className='button1 px-3'>
                            <p className='subtitle'>PHASE 1</p>
                        </div>
                        <div className='phase-list p-4'>
                            <p>-Website Launch</p>
                            <p>- Launch of Y Social Media</p>
                            <p>- Community Build Up</p>
                            <p>- 100 Holders</p>
                            <p>- Burn 2% of Supply</p>
                        </div>
                        <div className='d-flex justify-content-end px-3'>
                            <p className='rounded-pill button1 p-2'>70%</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className=" box rounded">
                        <div className='button1 px-3'>
                            <p className='subtitle'>PHASE 2</p>
                        </div>
                        <div className='phase-list p-4'>
                            <p>- Value Marketing Campaign</p>
                            <p>- Making the Lp Stronger</p>
                            <p>- Website and Logo Update</p>
                            <p>- 300 Holders</p>
                            <p>- Burn 5% of Supply</p>
                        </div>
                        <div className='d-flex justify-content-end px-3'>
                            <p className='button1 p-2 rounded-circle'>70%</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className="box rounded">
                        <div className='button1 px-3'>
                            <p className='subtitle'>THE DEV</p>
                        </div>
                        <div className='p-4'> 
                            <p>The development take us long time and this was huge challenges for us.</p>
                            <p>We have faced a lot of problems during the development time between telegram bugs, not reliable private node and scam contracts ect ect.. but after 4 months of working time (full time, often until midnight)</p>
                            <p>we now have all our systems ready that include live chart, buybot, wallets bot, contract analysis, and much more...</p>  
                        </div>
                        <div className='d-flex justify-content-end px-3'>
                            <p className=' button1 p-2 rounded-circle '>70%</p>
                        </div>
                    </div> 
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className="box rounded">
                        <div className=' button1 px-3'>
                            <p className='subtitle'>THE LAUNCH</p>
                        </div>
                        <div className='p-4'>
                            <p>We just started, to be continued...</p>
                        </div>
                        <div className='d-flex justify-content-end px-3'>
                            <p className='rounded-circle button1 p-2'>70%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='arrowUpside'>
                <img src={arrowUpside} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Roadmap