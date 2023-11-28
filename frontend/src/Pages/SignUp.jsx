import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'
import { SignUpValidation } from '../LoginSignupValidation/SignUpValidation'

export const Signup = () => {

  const [errors, setErrors] = React.useState({});
  // const [backendData, setBackensData] = React.useState([]);
  const [signUpValues, setSignUpValues] = React.useState(
    {
      name: '',
      email: '',
      password: '',
      agree: false,
      isAdmin: false
    }
  )



  const handleChange = (e) => {
    setSignUpValues(prevValues => {
      const { name, value, checked, type } = e.target;
      return {
        ...prevValues,
        [name]: value,
        [name]: type === 'checkbox' ? checked : value
      }
    })

  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    const validationErrors = SignUpValidation(signUpValues);
    setErrors(validationErrors);

    if (validationErrors.name === undefined && validationErrors.email === undefined && validationErrors.password === undefined && validationErrors.agree === undefined) {
      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpValues),
  
      })
        .then(res => res.json())
        .then(data => {
          alert(data.message)
        })
        .catch((error) => {
          console.error('Error:', error);
        });    }

  }

  






  return (
    <div className="loginsignup">
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">

          <input type="text" placeholder='Your name' name='name' value={signUpValues.name} onChange={handleChange} />
          {errors.name && <div className='loginsignup-errors'>{errors.name}</div>}
          <input type="email" placeholder='email' name='email' value={signUpValues.email} onChange={handleChange} />
          {errors.email && <div className='loginsignup-errors'>{errors.email}</div>}
          <input type="password" placeholder='Your password' name='password' value={signUpValues.password} onChange={handleChange} />
          {errors.password && <div className='loginsignup-errors'>{errors.password}</div>}
        </div>
        <div className="loginsignup-login">
          <button onClick={handleSubmit} className='loginsignup-btn'>Continue</button>
          <p>Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}><span>Login here</span></Link></p>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='agree' id='' onChange={handleChange} />
          <p>By countuning, i agree to the terms</p>
        </div>
        {errors.agree && <div className='loginsignup-errors'>{errors.agree}</div>}
      </div>

    </div>
  )
}
