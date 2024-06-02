import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'
import Video from '../Components/Assets/8348720-uhd_3840_2160_25fps.mp4'
import Footer from '../Components/Footer/Footer'

const AboutUs = () => {
  return (
    <div>
    <div className='section-container1'>
      <div className="section2">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="content1">
        <h2>About Us</h2>
        <p>Always With You</p>
     
        </div>
        

        </div>
    <section>
    <section>
      <div className="services-content">
          <h2>A RESULTS-DRIVEN MEDIA PLANNING AND BUYING AGENCY THAT PUTS YOU FIRST.</h2>
          <p>Welcome to our company, a top independent media planning, buying, and advertising agency dedicated to merging your creativity with strategic media placement. More than just a marketing agency, we are architects of brand experiences, storytellers of compelling narratives, and strategic partners in your journey to success.

            We believe in the power of authenticity and our mission is to amplify the essence of your brand, making it resonate deeply with your audience. Our focus on results-driven strategies, creative brilliance, and genuine passion for our work is designed to elevate your brand to new heights. Welcome to a partnership where your success is our purpose.
          </p>
      </div>
      </section>
    </section>
    
        
          <Footer/>
   </div>
  
    
  )
}

export default AboutUs


     