import React, { useState, useEffect } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsPhoneVibrate } from 'react-icons/bs';
import { SiConsul } from 'react-icons/si';
import { Link } from 'react-router-dom';
import {AdminLoginContext} from '../../AdminLoginContext';
import images from '../../assets/images.png';
import { useContext } from 'react';

const Navbar = () => {
    const { AdminLoginSuccessful } = useContext(AdminLoginContext);
    const [noBg, addBg] = useState('navBarTwo');
    const [active, setActive] = useState('navBarMenu');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 10) {
                addBg('navBarTwo navbar_with_Bg');
            } else {
                addBg('navBarTwo');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const removeNavBar = () => {
        setActive('navBarMenu removeNavBar');
    };

    const showNavBar = () => {
        setActive('navBarMenu showNavBar');
    };

    return (
        <div className={`navBar flex ${noBg}`}>
            <div className="navBarOne flex">
                <div>
                    <SiConsul />
                </div>
                <div className="none flex">
                    <li className="flex">
                        <BsPhoneVibrate className="icon" />Support
                    </li>
                    <li className="flex">
                        <AiOutlineGlobal className="icon" />Languages
                    </li>
                </div>

                <div className="atb flex">
                    
                    <Link to="/Login">Log In</Link>
                    <Link to="/create-account">Create Account</Link>
                </div>
            </div>
            <div className="navBarTwo">
                <div className="logodiv">
                    <img src={images} className="Logo" alt="Logo" />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">
                            <Link to="/App">Home</Link>
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            <Link to="/About">About</Link>
                        </li>
                        {AdminLoginSuccessful ?(
                            <li onClick={removeNavBar} className="listItem">
                                <Link to="/Crew">Crew</Link>
                            </li>
                        ):(<p>Crew</p>
                        )}
                        <li onClick={removeNavBar} className="listItem">
                            <Link to="/Flight">Flights</Link>
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            <Link to="/Travel">Destinations</Link>
                        </li>
                        {AdminLoginSuccessful ?(
                            <li onClick={removeNavBar} className="listItem">
                                <Link to="App3">Passenger</Link>
                            </li>
                        ):(<p>Passenger</p>
                        )}
                    </ul>
                    <button className="btn flex btnOne">Contact</button>

                    <button className="btn flex btnTwo">Contact</button>

                    <div onClick={showNavBar} className="toggleIcon">
                        <BsPhoneVibrate />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
