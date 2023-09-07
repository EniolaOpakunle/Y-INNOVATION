import React from 'react'
import yop from '../assets/images/yop.png'
import hecker from '../assets/images/hecker.png'
import kleppelekker from '../assets/images/klep.png'
import busded from '../assets/images/busded.png'
import james from '../assets/images/james.png'
import sham from '../assets/images/sham.png'

function Team({hand}) {
  return (
    <div>
      <div className='team text-light' id='team'>
        <div className='size text-left'>
          <p className='text-center title1'>TEAM MEMBER</p>  
          <h1 className='text-center title2'>MEET THE CREW</h1>
          <div className='row mt-5 '>
                <div className='col-lg-4 p-4 col-md-6'>
                    <div className=' align-items-center box p-3'>
                        <div className="">
                            <img src={yop} alt="" className='w-100' />
                        </div>
                        <div className="mt-3 text-center">
                            <h2 className='title '>Alex - CEO</h2>
                            <p>With a dream to change the WORLD(not just the crypto world), He started Y innovations tomake that dream a reality merging real life utilities to crypto and creating an entirely newecosystem. Alex's a builder and Y innnovations is his building, he's building a skyscraper.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 p-4 col-md-6'>
                    <div className=' align-items-center box p-3'>
                        <div className="">
                            <img src={hecker} alt="" className='w-100' />
                        </div>
                        <div className="mt-3 text-center">
                            <h2 className='title'>Kalliroi - (TEAM)CMO</h2>
                            <p>With years of experience working with big time MArketing agencies, She sees the potiential in 'Y

                                </p>
                        </div>
                    </div>
                </div>
            <div className='col-lg-4 p-4 col-md-6'>
                <div className=' align-items-center box p-3'>
                    <div className="">
                        <img src={kleppelekker} alt="" className='w-100' />
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className='title'>Stamatios - (TEAM)CFO</h2>
                        <p>With first rate qualifications, Stamatios has been recruited into Y innovations ensuring amd
                        monitoring all financial decisions made are highly beneficial to the company's goals.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 p-4 col-md-6'>
                <div className='align-items-center box p-3'>
                    <div className="">
                        <img src={busded} alt="" className='w-100' />
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className='title'>Vincenzo - (TEAM)CIO</h2>
                        <p>Withn over 4years experience in the crypto space, He has accumulated a network of the biggest names and people n the space. Hence why he was recruited as the CIO in Y Innovations.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 p-4 col-md-6'>
                <div className='align-items-center box p-3'>
                    <div className="">
                        <img src={james} alt="" className='w-100' />
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className='title'>Frenna - (TEAM)DEV</h2>
                        <p>One and only Frenna with over half a decade of experience, He is one of the best developers in crypto space right now, doubt you could find a more based developer than Frenna</p>
                    </div>
                </div>
            </div>
            {/* <div className='col-lg-6  p-4'>
                <div className='row align-items-center box p-3'>
                    <div className="col-lg-6 col-md-6">
                        <img src={tommy} alt="" className='w-100' />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-3">
                        <h2>TOMMY</h2>
                        <p>Social twitter</p>
                        <p>As a crypto lover, I am passionate about the world of cryptocurrencies. I have been actively involved in the crypto community, staying updated with the latest news, trends, and advancements. I enjoy exploring different blockchain projects, understanding their innovations, and evaluating their potential for future growth.</p>
                    </div>
                </div>
            </div> */}
            <div className='col-lg-4 p-4 col-md-6'>
                <div className='align-items-center box p-3'>
                    <div className="">
                        <img src={sham} alt="" className='w-100' />
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className='title'>JULIUS -  WEB DEV</h2>
                        <p>I'm not just your average Julius, I'm one of the best web dev you can think of  </p>
                    </div>
                </div>
            </div>
            {/* <div className='p-4 col-lg-6'>
                <div className='row align-items-center box p-3'>
                <div className="col-lg-6 col-md-6">
                    <img src={edo} alt="" className ='w-100' />
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                    <h2>EDO</h2>
                    <p>Team</p>
                    <p>OG in Crypto Space , been working long time as Mod , Marketer , Shiller. Took a break from crypto & went to Market NFTs , now I’m back to 💣 your Mom . PS : no amazing proposal ser</p>
                </div>
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team