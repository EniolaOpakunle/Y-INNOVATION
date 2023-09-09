import React from 'react'
import twitter from '../assets/images/twitter.png'
import telegram from '../assets/images/telegram.png'
import youtube from '../assets/images/youtube.png'
import github from '../assets/images/github.png'
import { useTranslation } from 'react-i18next';
function Footer({hand}) {
    const { t, i18n } = useTranslation();
  return (
    <div className='footer background w-100 text-light text-center'>
        <div className='size py-3'>
            <div>
                <p>Y-INNOVATION</p>
            </div>
            <div className='d-flex social-media justify-content-center'>
                <div className=''>
                    <a href="https://twitter.com/ThexkillerY"><img src={twitter} alt="" /></a>
                </div>
                <div>
                    <img src={telegram} alt="https://t.me/Yinnovations" />
                </div>
                <div>
                    <img src={youtube} alt="" />
                </div>
                <div>
                    <img src={github} alt="" />
                </div>
            </div>
        </div>
        <div className='text-center attribution w-100 mt-3 py-4'>
            @ Y INNOVATION 2023 | All Rights Reserved 
        </div>
    </div>
  )
}

export default Footer