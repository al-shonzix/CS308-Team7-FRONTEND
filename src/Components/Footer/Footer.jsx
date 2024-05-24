import React, {useEffect} from 'react'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { TiSocialFacebook } from 'react-icons/ti'
import logo from '../../assets/images.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer= ()=> {

    useEffect(()=>{
        Aos.init({duration: 2000})
      })

  return (
    <div className='footer'>

        <div className="sectionContainer conatiner grid">
            <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
                <div className="logoDiv">
                    <img src={logo} className='Logo'/>
                </div>
                <p>Your mind shoudl be stronger than your feelings, fly!</p>
                <div className="socialicon flex">
                    <TiSocialFacebook className='icon'/>
                    <AiOutlineTwitter className='icon'/>
                    <AiFillYoutube className='icon'/>
                    <FaPinterestP className='icon'/>
                </div>

                <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Flight Status</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Book A Flight</a>
                    </li>
                    <li>
                        <a href="">Manage Your Bookings</a>
                    </li>
                </div>

                <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">How to</a>
                    </li>
                    <li>
                        <a href="">Route Map</a>
                    </li>
                    <li>
                        <a href="">Baggage</a>
                    </li>
                    <li>
                        <a href="">Vehicles</a>
                    </li>
                    <li>
                        <a href="">Crew</a>
                    </li>
                </div>

                <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Chauffeur</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Transportation</a>
                    </li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer