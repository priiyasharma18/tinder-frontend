import React from "react";
import './navbar.css'

const Navbar=()=>{
    return(
        <>
        <div className="nav-parent">
            <div className="nav-left">
           <span className="logo">
            <img src="http://localhost:3000/image/logo.png" alt="logo" height="50px "  width="50px"/> <span className="text">
                tinder
            </span>
           </span>
            </div>
            <div className="nav-right">
            <span className="nav-item">
            <span className="about">About us</span>
            </span>
            <span className="nav-item">
            <button className="login">Log in</button>
                </span>
            </div>
        </div>
        </>
    )
}
export default Navbar