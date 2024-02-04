import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import Video from '../Assets/pexels_videos_2235745 (720p).mp4'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='mask'>
         <video src={Video} autoPlay loop muted></video>
      </div>

      <div className='content'>
        <h2>Are you ready to elevate your brand to new heights? </h2>
        <p>Your brand deserves nothing less than perfection, and we're here to deliver just that.</p>
        <div>
        <Link to='/contact' className='btn1'>
        <button>Get Started</button>
        </Link>
      
        </div>
      </div>
    </div>
  )
}

export default Hero