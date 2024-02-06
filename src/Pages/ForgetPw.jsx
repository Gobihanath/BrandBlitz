import React from 'react'
import './ForgetPw.css'
import forgetimg from '../Components/Assets/Forgot password-amico.png'
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ForgetPw = () => {
  return (
    <div className='forget-pw'>
    <div className='f-wrapper'>
      <form action=''>
            <div className='forget-head'>
            <h1>Forget Password</h1>
            <img src={forgetimg} alt=''/>
            </div>
            <div className='input-box'>
              <input type="text" placeholder='Email' required/>
              <MdEmail className='icon'/>
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Enter New Password' required/>
              <FaLock className='icon'/>
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Confirm Password' required/>
              <FaLock className='icon'/>
            </div>

        
        <button type='submit'>Save Password</button>

      </form>
    </div>
  </div>
  )
}

export default ForgetPw;