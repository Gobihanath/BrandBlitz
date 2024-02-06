import React from 'react'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import loginimg from '../Components/Assets/Login-amico.png'

const Login = () => {
  return (

          <div className='loginsignup'>
            <div className='wrapper'>
              <form action=''>
                <div className='login-head'>
                <h1>Login</h1>
                <img src={loginimg} alt=''/>
                </div>
                <div className='input-box'>
                  <input type="text" placeholder='Username' required/>
                  <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                  <input type="password" placeholder='Password' required/>
                  <FaLock className='icon'/>
                </div>

                <div className='remember-forgot'>
                  <label><input type='checkbox'/>Remember me</label>
                  <a href='#'>Forgot Password?</a>
                </div>


                <button type='submit'>Login</button>

                <div className='register-link'>
                  <p>Don't have an account?  <a href='#'>Register</a></p>
                </div>
              </form>
            </div>
          </div>
  )
}

export default Login 

