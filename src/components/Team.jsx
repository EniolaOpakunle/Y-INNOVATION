import React from 'react'
import yop from '../assets/images/yop.png'
import hecker from '../assets/images/hecker.png'
import kleppelekker from '../assets/images/klep.png'
import busded from '../assets/images/busded.png'
import james from '../assets/images/james.png'
import sham from '../assets/images/sham.png'
import { useTranslation } from 'react-i18next';
function Team({hand}) {
    const { t, i18n } = useTranslation();
  return (
    <div>
      <div className='team text-light' id='team'>
        <div className='size text-left'>
          <p className='text-center title1'>{t('team.1')}</p>  
          <h1 className='text-center title2'>{t('team.2')}</h1>
          <div className='row mt-5 '>
                <div className='col-lg-4 p-4 col-md-6'>
                    <div className=' align-items-center box p-3'>
                        <div className="">
                            <img src={yop} alt="" className='w-100' />
                        </div>
                        <div className="mt-3 text-center">
                            <h2 className='title '>Alex - CEO</h2>
                            <p>{t('team.3')}
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
                            <p>{t('team.4')} </p>
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
                        <p>{t('team.5')}</p>
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
                        <p>{t('team.6')}</p>
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
                        <p>{t('team.7')}</p>
                    </div>
                </div>
            </div>
    
            <div className='col-lg-4 p-4 col-md-6'>
                <div className='align-items-center box p-3'>
                    <div className="">
                        <img src={sham} alt="" className='w-100' />
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className='title'>JULIUS -  WEB DEV</h2>
                        <p> {t('team.8')} </p>
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