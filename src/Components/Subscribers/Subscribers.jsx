import React, {useEffect} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribers= ()=> {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  
  return (
    <div className='subscribe section'>
        <div data-aos='fade-up' data-aos-duration='2500' className="sectionConatiner">
            <h2>Subscribe Newsletters and get ltest News</h2>
            <div className="inputDiv flex">
                <input type="text" placeholder='Enter your email address' />
                <button className='btn'> Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribers