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
import { Link } from 'react-router-dom'

const FrontServices = () => {
  return (
   
    <div className="container">
      <h1>Our Services</h1>
      <p>Decide what you want from us</p>
      <div className="services">
      <div className="service">
                <img src={DigitalMarketing} alt="DigitalMarketing" />
                
                <p className='p1'>Digital Marketing</p>
                <p className='p2'>Online Video | Paid Search</p>
                <p className='p2'>Partnerships | Programmatic Display</p>
                <Link to='/DigitalMarketing'>
                <button className="learn-more-button" src="">Learn More</button>
              </Link>

              </div>
              <div className="service">
                <img src={EventPlanning} alt="EventPlanning" />
                <p>Event Planning</p>
                <p className='p2'>Venue Selection | Event Design and Theme</p>
                <p className='p2'>Entertainement | Vendor management</p>
                <Link to='/EventPlanning1'>
              <button className="learn-more-button">Learn More</button>
              </Link>
              </div>
              <div className="service">
                <img src={BrandStrategy} alt="BrandStrategy" />
                <p>Brand Strategy</p>
                <p className='p2'>Brand Positioning | Competitive Analysis</p>
                <p className='p2'>Brand Identity Development | Content Strategy</p>
                <Link to='/BrandStrategy1'>
              <button className="learn-more-button">Learn More</button>
              </Link>
              </div>
              <div className="service">
                <img src={ConsultingServices} alt="ConsultingServices" />
                <p>Consulting Services</p>
                <p className='p2'>Financial Advisory | Risk Management</p>
                <p className='p2'>Change Management</p>
                <Link to='/ConsultingServices1'>
              <button className="learn-more-button">Learn More</button>
              </Link>
              </div>
              
              <div className="service">
                <img src={PublicRelations} alt="PublicRelations" />
                <p>Public Relations</p>
                <p className='p2'>Media Relations | Crisis Management</p>
                <p className='p2'>Reputation Management</p>
                <Link to='/PublicRelations1'>
              <button className="learn-more-button">Learn More</button>
              </Link>
              </div>
              <div className="service">
                <img src={InfluenceMarketing} alt="InfluenceMarketing" />
                <p>Influencer Marketing</p>
                <p className='p2'>Giveaways and Contests | Campaign Planning</p>
                <p className='p2'>Sponsored Posts and Product Placements</p>
                <Link to='/InfluenceMarketing1'>
              <button className="learn-more-button">Learn More</button>
              </Link>
              </div>
              <div className="service">
                <img src={News} alt="News" />
                <p>News Paper  & Magazine Marketing</p>
                <p className='p2'>Print Advertising Design | Ad Placement</p>
                <p className='p2'>Advertorials and Sponsored Content</p>
                <Link to='/News1'>
              <button className="learn-more-button">Learn More</button>
              </Link>
              </div>
              <div className="service">
                <img src={WebDesign} alt="WebDesign" />
                <p>Web design & development</p>
                <p className='p2'>UI UX Design | Responsive Web Design</p>
                <p className='p2'>Graphic Design and Visual Elements</p>
                <Link to='/WebDesign1'>
              <button className="learn-more-button">Learn More</button>
              </Link>
              </div>

      </div>
    </div>
    
  )
}

export default FrontServices

