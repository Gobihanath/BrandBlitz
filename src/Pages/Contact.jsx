import React from 'react'
import './Contact.css'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import contactimg from '../Components/Assets/4111242.jpg'


const Contact = () => {
  return(
    <div className='contact-container'>
        <div className='contact-wrapper'>

          
          <h1>Contact Us</h1>
          <div className='line'>
            <div></div>
            <div></div>
            <div></div>

          </div>

          <p className='text'>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.LOREM IPSUM GENERATOR
          </p>
        </div>


          <div className='contact-body'>
            <div className='contact-info'>
              <div>
              <IoCallSharp className='icon' />
              <p>Phone No</p>
              <p className='t1'>+94 770070007</p>
              </div>

              <div>
              <MdEmail className='icon' />
              <p>Email</p>
              <p className='t1'>brandblitzInfo@yahoo.com</p>
              </div>

              <div>
              <IoHomeSharp className='icon' />
              <p>Location</p>
              <p className='t1'>Sabaragamuwa university of Srilanka, Belihuloya</p>
              </div>

              <div>
              <FaClock className='icon' />
              <p>Opening Hours</p>
              <p className='t1'>Monday-Friday(9.00AM to 5.00PM)</p>
              </div>
              </div>
          </div>

          <div className='contact-form'>
            <form>
              <div>
                <input type='text' className='form-control' placeholder='First Name'/>
                <input type='text' className='form-control' placeholder='Last Name'/>
              </div>
              <div>
                <input type='email' className='form-control' placeholder='E-mail'/>
                <input type='text' className='form-control' placeholder='Phone Number'/>
              </div>

              <textarea rows='5' placeholder='Message' className='form-control'></textarea>
              <input type='submit' className='send-btn' value='send message'/>
            </form>
            


            <div>
              <img src={contactimg}/>
            </div>
          </div>


          <div className='Map'>
          <iframe className='mp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.3052351815384!2d80.7891812738713!3d6.7158067273660205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38b417d8c4f07%3A0x8e107536a6ae802!2sFaculty%20of%20Computing%20-%20Sabaragamuwa%20University%20of%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1707294222819!5m2!1sen!2slk"></iframe>
          </div>

          <div className='contact-footer'>
          <h3>Follow Us</h3>
          <div className='Social-links'>
          <FaFacebookF className='icon1' />
          <FaInstagram className='icon1' />
          <IoLogoTwitter className='icon1' />
          </div>

          
          </div>

    </div>
  );

    
}

export default Contact