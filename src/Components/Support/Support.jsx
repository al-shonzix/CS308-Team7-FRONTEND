import React, {useEffect} from 'react'

import gridImage from '../../assets/plan-1.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Support= ()=> {

    useEffect(()=>{
        Aos.init({duration: 2000})
    })

    return (
        <div className='support container section'>
            <div className= "sectionContainer">

                <div className="titlesDiv">
                    <small>travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help iwth your bookings and travel plans, wee what to expect along your Journey!</p>                
                </div>

                <div className="InfoDiv grid">
                    <div className="textDiv grid">
                        <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
                            <span className='number'>01</span>
                            <h4>Travel requirements for Dubai</h4>
                            <p>Find help with booking and travel plans, se what to expect along the journey to your favourite destinations!</p>
                        </div>


                        <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo" >
                            <span className='number colorOne'>02</span>
                            <h4>Chauffeur services at your arrival </h4>
                            <p></p>
                        </div>


                        <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
                            <span className='number colorTwo'>03</span>
                            <h4>Multi-Risk Travel Insurance</h4>
                            <p></p>
                        </div>
                    </div>

                    <div data-aos='fade-left' data-aos-duration='2000' className="imgDiv">
                        <img src={gridImage}  />                  
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Support