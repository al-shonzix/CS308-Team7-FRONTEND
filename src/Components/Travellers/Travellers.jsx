import React, {useEffect} from 'react'
import paris from '../../assets/traveller-2.jpg'
import dubai from '../../assets/traveller-1.jpg'
import london from '../../assets/traveller-3.jpg'
import sydney from '../../assets/traveller-4.jpg'
import traveller1 from '../../assets/client-1.jpg'
import traveller2 from '../../assets/client-2.jpg'
import traveller3 from '../../assets/client-3.jpg'
import traveller4 from '../../assets/client-4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const travellers = [
    {
       id : 1,
       destinationImage: paris,
       travellerImage: traveller1,
       travellerName: 'Judy Ngort',
       socialLink: '@judyNgort'
    },

    {
        id : 2,
        destinationImage: dubai,
        travellerImage: traveller2,
        travellerName: 'Jason Ruler',
        socialLink: '@jRuler'
     },

     {
        id : 3,
        destinationImage: london,
        travellerImage: traveller3,
        travellerName: 'Aisha Doe',
        socialLink: '@AishD'
     },

     {
        id : 4,
        destinationImage: sydney,
        travellerImage: traveller4,
        travellerName: 'Filly Tron',
        socialLink: '@FilTron'
     }
]
const Travellers= ()=> {

    useEffect(()=>{
        Aos.init({duration: 2000})
    })

  return (
    <div className='travellers container section'>
        <div className="sectionContainer">
            <h2 data-aos='fade-up' data-aos-duration='2500'>
                Top travellers of this month!
            </h2>

            <div className="travellerContainer grid">
            
                {
                 travellers.map(({id, destinationImage, travellerImage, travellerName, socialLink})=>{
                    return(
                        <div key ={id} className="singleTraveller">
                        <img src={destinationImage} className='destinationImage'/>
                        <div className="travellerDetails">
                            <div className="travellerPicture">
                                <img src={travellerImage} className="travellerImage"/>                      
                            </div>
                            <div className="travellername">
                                <span>{travellerName}</span>
                                <p>{socialLink}</p>
                            </div>
                        </div>
                    </div>
                    )
                 })    
                }
            </div>
        </div>
    </div>
  )
}

export default Travellers