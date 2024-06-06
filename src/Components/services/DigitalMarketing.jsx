import React from 'react';
import './DigitalMarketing.css'
import video10 from '../../Components/Assets/6558232-uhd_3840_2160_25fps.mp4'
import video11 from '../../Components/Assets/6558144-uhd_3840_2160_25fps.mp4'
import Footer from '../../Components/Footer/Footer'





const DigitalMarketing =() =>{
    return (
    <div>
        <div className="zero">
            <div className="vid">
                <video src={video10} autoPlay loop muted></video>
            </div>
            <div className="content1">
                <h2>Digital Marketing</h2>
                
            </div>



    <div className='service-container'>
      <div className='title'>
        <h1>Digital Marketing</h1>
        <hr/>
        <div className='collom'>
          { <div className='left'>
            <video src={video11} alt='' autoPlay muted/>
          </div> }
          <div className='right'>
           <p>At our core, we are more than just a marketing agency; we are the architects of brand experiences, storytellers of compelling narratives, and strategic partners in your journey to success. As a top independent media planning, buying, and advertising company, we specialize in combining creativity with smart media placement to amplify your brand's authenticity.
            
           </p>
           <p>Our mission is to make your brand resonate profoundly with your audience through results-driven strategies and creative brilliance. We believe in the power of authenticity, aiming to highlight the essence of your brand and connect it with your audience on a meaningful level. </p>
            </div>
          </div>
      </div>
    </div>

    <div className="over">
        <p>In the digital landscape, we excel at:

Digital Media Planning and Buying: Utilizing data-driven insights to place your brand in front of the right audience at the right time.
Content Creation and Storytelling: Crafting compelling narratives that captivate and engage your target audience.
Social Media Marketing: Building vibrant communities and fostering genuine interactions with your audience across social platforms.
SEO and SEM: Enhancing your online visibility and driving organic and paid traffic to your digital assets.
Analytics and Optimization: Continuously monitoring and optimizing your campaigns to ensure maximum ROI and growth.
With a genuine passion for what we do, we are dedicated to elevating your brand to new heights. Welcome to a partnership where your success is our purpose.</p>
    </div>

       
        </div> 
    
         <Footer/>
         </div>

    )

}


export default DigitalMarketing