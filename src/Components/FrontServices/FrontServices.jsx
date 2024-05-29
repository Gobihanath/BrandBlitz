import React from 'react'
import './FrontServices.css'
import DigitalMarketing from '../Assets/DigitalMarketing.jpg'
import EventPlanning from '../Assets/EventPlanning.jpg'
import BrandStrategy from '../Assets/BrandStrategy.jpg'
import ConsultingServices from '../Assets/ConsultingServices.jpg'
import PublicRelations from '../Assets/PublicRelations.jpg'
import InfluenceMarketing from '../Assets/InfluenceMarketing.jpg'
import News from '../Assets/News.jpg'
import WebDesign from '../Assets/WebDesign.jpg'

const FrontServices = () => {
  return (
   
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
    
  )
}

export default FrontServices

