import React from 'react'
import arrow from '../assets/images/arrow.png'
import arrowUpside from '../assets/images/arrowUpside.png'
import { useTranslation } from 'react-i18next';

function Roadmap({hand}) {
    const { t, i18n } = useTranslation();
  return (
    <div className='roadmap text-light' id='roadmap'>
        <div className='size'>
          <p className='text-center title1'>{t('roadmap.1')}</p>
          <h1 className='text-center title2'>{t('roadmap.2')}</h1>
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
                            <p className='subtitle'>{t('roadmap.3')} 1</p>
                        </div>
                        <div className='phase-list p-4'>
                            <p>-{t('roadmap.4')}</p>
                            <p>- {t('roadmap.5')}</p>
                            <p>- {t('roadmap.6')}</p>
                            <p>- 100 {t('rate.1')}</p>
                            <p>- {t('roadmap.7')}</p>
                        </div>
                        <div className='d-flex justify-content-end px-3'>
                            <p className='rounded-pill button1 p-2'>10%</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className=" box rounded">
                        <div className='button1 px-3'>
                            <p className='subtitle'>{t('roadmap.3')} 2</p>
                        </div>
                        <div className='phase-list p-4'>
                            <p>- Value Marketing Campaign</p>
                            <p>-  {t('roadmap.9')}</p>
                            <p>- {t('roadmap.8')}</p>
                            <p>- 300  {t('rate.1')} </p>
                            <p>- {t('roadmap.10')}</p>
                        </div>
                        <div className='d-flex justify-content-end px-3'>
                            <p className='button1 p-2 rounded-circle'>30%</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className="box rounded">
                        <div className='button1 px-3'>
                            <p className='subtitle'>THE DEV</p>
                        </div>
                        <div className='p-4'> 
                            <p>Y Innovation is not just a crypto project, it's a franchise/Company with aims to expand accross the globe</p>
                            <p>My aim for Y is to serve real life utilities and give services tat assist our investors in making day to day activities easy</p>
                            <p>We have so many utilitie prepared and in preparation some of themare Shill bot, staking Dapp, Token scanners ,charity organisations, mechandise store ,dex swep etc.</p>  
                        </div>
                        <div className='d-flex justify-content-end px-3'>
                            <p className=' button1 p-2 rounded-circle '>65%</p>
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
                            <p className='rounded-circle button1 p-2'>75%</p>
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