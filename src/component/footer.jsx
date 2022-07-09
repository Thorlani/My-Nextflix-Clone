import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='wrapper'>
        <p className='footerTitle'>
          Questions? Contact us.
        </p>
        <div className='footerContent'>
          <ul>
            <li>FAQ</li>
            <li>Investor Relation</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Reference</li>
            <li>Legal Notice</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Where to Watch</li>
            <li>Corporate Information</li>
            <li>Only on NextFlix</li>
          </ul>
          <ul>
            <li>Media</li>
            <li>Term Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <h5 className='footerBottom'>Coded by Thorlani</h5>
    </div>
  )
}

export default Footer