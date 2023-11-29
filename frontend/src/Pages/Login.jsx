import React from 'react'
import './CSS/LoginSignup.css'
import { LoginValidation } from '../LoginSignupValidation/LoginValidation';
import { Link,useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigation = useNavigate();
    const [errors, setErrors] = React.useState({});
    const [signUpValues, setSignUpValues] = React.useState(
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

    const handleSubmit =  (e) => {
        e.preventDefault();
        const validationErrors = LoginValidation(signUpValues);
        setErrors(validationErrors);
    
        if ( validationErrors.email === undefined && validationErrors.password === undefined ) {
            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(signUpValues),
          
              })
            .then(res => res.json())
            .then(data => {
              if(data.message === 'Email or Password already exist'){
                navigation('/')
              }
              else{
                alert('User not Exist go to Signup')
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });    }
    
      }
    

    return (
        <div className="loginsignup">
           <div className="login">
            <div className='loginsignup-container'>
                <h1>Login</h1>
                <div className="loginsignup-fields">
                    <input type="email" placeholder='email' name='email' value={signUpValues.email} onChange={handleChange} />
                    {errors.email && <div className='loginsignup-errors'>{errors.email}</div>}
                    <input type="password" placeholder='Your password' name='password' value={signUpValues.password} onChange={handleChange}/>
                    {errors.email && <div className='loginsignup-errors'>{errors.password}</div>}
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
