import React from 'react';
import { NavLink } from 'react-router-dom';

import logoPlaceholder from '../../images/logo-placeholder.png';

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-contact-info'>
          <div>Contact Us:</div>
          <div>(770) 936-3991</div>
          <div>|</div>
          <div>yongmen@yongmenlaw.com</div>
        </div>
        <div className='nav-wrapper'>
          <div>
            <NavLink to='/' className='logo-container'>
              <img className='nav-logo' src={logoPlaceholder} />
              <div className='logo-text-container'>
                <div>LAW OFFICE</div>
                <div>OF</div>
                <div>Yong Men</div>
              </div>
            </NavLink>
          </div>
          <div className='nav-pages-bttn-container'>
            <NavLink to='/attorney' className='nav-attorney-link'>
              ATTORNEY
            </NavLink>
            <NavLink to='/practice' className='nav-attorney-link'>
              PRACTICE
            </NavLink>
            <NavLink to='/resources' className='nav-attorney-link'>
              RESOURCES
            </NavLink>
            <NavLink to='/contact' className='nav-attorney-link'>
              CONTACT US
            </NavLink>
          </div>
          <div className='chinese-trans-bttn'>
            中文版
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
