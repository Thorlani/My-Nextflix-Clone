import React from 'react'
import './sections.css'

const Sections = ({title, subtitle, image}) => {
  return (
    <>
        <div className='container'>
            <div className='left'>
                <h1 className='titleText'>{title}</h1>
                <h2 className='subtitle'>{subtitle}</h2>
            </div>
            <div className='right'>
              <img src={image} alt="section images" className='image' />
            </div>
        </div>
    </>
  )
}

export default Sections