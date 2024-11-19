import React from "react"
import { Link } from "react-router-dom"
import './landing.css'
const Landing = () => {

    return (
        <>
            <div className="landing-main">
                <div className="landing-child">
                    <span className="hero-text">
                        Start something epic.
                    </span>
                    <button className="hero-btn"  >
                        <Link className='link' to='/signup'> Create account</Link>


                    </button>
                    <span className="signin"><Link className='link' to='/login'> Already have an account ?</Link></span>
                </div>
            </div>
        </>
    )


}

export default Landing

