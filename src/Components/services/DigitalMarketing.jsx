import React from "react";
import './DigitalMarketing.css'
import {link} from 'react-router-dom'
import video10 from '../Components/Assets/6558232-uhd_3840_2160_25fps.mp4'
//import video11 from ''
import Footer from '../Components/Footer/Footer'


import Footer from '../Components/Footer/Footer'


const DigitalMarketing =() =>{
    return (
    <div>
        <div className="zoro">
            <div className="vid">
                <video src={video10} autoPlay loop muted></video>
            </div>
            <div className="content1">
                <h2></h2>
                
            </div>

       

        <div className='service-container'>
      <div className='title'>
        <h1>Digital Marketing</h1>
        <hr/>
        <div className='collom'>
          { <div className='left'>
            <video src={Video11} alt='' autoPlay muted/>
          </div> }
          <div className='right'>
           <h2>"</h2>
           <p></p>
            </div>
          </div>
      </div>
    </div>

    <div className="over">
        <h2></h2>
    </div>

       
        </div>
         <Footer/>
         </div>

    )

}


export default DigitalMarketing