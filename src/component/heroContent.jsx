import React from 'react'
import '../component/heroContent.css'
import Input from './input'

const HeroContent = () => {
  return (
    <>
        <div className='hero'>
            <h1 className='contentTitle'>Unlimited movies, TV shows, and more.</h1>
            <h2 className='contentText'>Watch anywhere. Cancel anytime.</h2>
            <Input />
        </div>
    </>
  )
}

export default HeroContent