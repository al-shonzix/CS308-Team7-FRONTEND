
import React, {useState} from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsPhoneVibrate } from 'react-icons/bs'
import {SiConsul} from 'react-icons/si'


import images from '../../assets/images.png'

const Navbar = () => {


    const [noBg, addBg] = useState('navBarTwo')
    const addBgColor= () =>{
        if(window.scrollY = 10){
            addBg('navBarTwo navbar_with_Bg')
        }else{
            addBg('navBarTwo')
        }
    }

    const removeNavBar= () =>{
        setActive('navBarMenu removeNavBar')
    }


    const [active, setActive] = useState('navBarMenu')
    const showNavBar= () =>{
        setActive('navBarMenu showNavBar')
    }

    return (
        <div className='navBar flex'>
            <div className="navBarOne flex">
                <div>
                    <SiConsul />
                </div>
                <div className='none flex'>
                    <li className='flex'><BsPhoneVibrate className='icon' />Support</li>
                    <li className='flex'><AiOutlineGlobal className='icon' />Languages</li>
                </div>

                <div className="atb flex">
                    <span> Sign In</span>
                    <span> Sign Out</span>
                </div>
            </div>
            <div className="navBarTwo">
                <div className="logodiv">
                    <img src={images} className='Logo' />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home</li>
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Crew</li>
                        <li onClick={removeNavBar} className="listItem">Flights</li>
                        <li onClick={removeNavBar} className="listItem">Destinations</li>
                        <li onClick={removeNavBar} className="listItem">Travellers</li>
                    </ul>
                    <button className='btn flex btnOne'>
                        Contact
                    </button>

                    <button className='btn flex btnTwo'>
                        Contact
                    </button>

                    <div onClick = {showNavBar} className='toggleIcon'>
                        <BsPhoneVibrate/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
