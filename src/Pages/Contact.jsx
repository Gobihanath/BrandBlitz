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

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "633c03ac-3e38-4f81-86e6-a34787a9d61e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
          Have a question, comment, or suggestion? We’d love to hear from you! Feel free to reach out to our team using the contact details below. Whether you’re interested in our products, services, or just want to say hello, we’re here to help.
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
            <form onSubmit={onSubmit}>
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
              <br/>
              <span>{result}</span>
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