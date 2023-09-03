import React from 'react'
import yop from '../assets/images/yop.png'
import hecker from '../assets/images/hecker.png'
import kleppelekker from '../assets/images/klep.png'
import busded from '../assets/images/busded.png'
import james from '../assets/images/james.png'
import sham from '../assets/images/sham.png'

function Team() {
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
                            <h2 className='title '>YOP - LEAD DEV</h2>
                            <p>With more than 14years experiences as fullstack engineer and entrepreneur in heart, always looking for challenges.
                            Love the crypto world, and started Y INNOVATIONS just for fun but now its become a full time projects with a real market and business model.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 p-4 col-md-6'>
                    <div className=' align-items-center box p-3'>
                        <div className="">
                            <img src={hecker} alt="" className='w-100' />
                        </div>
                        <div className="mt-3 text-center">
                            <h2 className='title'>HECKER - TEAM (CO)</h2>
                            <p>CrYpto enthusiasts from og bsc times 2020 , love helping out and finding true gems. Hardworker and always grinding for success. LFG</p>
                        </div>
                    </div>
                </div>
            <div className='col-lg-4 p-4 col-md-6'>
                <div className=' align-items-center box p-3'>
                    <div className="">
                        <img src={kleppelekker} alt="" className='w-100' />
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className='title'>KLEPPELEKKER - COMM. MANA.</h2>
                        <p>In cryptospace for few years already. Experience as part of teams also couple of years. As part of the Y-INNOVATION team we can 💣 this one.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 p-4 col-md-6'>
                <div className='align-items-center box p-3'>
                    <div className="">
                        <img src={busded} alt="" className='w-100' />
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className='title'>BUSDED - TEAM TWITTER</h2>
                        <p>I'm a graphics designer. Being part of Y-INNOVATION allows me to shape the project's identity due to my passion , translating its potential into compelling graphics, fostering user understanding, and ultimately, contributing to the widespread adoption of this cryptocurrency, especially on BSC.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 p-4 col-md-6'>
                <div className='align-items-center box p-3'>
                    <div className="">
                        <img src={james} alt="" className='w-100' />
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className='title'>JAMES - SOCIAL TWITTER</h2>
                        <p>An avid crypto enthusiast who has experience and knowledge in marketing products via social media platforms.</p>
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
                        <h2 className='title'>SHAM - TEAM PUSHER</h2>
                        <p>I'm not just your average Joe, I'm the crypto wizard who's been enchanting the trading world for over 3 magical years! I've honed my skills in degens and tamed the wild crypto market with my trading prowess. I can read charts like a fortune teller and predict market trends with uncanny accuracy (well, most of the time). Join me on this exhilarating rollercoaster ride through the realms of cryptocurrencies as we seek fortune and adventure! Trust me, in this magical land of crypto, I'm the trader you want by your side.</p>
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