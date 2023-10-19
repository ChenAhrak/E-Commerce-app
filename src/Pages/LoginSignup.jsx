import React from 'react'

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
        <button className='loginsignup-btn'>Continue</button>
        <p>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By countuning, i agree to the terms</p>
        </div>
      </div>

    </div>
  )
}
