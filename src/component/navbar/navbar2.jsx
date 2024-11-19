import React from "react"
import './navbar2.css'


const Nav=()=>{
    return(
        <>
        <div className="nav-main">
            <div className="nav-child1">
           <span className="logo">
            <img src="http://localhost:3000/image/tinder-logo.jpg" alt="logo" height="50px "  width="50px"/>
             <span className="text">
                tinder
            </span>
           </span>
            </div>
            <div className="nav-child2">
            <span className="nav-item">
            <button className="login">Log in</button>
                </span>
            </div>
        </div>
        </>
    )
}
export default Nav