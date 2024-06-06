import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/LogoVector.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
      </div>
      <ul className='nav-menu'>
        <li className={activeMenu === 'home' ? 'active' : ''} onMouseEnter={() => handleMenuClick('home')}>
          <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
        </li>
        <li className={activeMenu === 'services' ? 'active' : ''} onMouseEnter={() => handleMenuClick('services')}>
          <Link to='/OurServices' style={{ textDecoration: 'none' }}>Our Services</Link>
        </li>
        <li className={activeMenu === 'about' ? 'active' : ''} onMouseEnter={() => handleMenuClick('about')}>
          <Link to='/AboutUs' style={{ textDecoration: 'none' }}>About Us</Link>
        </li>
        <li className={activeMenu === 'login' ? 'active' : ''} onMouseEnter={() => handleMenuClick('login')}>
          <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
        </li>
      </ul>
      <div className='nav-contact'>
        <Link to='/contact'>
          <button className="contact-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
