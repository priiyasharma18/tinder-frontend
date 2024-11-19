import React from "react";
import './login.css'

const Login = () => {
    return (
        <>
            <div className="login-main">
                <div className="login-child">
                    <div className="child">
                        <span className="email">
                           
                        </span>
                        <input type="text" placeholder="Enter email" />

                    </div>
                    <div className="child">
                        <span className="password">
                          
                        </span>
                        <input type="password" placeholder="password" />

                    </div>
                    <div className="child">
                        <button className="login">
                            Log in
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login