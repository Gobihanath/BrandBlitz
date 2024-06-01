import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'
import Video from '../Components/Assets/8348720-uhd_3840_2160_25fps.mp4'
import DigitalMarketing from '../Components/Assets/DigitalMarketing.jpg'
import EventPlanning from '../Components/Assets/EventPlanning.jpg'
import BrandStrategy from '../Components/Assets/BrandStrategy.jpg'
import ConsultingServices from '../Components/Assets/ConsultingServices.jpg'
import PublicRelations from '../Components/Assets/PublicRelations.jpg'
import InfluenceMarketing from '../Components/Assets/InfluenceMarketing.jpg'
import News from '../Components/Assets/News.jpg'
import WebDesign from '../Components/Assets/WebDesign.jpg'
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

export default AboutUs


     