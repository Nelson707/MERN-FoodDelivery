import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Sign Up")

  return (
    <div className='login-popup'>
        <div className="login-popup">
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                {currentState==="Login"?<></>:<input type='text' placeholder='Name' required/>}
                    <input type='email' placeholder='Email' required/>
                    <input type='password' placeholder='Password' required/>
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, I agree to the privacy policy</p>
                </div>
                <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
                {currentState==="Login"
                ?<p>Create a new Account? <span onClick={()=>setCurrentState("Sign Up")}>Sign Up</span></p>
                :<p>Already have an Account? <span onClick={()=>setCurrentState("Login")}>Login</span></p>}
            </form>
        </div>
    </div>
  )
}

export default LoginPopup