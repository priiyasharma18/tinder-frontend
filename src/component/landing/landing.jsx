import React from "react"
import { Link } from "react-router-dom"
import './landing.css'
const Landing=()=>{

    return(
        <>
       <div className="landing-main">
        <div className="landing-child">
     <span className="hero-text">
        Start something epic.
     </span>
     <button className="hero-btn"  >
     <Link className='link' to='/login'> Create account</Link>
       
     </button>
        </div>
       </div>
        </>
    )


}

export default Landing

