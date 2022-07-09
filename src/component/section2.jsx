import React from 'react'
import './sections.css'

const Section2 = ({title, subtitle, image}) => {
  return (
    <>
        <div className='container'>
            <div className='right'>
              <img src={image} alt="section images" className='image' />
            </div>
            <div className='left'>
                <h1 className='titleText'>{title}</h1>
                <h2 className='subtitle'>{subtitle}</h2>
            </div>
        </div>
    </>
  )
}

export default Section2