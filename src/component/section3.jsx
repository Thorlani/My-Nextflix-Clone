import React from 'react'
import './sections.css'

const Section3 = ({title, subtitle}) => {
  return (
    <>
        <div className='container'>
            <div className='left'>
                <h1 className='titleText'>{title}</h1>
                <h2 className='subtitle'>{subtitle}</h2>
            </div>
            <div className='right'></div>
        </div>
    </>
  )
}

export default Section3