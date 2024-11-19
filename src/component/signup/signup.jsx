import React from "react";
import './signup.css'

const Signup = () => {
    return (
        <>
            <div className="signup-main">
                <div className="signup-left">
          <span className="hero-text">
          Sign up and reap the benefits...
          </span>
                </div>
                <div className="signup-right">
                    <div className="signup-child">
                    <input type="text" placeholder="First name" />

                    </div>
                    <div className="signup-child">
                    <input type="text" placeholder="Last name" />

                    </div>
                    <div className="signup-child">
                    <input type="text" placeholder=" Email" />

                    </div>
                    <div className="signup-child">
                    <input type="password" placeholder="Password" />

                    </div>
                    <div className="signup-child">
                        <button className="signup-btn"> Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup