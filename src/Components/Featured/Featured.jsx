import React from 'react'
import Video2 from '../Assets/video (2160p) (1).mp4'
import './Featured.css'

const Featured = () => {
  return (
    <div className='feature-container'>
      <div className='head'>
        <h1>Who we are</h1>
        <hr/>
        <div className='row'>
          <div className='left-r'>
            <video src={Video2} alt='' autoPlay muted/>
          </div>
          <div className='right-r'>
           <h2>Crafting Legacies, Inspiring Journeys: "BRANDBLITZ Your Partner in Triumph"</h2>
           <p>We are a top independent media planning, buying, and advertising company that supports you in combining your creativity with smart media placement. We are more than just a marketing agency; "we are architects of brand experiences, storytellers of compelling narratives, and strategic partners in your journey to success".</p>
           <p>We believe in the power of authenticity, and our mission is to amplify the essence of your brand, making it resonate with your audience on a profound level. With a focus on results-driven strategies, creative brilliance, and a genuine passion for what we do, we are here to elevate your brand to new heights. Welcome to a partnership where your success is our purpose.</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Featured