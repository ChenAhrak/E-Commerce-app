import React, { useEffect } from 'react'
import './CSS/LoginSignup.css'
import { LoginValidation } from '../LoginSignupValidation/LoginValidation';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

export const Login = () => {

  const { userStatus } = React.useContext(ShopContext);
  const navigation = useNavigate();
  const [errors, setErrors] = React.useState({});
  const [signUpValues, setSignUpValues] = React.useState(JSON.parse(localStorage.getItem('signUpValue'))||
    {
      email: '',
      password: '',
    } 
  )

  const handleChange = (e) => {
    setSignUpValues(prevValues => {
      const { name, value } = e.target;
      return {
        ...prevValues,
        [name]: value,
      }
    })
  }

  useEffect(()=>{
    localStorage.setItem("signUpValue",JSON.stringify(signUpValues))
  },[signUpValues])

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = LoginValidation(signUpValues);
    setErrors(validationErrors);
    console.log(validationErrors);
    if (validationErrors.email === undefined && validationErrors.password === undefined) {
      fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpValues),

      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'Welcome!!!') {
            userStatus()
            alert(data.message)
            navigation('/')

          }
          else {
            alert('User not Exist go to Signup')
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

  }


  return (
    <div className="loginsignup">
      <div className="login">
        <div className='loginsignup-container'>
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder='email' name='email' value={signUpValues.email} onChange={handleChange} />
            {errors.email && <div className='loginsignup-errors'>{errors.email}</div>}
            <input type="password" placeholder='Your password' name='password' value={signUpValues.password} onChange={handleChange} />
            {errors.password && <div className='loginsignup-errors'>{errors.password}</div>}
          </div>
          <div className="loginsignup-login">
            <button className='loginsignup-btn' onClick={handleSubmit}>Continue</button>
            <p>Back to <Link to='/signup' style={{ textDecoration: 'none' }}><span>SignUp</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
