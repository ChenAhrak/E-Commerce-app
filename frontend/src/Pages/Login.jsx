import React from 'react'
import './CSS/LoginSignup.css'

export const Login = () => {
    return (
        <div className="loginsignup">
            <div className='loginsignup-container'>
                <h1>Login</h1>
                <div className="loginsignup-fields">
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='Your password' />
                </div>
                <div className="loginsignup-login">
                    <button className='loginsignup-btn'>Continue</button>
                </div>
            </div>
        </div>
    )
}
