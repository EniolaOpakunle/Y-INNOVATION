import React from 'react'
import buyImg from '../assets/images/Vector1.png'
import joinImg from '../assets/images/join.png'
import aboutImg from '../assets/images/about.png'
import { useTranslation } from 'react-i18next';

function About({hand}) {
  const { t, i18n } = useTranslation();

  return (
    <div className='about text-light' id='about'>
      <div className=' py-5 size' >
        <div className='size row justify-content-space-between'>
          <div className='col-lg-6 div1'>
            <div className=' w-100 pb-5'>
              <img src={aboutImg} alt="" className='w-100'/>
            </div>  
          </div>
          <div className='col-lg-6 px-4 div2'>
            <div className=''>
              <h4 className='title'>{t('about.1')} Y</h4>
              <h3 className=''>{t('about.2')} Y</h3>
              <p>{t('about.3')}</p>
              <p>{t('about.4')}</p>
              <p>{t('about.5')}</p>
            </div>
            <div className='mt-5'>
              <h4 className='title'>{t('about.6')}</h4>
              <h3>Y INNOVATIONS STARTING UTILITIES</h3>
              <p>{t('about.8')}</p>
              <p>{t('about.9')}</p>
            </div>
            <div className='row utility pb-4'>
              <div className='col-6 p-1 utility1'>
                <div className=" utility-div pt-1">
                    <p><span className='title'>Staking Dapp: </span> {t('about.10')}</p>
                </div>
              </div>
              <div className='col-6 pr-1 pt-1 utility2'>
                <div className=" utility-div pt-1">
                    <p><span className='title'>Shillbot:</span> {t('about.11')} </p>
                </div>
              </div>
              <div className='col-6 p-1 utility3'>
                <div className="utility-div pt-1">
                    <p><span className='title'>Charity :</span>{t('about.12')} </p>
                </div>
              </div>
              <div className='col-6 pr-1 pt-1 utility4'>
                <div className=" utility-div pt-1">
                    <p><span className='title'>Burns: </span>{t('about.13')}</p>
                </div>
              </div>
            </div>
            <div className='btn-div d-flex mt-3'>
              <a className='btn btn1 px-3 text-light' href='https://t.me/Yinnovations'>{t('home.7')} <img src= {joinImg} alt="" /></a>
              <a className='btn px-3 button1 mx-3 text-light title'  href='https://poocoin.app/tokens/0xc87138284116dc1b33c1cb2496beb3df73a53ee2' >{t('home.8')} <img src={buyImg} alt="" /></a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About