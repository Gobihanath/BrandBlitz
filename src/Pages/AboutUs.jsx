import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'
import Video from '../Components/Assets/8348720-uhd_3840_2160_25fps.mp4'
import Video9 from '../Components/Assets/7967229-uhd_2160_3840_25fps.mp4'
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

            We believe in the power of authenticity and our mission is to amplify the essence of your brand, making it resonate deeply with your audience. Our focus on results-driven strategies, creative brilliance, and genuine passion for our work is designed to elevate your brand to new heights. Welcome to a partnership where your success is our purpose.</p>

          
      </div>
      </section>
    </section>

    <section>
    
    <div className='first-container'>
     
        <div className='row'>
      <div className='left-r'>
      <video src={Video9} alt='' autoPlay muted/>
      </div>
      
      <div className='right-r'>

      <h2>Our Mission</h2>
          <p>At BrandBlitz, we are driven by authenticity. Our mission is to elevate your brand’s true essence, ensuring it deeply resonates with your audience. With a focus on strategic outcomes, creative ingenuity, and a heartfelt passion for our work, we are dedicated to propelling your brand to unprecedented heights.</p>
          
          <h2>Our Vision</h2>
          <p>Looking forward, we aim to continually redefine the possibilities in media planning, buying, and advertising. Our vision is to be the preferred partner for brands seeking meaningful connections with their audience and sustainable success.</p>

          <h2>What We Do</h2>
          <p>We specialize in media planning, buying, and advertising, offering tailored solutions to meet your unique objectives. Whether it’s developing a compelling brand narrative or strategically positioning your message, our expertise ensures your brand captures attention and stands out.</p>

          <h2>Join Us</h2>
          <p>We invite you to embark on this exciting journey with us. Together, let’s create brand experiences that captivate, engage, and drive success. Welcome to a partnership where your triumph is our ultimate goal.</p>

      </div>
      </div>
      
      </div>
      
      </section>
        
          <Footer/>
          </div>
   
   
    
  )
}

export default AboutUs


     