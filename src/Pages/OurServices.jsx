import React from 'react'
import './OurServices.css'
import { Link } from 'react-router-dom'
import Video from '../Components/Assets/pexels-rodnae-productions-7883678 (2160p).mp4'
import SocialMedia from '../Components/Assets/SocialMedia.jpg'

const OurServices = () => {
  return (
    <div>
    <div className='hero-container1'>
      <div className="mask1">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="content1">
        <h2>Our Services</h2>
        <p>Explore your needs</p>
      </div>
      
    </div>
    <section>
    <section>
      <div className="services-content">
          <h2>Tailored Marketing Strategies for Your Success</h2>
          <p>Amidst the cacophony of modern media, ensuring your message resonates with precision is paramount. At BrandBlitz, we specialize in crafting bespoke media plans designed to elevate your brand's voice, captivate the right audience, and optimize your budget for maximum impact. Our suite of flexible services and custom solutions is tailored to suit your unique needs, delivering remarkable results every time.</p>
      </div>
      </section>
    </section>
    <section>
    <section>
    <div className="container">
      <h1>Our Services</h1>
      <p>Decide what you want from us</p>
      <div className="services">
        <div className="service">
          <img src={SocialMedia} alt="social media" />
          <p>Paid media</p>
          <p className='p2'>Unlock unparalleled growth with our paid media services. </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="service">
          <img src={SocialMedia} alt="social media" />
          <p>Paid media</p>
          <p className='p2'>Unlock unparalleled growth with our paid media services. </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="service">
          <img src={SocialMedia} alt="social media" />
          <p>Paid media</p>
          <p className='p2'>Unlock unparalleled growth with our paid media services. </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="service">
          <img src={SocialMedia} alt="social media" />
          <p>Paid media</p>
          <p className='p2'>Unlock unparalleled growth with our paid media services. </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        
        <div className="service">
          <img src={SocialMedia} alt="social media" />
          <p>Paid media</p>
          <p className='p2'>Unlock unparalleled growth with our paid media services. </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="service">
          <img src={SocialMedia} alt="social media" />
          <p>Paid media</p>
          <p className='p2'>Unlock unparalleled growth with our paid media services. </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="service">
          <img src={SocialMedia} alt="social media" />
          <p>Paid media</p>
          <p className='p2'>Unlock unparalleled growth with our paid media services.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="service">
          <img src={SocialMedia} alt="social media" />
          <p>Paid media</p>
          <p className='p2'>Unlock unparalleled growth with our paid media services. </p>
          <button className="learn-more-button">Learn More</button>
        </div>

      </div>
    </div>
    </section>


    </section>
   </div>
    
    
  )
}

export default OurServices

