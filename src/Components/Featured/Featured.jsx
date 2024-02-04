import React from 'react'
import './Featured.css'
import Video2 from '../Assets/video (2160p) (1).mp4'

const Featured = () => {
  return (
    <div className='feature-container'>
      <div className='content'>
        <h1>Who We Are</h1>
        <hr/>
      
        <section className="quote">
            <div className="row1">
              <div className="quote-image">
                  <video src={Video2} autoPlay loop muted></video>
              </div>
            <div className="quote-abt">
            <h1>Life on Two Wheels!</h1>
            <div className="line"></div>
                    <p>“On a motorcycle, you can’t really think about more than where you are. There’s a freedom that comes with that – from stress, worry, sweating the small stuff.” ― <b>Laurence Fishburne</b></p>
                    <p> “Animals travel on all fours. Mankind on two. Motorcycling is not a means of transport but an ideology, a nomadic way of life.” ― <b>Amit Reddy</b></p>
                    <p>“Love is the feeling you get when you like something as much as your motorcycle.” ― <b>Hunter S. Thompson</b></p>
                    <p>“Life is not about waiting for the storms to pass: it’s about learning how to ride in the rain!” - <b>Unknown</b></p>
            </div>
          
            </div> 
       </section>

      </div>


    </div>
  )
}

export default Featured