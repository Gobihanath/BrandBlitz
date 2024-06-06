import React from 'react';
import './Create.css'
import photo1 from '../../Components/Assets/News1.webp'
import photo2 from '../../Components/Assets/News2.webp'
import Footer from '../Footer/Footer'





const News1 =() =>{
    return (
    <div>
    <div>
        <div className="zero">
            <div className="vid">
                <img src={photo1} alt=""></img>
            </div>
            <div className="content1">
                <h2>News</h2>
                
            </div>
        </div>



        <div className='service-container'>
          <div className='title'>
            <h1>"Elevating Your Brand Through Authentic News Engagement"</h1>
            <hr/>
            <div className='collom'>
              <div className='left'>
                <img src={photo2} alt=""/>
              </div> 
              <div className='right'>
              <p>
              As a top independent media planning, buying, and advertising company, we are committed to combining your creativity with smart media placement to ensure your brand’s story reaches the right audience. We are more than just a marketing agency; we are architects of brand experiences, storytellers of compelling narratives, and strategic partners in your journey to success.

Our mission is to amplify the essence of your brand, making it resonate with your audience on a profound level. By leveraging our expertise in media planning and buying, we ensure that your news releases are strategically placed to maximize visibility and impact. With a focus on results-driven strategies, creative brilliance, and a genuine passion for what we do, we elevate your brand through powerful news engagement. Welcome to a partnership where your success is our purpose.

              </p>
              
              </div>
            </div>
          </div>
        </div>

        <div className="over">
            <p><span className="highlight">Amplifying Brand Stories with Precision and Passion </span><br/><br/>

            As a leading independent media planning, buying, and advertising company, we excel in crafting and placing news stories that resonate deeply with your target audience. We are more than just a marketing agency; we are architects of brand experiences, storytellers of compelling narratives, and strategic partners in your journey to success.

We believe in the power of authenticity and our mission is to amplify the essence of your brand through strategic news placement. By ensuring that your brand’s stories are communicated effectively across the right channels, we create profound connections with your audience. With results-driven strategies, creative brilliance, and a genuine passion for what we do, we help your brand achieve maximum impact in the news space. Welcome to a partnership where your brand’s visibility and credibility are our top priorities.
                 </p>
                  </div>

       
        

      
    

    </div>
    <Footer/>
    </div>


     

    
    
    

    )

}


export default News1