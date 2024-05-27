import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'


import Aos from 'aos'
import 'aos/dist/aos.css'
import { Button } from 'react-bootstrap'

const Search= ()=> {


    useEffect(()=>{
        Aos.init({duration: 2000})
    })
    
    return (
    <div className= 'search container section'>
        <div className="sectionContainer grid">
            <div className="btns flex">

                <div className="singleBtn">
                    <span>Economy</span>
                </div>

                <div className="singleBtn">
                    <span>Businness Class</span>
                </div>

                <div className="singleBtn">
                    <span>First Class</span>
                </div>
            </div> 

            <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
                <Button>
                    <Link to="/App2">Book A Flight</Link>
                </Button>
            </div>
        </div>
    </div>
    )
}

export default Search