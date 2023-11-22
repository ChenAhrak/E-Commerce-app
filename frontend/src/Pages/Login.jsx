import React from 'react'
import './CSS/LoginSignup.css'
import { LoginValidation } from '../LoginSignupValidation/LoginValidation';

export const Login = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        LoginValidation(signUpValues);
        setErrors(LoginValidation(signUpValues))
    }


    return (
        <div className="loginsignup">
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
                </div>
            </div>
        </div>
    )
}
