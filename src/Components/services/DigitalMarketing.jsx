import React from 'react';
import './DigitalMarketing.css'
import { Link } from 'react-router-dom'
import video10 from '../Components/Assets/6558232-uhd_3840_2160_25fps.mp4'
//import video11 from ''
import Footer from '../Components/Footer/Footer'





const Digital_Marketing =() =>{
    return (
    <div>
        <div className="zoro">
            <div className="vid">
                <video src={video10} autoPlay loop muted></video>
            </div>
            <div className="content1">
                <h2>ddd</h2>
                
            </div>

       
</div>
    
         <Footer/>
         </div>

    )

}


export default Digital_Marketing