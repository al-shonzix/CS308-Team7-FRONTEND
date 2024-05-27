import React, {useEffect} from 'react'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { TiSocialFacebook } from 'react-icons/ti'
import logo from '../../assets/images.png'
import { Link } from 'react-router-dom'

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
                        <Link to="/App">Home</Link>
                    </li>
                    <li>
                        <Link to="/App">Explore</Link>
                    </li>
                    <li>
                        <Link to="/Travel">Travel</Link>
                    </li>
                    <li>
                        <Link to="/App2">Book A flight</Link>
                    </li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer