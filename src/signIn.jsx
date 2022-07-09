import React from 'react'
import './signIn.css'
import bg from './asset/bg.jpeg'
import { Link, useNavigate } from 'react-router-dom';
import logo from './asset/Logo.png'
import { useState } from 'react';
import { useAuth } from './context/AuthContext';

const SignIn = () => {

  let navigate = useNavigate()
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    rememberMe: true
  })
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const { user, logIn } = useAuth()

  function handleChange(event) {
    const {name, type, value, checked} = event.target 
    setSignUpForm(prevState => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function errocChecker(value) {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!value.email) {
      error.email = 'This field is required'
    } else if (!regex.test(value.email)) {
      error.email = 'Invalid email'
    }
    if(!value.password) {
      error.password = 'This field is required'
    } else if (value.password.length < 6) {
      error.password = 'Password must be at least 6 characters'
    }
    return error
  }

   const handleSubmit = async (event) => {
    event.preventDefault()
    setFormError(errocChecker(signUpForm))
    if(Object.keys(formError).length === 0) {
      setIsSubmit(true)
    }
    if(Object.keys(formError).length === 0 && isSubmit) {
      try {
        await logIn(signUpForm.email, signUpForm.password)
        console.log('logged in')
        navigate('/main')
      } catch(error) {
        console.log(error)

      }
    }
  } 


  return (
    <>
        <div className='imageCover'>
            <img src={bg} alt="background" className='bgSign'/>
            <div className='move' onClick={() => {navigate('/')}}>
              <img src={logo} alt="Nextflix Log" className='title' />
            </div>
            <div className='gradientt'></div>
            <div className='topContent'>
              <form className='form' onSubmit={handleSubmit}>
                <h1 className='signInTitle'>Sign In</h1>
                <div className='flexing'>
                  <p className='errorMessage'>{formError.email}</p>
                  <input 
                    type="text"
                    placeholder='Email'
                    className='signInEmail'
                    name='email'
                    value={signUpForm.email}
                    onChange={handleChange}
                  />
                  <p className='errorMessage'>{formError.password}</p>
                  <input 
                    type="password"
                    placeholder='Password'
                    className='signInPassword'
                    name='password'
                    value={signUpForm.password}
                    onChange={handleChange}
                  />
                  <button className='signUp'>Sign In</button>
                  <div className='bottomFlex'>
                    <div className='check'>
                      <input 
                        type="checkbox" 
                        className='signInCheck'
                        id='rememberMe'
                        name='rememberMe'
                        onChange={handleChange}
                        checked={signUpForm.rememberMe}
                      />
                      <label className='signInLabel' htmlFor="rememberMe">Remember me</label>
                    </div>
                    <span className='remember'>Need help?</span>
                  </div>
                </div>
                <p className='secondToLastParagraph'>New to Netflix? <Link to='/' className='link'><span className='span'>Sign up now</span></Link>.</p><br />
                <p className='lastParagraph'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className='link' to="#">Learn more.</Link></p>
              </form>
            </div>
        </div>
    </>
  )
}

export default SignIn