import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'
import { LoginSignupValidation } from '../LoginSignupValidation/SignUp'

export const Signup = () => {
  const [signUpValues, setSignUpValues] = React.useState(
    {
      name: '',
      email: '',
      password: ''
    }
  )

  const [errors, setErrors] = React.useState({})

  const handleChange = (e) => {
    setSignUpValues(prevValues => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginSignupValidation(signUpValues);
    setErrors(LoginSignupValidation(signUpValues));

  }

  return (
    <div className="loginsignup">
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">

          <input type="text" placeholder='Your name' name='name' onChange={handleChange} />
          {errors.name && <div>{errors.name}</div>}
          <input type="email" placeholder='email' name='email' onChange={handleChange} />
          {errors.email && <div>{errors.email}</div>}
          <input type="password" placeholder='Your password' name='password' onChange={handleChange} />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <div className="loginsignup-login">
          <button onClick={handleSubmit} className='loginsignup-btn'>Continue</button>
          <p>Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}><span>Login here</span></Link></p>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='agree' id='' />
          <p>By countuning, i agree to the terms</p>
        </div>
      </div>

    </div>
  )
}
