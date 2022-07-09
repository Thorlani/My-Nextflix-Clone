import React from 'react'
import './landingPage.css'
import Nav from './nav';
import bg from '../asset/bg.jpeg';
import HeroContent from './heroContent';
import logo from '../asset/Logo.png'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  let navigate = useNavigate()

  return (
    <>
        <div className='imageCover'>
            <>
            <nav className='navbar2'>
              <div onClick={() => {navigate('/')}}>
                  <img src={logo} alt="Nextflix Logo" className='title2'/>
              </div>
              <button onClick={() => {navigate('/signin')}} className='btn'>Sign Up</button>
            </nav>
            </>
            <img src={bg} alt="background" className='bg'/>
            <div className='gradient'></div>
            <div className='topContent'>
            <HeroContent />
            </div>
        </div>
    </>
  )
}

export default LandingPage