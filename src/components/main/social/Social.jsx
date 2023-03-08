import SocialBox from './socialBox/SocialBox'
import MainHeader from '../MainHeader'
import {BsDiscord, BsTelegram } from 'react-icons/bs'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

import './Social.css'

export default function Social() {
  return (
        <div className="social">
            <MainHeader text={"social"}/>
            <div className="social__box-contaienr">
                <SocialBox> <BsDiscord className='social__icon'/> </SocialBox>
                <SocialBox> <AiFillInstagram className='social__icon'/> </SocialBox>
                <SocialBox> <AiOutlineTwitter className='social__icon'/> </SocialBox>
                <SocialBox> <BsTelegram className='social__icon'/> </SocialBox>
            </div>
        </div>
    )
}
