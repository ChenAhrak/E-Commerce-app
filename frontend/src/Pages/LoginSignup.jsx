import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">

          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='Your password' />
        </div>
        <div className="loginsignup-login">
          <button className='loginsignup-btn'>Continue</button>
          <p>Already have an account? <span>Login here</span></p>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By countuning, i agree to the terms</p>
        </div>
      </div>

    </div>
  )
}
