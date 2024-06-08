import React from 'react'
import './Signup.css'
import Signupimg from '../Components/Assets/Sign up-amico.png'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='loginsignup'>
            <div className='s-wrapper'>
              <form action=''>
                    <div className='signup-head'>
                    <h1>SignUp</h1>
                    <img src={Signupimg} alt=''/>
                    </div>
                    <div className='input-box'>
                      <input type="text" placeholder='First Name' required/>
                      <MdDriveFileRenameOutline className='icon'/>
                    </div>
                    <div className='input-box'>
                      <input type="text" placeholder='Last Name' required/>
                      <MdDriveFileRenameOutline className='icon'/>
                    </div>
                    <div className='input-box'>
                      <input type="text" placeholder='Email' required/>
                      <MdEmail className='icon'/>
                    </div>
                    <div className='input-box'>
                      <input type="password" placeholder='Password' required/>
                      <FaLock className='icon'/>
                    </div>
                    <div className='input-box'>
                      <input type="password" placeholder='Confirm Password' required/>
                      <FaLock className='icon'/>
                    </div>

                <Link to='/'>
                <button type='submit' >Sign Up</button>
                </Link>

              </form>
            </div>
          </div>
  )
}

export default Signup