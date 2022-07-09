import React from 'react'
import './landingPage.css'
import Nav from './nav';
import bg from '../asset/bg.jpeg';
import HeroContent from './heroContent';

const LandingPage = () => {
  return (
    <>
        <div className='imageCover'>
            <Nav />
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