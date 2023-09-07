import React from 'react'
import Navbar from './Navbar'
import buyImg from '../assets/images/Vector1.png'
import joinImg from '../assets/images/join.png'
import { useTranslation } from 'react-i18next';

function Main({handle}) {
  const { t, i18n } = useTranslation();
  return (
    <div className='w-100'>
        <Navbar hand={handle}  />
    <div className='header'>
        <div className="main size pt-5">
          <div className='row mt-5 py-4'>
            <div className='col-lg-5  col-md-9 py-4'>
            <h3>{t('Thanks.1')}</h3>
              <h3 className='text1'>OUR TOKEN IS <span className='text-light'>LIVE !!!</span></h3>
              <h1 className='text2 mt-3'>THIS IS WHERE <span className=''>CRYPTO</span> MEETS INNOVATION AND CHARITY</h1>
              <p className=' my-4 text-light text'>Y INNOVATIONS is not just a crypto project, it is a franchise made to revolutionize the crypto as we see it, bringing you real use case utilities and pivoting from the crypto markets into the stock markets</p>
              <div className='mt-4 d-flex'>
                <a className='btn px-5 btn1 title text-light ' href = "https://t.me/Yinnovations">JOIN TELEGRAM <img src={joinImg} alt=""/></a>
                <a className='btn px-5 button1 mx-3 text-light title'  href='https://poocoin.app/tokens/0xc87138284116dc1b33c1cb2496beb3df73a53ee2' >BUY NOW! <img src={buyImg} alt="" /></a>
              </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-end img-div align-items-center'>
              {/* <img src={} alt="" style={{width: "70%", height: "90%"}} className=''/> */}
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Main