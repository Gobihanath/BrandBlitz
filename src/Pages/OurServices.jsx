import React from 'react'
import './OurServices.css'
import { Link } from 'react-router-dom'
import Video from '../Components/Assets/pexels-rodnae-productions-7883678 (2160p).mp4'
import DigitalMarketing1 from '../Components/Assets/DigitalMarketing.jpg'
import EventPlanning from '../Components/Assets/EventPlanning.jpg'
import BrandStrategy from '../Components/Assets/BrandStrategy.jpg'
import ConsultingServices from '../Components/Assets/ConsultingServices.jpg'
import PublicRelations from '../Components/Assets/PublicRelations.jpg'
import InfluenceMarketing from '../Components/Assets/InfluenceMarketing.jpg'
import News from '../Components/Assets/News.jpg'
import WebDesign from '../Components/Assets/WebDesign.jpg'
import Footer from '../Components/Footer/Footer'
import Clients from '../Components/Clients/Clients'
import YouTubeEmbed from '../Components/YouTubeEmbed/YouTubeEmbed';
import DigitalMarketing from '../Components/services/DigitalMarketing'

function OurServices() {
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
          <h1>What We Offer</h1>
          <p>Decide what you want from us</p>

          <div className="services">
            <div className="service">
              <img src={DigitalMarketing1} alt="DigitalMarketing" />

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
              <button className="learn-more-button">Learn More</button>
            </div>
            <div className="service">
              <img src={BrandStrategy} alt="BrandStrategy" />
              <p>Brand Strategy</p>
              <p className='p2'>Brand Positioning | Competitive Analysis</p>
              <p className='p2'>Brand Identity Development | Content Strategy</p>
              <button className="learn-more-button">Learn More</button>
            </div>
            <div className="service">
              <img src={ConsultingServices} alt="ConsultingServices" />
              <p>Consulting Services</p>
              <p className='p2'>Financial Advisory | Risk Management</p>
              <p className='p2'>Change Management | Performace Improvement</p>
              <button className="learn-more-button">Learn More</button>
            </div>

            <div className="service">
              <img src={PublicRelations} alt="PublicRelations" />
              <p>Public Relations</p>
              <p className='p2'>Media Relations | Crisis Management</p>
              <p className='p2'>Reputation Management | Community Relations</p>
              <button className="learn-more-button">Learn More</button>
            </div>
            <div className="service">
              <img src={InfluenceMarketing} alt="InfluenceMarketing" />
              <p>Influencer Marketing</p>
              <p className='p2'>Giveaways and Contests | Campaign Planning</p>
              <p className='p2'>Sponsored Posts and Product Placements</p>
              <button className="learn-more-button">Learn More</button>
            </div>
            <div className="service">
              <img src={News} alt="News" />
              <p>News Paper  & Magazine Marketing</p>
              <p className='p2'>Print Advertising Design | Ad Placement</p>
              <p className='p2'>Advertorials and Sponsored Content</p>
              <button className="learn-more-button">Learn More</button>
            </div>
            <div className="service">
              <img src={WebDesign} alt="WebDesign" />
              <p>Web design & development</p>
              <p className='p2'>UI UX Design | Responsive Web Design</p>
              <p className='p2'>Graphic Design and Visual Elements</p>
              <button className="learn-more-button">Learn More</button>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className='container-2'>
          <h1 className='h1'>STRATEGIC INSIGHT, </h1> <h1 className='h1'>DETAILED PLANNING, AND FLAWLESS EXECUTION.</h1>
          <hr className='hr' />
          <p>We transform briefs into success, helping clients capture attention and<br /> create desire with strategic insight, careful planning, and flawless execution.</p>

          <div className='video'>
            <h1>My YouTube Video</h1>
            <br />
            <YouTubeEmbed videoId="GGSKpJGpyuo" />
          </div>
        </div>

      </section>
      <Clients />
      <Footer />
    </div>


  )
}

export default OurServices

