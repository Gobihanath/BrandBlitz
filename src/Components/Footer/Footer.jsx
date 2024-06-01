import React from 'react'
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <div className='f-row'>

          <div className='footer-col'>          
              <h4>BrandBlitz</h4>
              <ul>
              <li>                  
                  <p className='t1'><IoCallSharp className='icon' /> : +94 770070007</p>
              </li>

              <li>
                  
                  <p className='t1'><MdEmail className='icon' /> : brandblitzInfo@yahoo.com</p>
              </li>
              <li>
                  
                  <p className='t1'><IoHomeSharp className='icon' /> : Sabaragamuwa university of Srilanka, Belihuloya</p>
                 
              </li>
                  

                              
              </ul>                     
          </div>

            <div className='footer-col'>          
              <h4>Quick Links</h4>
              <ul>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>Our Team</a></li>
                <li><a href='#'>Contact Us</a></li>
              </ul>           
            </div>

            <div className='footer-col'>
              <h4>Our Top Services</h4>
              <ul>
                <li><a href='#'>Paid Social</a></li>
                <li><a href='#'>TV & VOD</a></li>
                <li><a href='#'>Radio</a></li>
                <li><a href='#'>Direct Mail</a></li>
              </ul>
            </div>

            <div className='footer-col'>
              <h4>Follow us</h4>
              <div className='social-links'>
              <FaFacebookF className='icon2' />
              <FaInstagram className='icon2' />
              <IoLogoTwitter className='icon2' />
              </div>            
            </div>
        </div>

        
      </div>
    

    </div>
  )
}

export default Footer