import React from "react";
import './signup.css';
import { Link, useActionData } from "react-router-dom";
import { useState,useEffect } from "react";

const Signup = () => {

    const [firstname,setFirstname]=useState({firstname:" "})
    const [lastname,setLastname]=useState({lastname:" "})
    const [email,setEmail]=useState({email:" "})
    const [password,setPassword]=useState({password:" "})


    const handleSubmit = async () => {
        console.log('clicked')

        let signUpRes = (await fetch('http://localhost:8081/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify({
                firstName: firstname.firstname,
                lastName:lastname.lastname,
                email: email.email,
                password: password.password
            })


        }))

        signUpRes = await signUpRes.json()
        console.log(signUpRes)
        // if (signUpRes.status == 'failed') {
        //     navigation('/login')
        // } else if (signUpRes.status == "404") {
        //     alert('user exists')
        //     // navigation('/login')
        // }
    }
   
    // const handleSubmit=()=>{
    //     console.log(firstname.firstname,lastname.lastname,email.email,password.password)
    // }


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
                    <input type="text" placeholder="First name"  onChange={(e)=>setFirstname({...firstname,firstname:e.target.value})}/>

                    </div>
                    <div className="signup-child">
                    <input type="text" placeholder="Last name" onChange={(e)=>setLastname({...lastname,lastname:e.target.value})}/>

                    </div>
                    <div className="signup-child">
                    <input type="text" placeholder="Email" onChange={(e)=>setEmail({...email,email:e.target.value})}/>

                    </div>
                    <div className="signup-child">
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword({...password,password:e.target.value})} />

                    </div>
                    <div className="signup-child">
                    <Link  to='/profile' ><button className="signup-btn" onClick={handleSubmit}> Create</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup