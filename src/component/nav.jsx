import React from 'react'
import "./nav.css"
import logo from '../asset/Logo.png'
import { useNavigate } from 'react-router-dom';

const Nav = () => {

  let navigate = useNavigate()

  return (
    <>
      <nav className='navbar'>
        <div onClick={() => {navigate('/')}}>
            <img src={logo} alt="Nextflix Logo" className='title'/>
        </div>
        <button onClick={() => {navigate('/signin')}} className='btn'>Sign Up</button>
      </nav>
    </>
  )
}

export default Nav