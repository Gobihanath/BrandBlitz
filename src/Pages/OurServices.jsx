import React from 'react'
import './OurServices.css'
import { Link } from 'react-router-dom'
import Video from '../Components/Assets/pexels-rodnae-productions-7883678 (2160p).mp4'
import DigitalMarketing from '../Components/Assets/DigitalMarketing.jpg'
import EventPlanning from '../Components/Assets/EventPlanning.jpg'
import BrandStrategy from '../Components/Assets/BrandStrategy.jpg'
import ConsultingServices from '../Components/Assets/ConsultingServices.jpg'
import PublicRelations from '../Components/Assets/PublicRelations.jpg'
import InfluenceMarketing from '../Components/Assets/InfluenceMarketing.jpg'
import News from '../Components/Assets/News.jpg'
import WebDesign from '../Components/Assets/WebDesign.jpg'
import Footer from '../Components/Footer/Footer'

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
          <div className="container">
            <h1>Our Services</h1>
            <p>Decide what you want from us</p>
            <div className="services">
              <div className="service">
                <img src={DigitalMarketing} alt="DigitalMarketing" />
                <p>Digital Marketing</p>
                <p className='p2'>Comprehensive digital marketing services to boost your online presence and drive business growth. </p>
                <button className="learn-more-button">Learn More</button>
              </div>
              <div className="service">
                <img src={EventPlanning} alt="EventPlanning" />
                <p>Event Planning</p>
                <p className='p2'> Expert event planning services to create unforgettable experiences that elevate your brand and engage your audience. </p>
                <button className="learn-more-button">Learn More</button>
              </div>
              <div className="service">
                <img src={BrandStrategy} alt="BrandStrategy" />
                <p>Brand Strategy</p>
                <p className='p2'> crafting impactful brand strategies to position your brand effectively in the market and drive long-term success. </p>
                <button className="learn-more-button">Learn More</button>
              </div>
              <div className="service">
                <img src={ConsultingServices} alt="ConsultingServices" />
                <p>Consulting Services</p>
                <p className='p2'>top-tier consulting services, delivering tailored solutions to propel your business forward with precision and innovation. </p>
                <button className="learn-more-button">Learn More</button>
              </div>
              
              <div className="service">
                <img src={PublicRelations} alt="PublicRelations" />
                <p>Public Relations</p>
                <p className='p2'>Delivering comprehensive public relations services to elevate your brand's reputation and foster meaningful connections </p>
                <button className="learn-more-button">Learn More</button>
              </div>
              <div className="service">
                <img src={InfluenceMarketing} alt="InfluenceMarketing" />
                <p>Influencer Marketing</p>
                <p className='p2'>Harnessing the power of influencer marketing to authentically connect your brand with targeted audiences </p>
                <button className="learn-more-button">Learn More</button>
              </div>
              <div className="service">
                <img src={News} alt="News" />
                <p>News Paper  & Magazine Marketing</p>
                <p className='p2'>Strategically placing your brand in prominent publications to reach and captivate your target audience effectively</p>
                <button className="learn-more-button">Learn More</button>
              </div>
              <div className="service">
                <img src={WebDesign} alt="WebDesign" />
                <p>Web design & development</p>
                <p className='p2'>Elevate your online presence with our expert web design and development services, tailored for seamless functionality and captivating aesthetics. </p>
                <button className="learn-more-button">Learn More</button>
              </div>

            </div>
          </div>
          </section>
          <Footer/>
   </div>
  
    
  )
}

export default OurServices

