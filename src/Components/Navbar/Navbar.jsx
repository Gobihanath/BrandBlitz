import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/LogoVector.png'
import { Link } from 'react-router-dom'
import Contact from '../../Pages/Contact'



const Navbar = () => {


   const [menu, setMenu]=useState("home")


  return (
    <div className='navbar'>

      <div className='nav-logo'>
        <img src={logo} alt=''/>
      </div>

      <ul className='nav-menu'>
       <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link> {menu==="home"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("services")}}><Link style={{textDecoration:'none'}} to='/Ourservices'>Our Services</Link>{menu==="services"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("client")}}><Link style={{textDecoration:'none'}} to='/home'>Clients</Link>{menu==="client"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to='AboutUs'>About Us</Link>{menu==="about"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("login")}}><Link  style={{textDecoration:'none'}} to='/login'>Login </Link>{menu==="login"?<hr/>:<></>}  </li>
      </ul>

      <div className='nav-contact'>
        <Link to='/contact'>
        <button>Contact Us</button>
        </Link>
      </div>

    </div>
  )
}

export default Navbar