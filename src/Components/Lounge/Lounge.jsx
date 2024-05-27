import React, {useEffect} from 'react'
import imageGrid from '../../assets/plan-2.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge= ()=> {

    useEffect(()=>{
        Aos.init({duration: 2000})
    })

  return (
    <div className='lounge container section'>
        <div className="sectionContainer grid">
            <div  className="imgDiv">
                <img src={imageGrid} />
            
            </div>

            <div className="textDiv">
                <h2>Unaccompanied Minor Lounge</h2>
            </div>

            <div className= "grids grid">
                <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                    <span className='gridTitle'>
                        Help through the airport
                    </span>
                    <p>You can also call airlines through your phone and book a ticket to your favourite destination!</p>
                </div>

                <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                    <span className='gridTitle'>
                        Priority Boarding
                    </span>
                    <p>You can also call airlines through your phone and book a ticket to your favourite destination!</p>
                </div>

                <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                    <span className='gridTitle'>
                        Care on the flight
                    </span>
                    <p>You can also call airlines through your phone and book a ticket to your favourite destination!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lounge