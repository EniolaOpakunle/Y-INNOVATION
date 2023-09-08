import React from 'react'
import joinImg from '../assets/images/join.png'
import buyImg from '../assets/images/Vector1.png'
import { useTranslation } from 'react-i18next';

function Community({hand}) {
  const { t, i18n } = useTranslation();

  return (
    <div className=' community text-light  ' id='community'>
        <div className='size'>
        <p className='col-lg-6 m-auto text-center title1'>{t('com.1')}</p>
        <p className='col-lg-6 m-auto text-center title2 mt-2'>{t('com.2')}</p>
        <div className='d-flex justify-content-center mt-5 btn-div col-lg-6 m-auto'>
              <a className='btn btn1 px-2 text-light' href='https://t.me/Yinnovations'>{t('home.7')}<img src= {joinImg} alt="" /></a>
              <a className='btn px-2 button1 mx-3 text-light title'  href='https://poocoin.app/tokens/0xc87138284116dc1b33c1cb2496beb3df73a53ee2' >{t('home.8')} <img src={buyImg} alt="" /></a>
            </div>
        </div>
  </div>
  )
}

export default Community