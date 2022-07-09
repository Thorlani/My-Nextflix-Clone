import React from 'react'
import './input.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';

const Input = () => {

  let navigate = useNavigate()

  const [formStage, setFormStage] = useState(1)
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const {user, signUp} = useAuth()

  function handleChange(event) {
    const {name, type, value, checked} = event.target 
    setInput(prevState => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await signUp(input.email.toString(), input.password.toString())
      console.log('signed up')
      navigate('/main')
    } catch(error) {
      console.log(error)
    }
  }

  const next = () => {
    setFormStage(2)
  }
  const previous = () => {
    setFormStage(1)
  }


  return (
    <>
        <div>
            <h3 className='inputLabel'>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div>
                {
                  formStage === 1 ?
                  <form onSubmit={handleSubmit} className='flex'>
                    <input 
                    type="email"
                    className='email'
                    placeholder='Email address'
                    name='email'
                    value={input.email}
                    onChange={handleChange}
                    />
                    <button onClick={next} className='button'>Get Started</button>
                    
                </form> : null
                } 
                {
                  formStage === 2 ?
                  <form onSubmit={handleSubmit} className='flex'>
                    <button onClick={previous} className='button'>Previous</button>
                    <input 
                    type="password"
                    className='email'
                    placeholder='Password'
                    name='password'
                    value={input.password}
                    onChange={handleChange}
                    />
                    <button type='submit' className='button'>Submit</button>
                </form> : null
                }
            </div>
        </div>
    </>
  )
}

export default Input