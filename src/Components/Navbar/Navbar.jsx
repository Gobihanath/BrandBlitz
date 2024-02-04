import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/LogoVector.png'
import { Link } from 'react-router-dom'


const Navbar = () => {


   const [menu, setMenu]=useState("home")


  return (
    <div className='navbar'>

      <div className='nav-logo'>
        <img src={logo} alt=''/>
      </div>

      <ul className='nav-menu'>
       <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link> {menu==="home"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("services")}}><Link style={{textDecoration:'none'}} to=''>Our Services</Link>{menu==="services"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("client")}}><Link style={{textDecoration:'none'}} to=''>Clients</Link>{menu==="client"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to=''>About Us</Link>{menu==="about"?<hr/>:<></>}</li>
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