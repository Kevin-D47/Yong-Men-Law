import React from 'react';
import { NavLink } from 'react-router-dom';

import logoPlaceholder from '../../images/logo-placeholder.png';
import chineseIcon from '../../images/chinese-icon.png';

import './NavBar.css'

const NavBar = () => {

  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-contact-info'>
          <NavLink className='nav-contact-us-link' to='/contact'>Contact Us:</NavLink>
          <div>(770) 936-3991</div>
          <div>|</div>
          <div>yongmen@yongmenlaw.com</div>
        </div>
        <div className='nav-wrapper'>

          <NavLink to='/' className='logo-container'>
            <img className='nav-logo' src={logoPlaceholder} />
            <div className='logo-text-container'>
              <div>LAW OFFICE</div>
              <div>OF</div>
              <div>Yong Men</div>
            </div>
          </NavLink>

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

          <button className='chinese-trans-bttn'>
            <img className='chinese-icon' src={chineseIcon} />
            <div className='chinese-txt'>中文版</div>
          </button>

        </div>
      </div>


      {/* <div className='nav-container'>
        <div className='nav-contact-info'>
          <NavLink className='nav-contact-us-link' to='/contact'>联系我们:</NavLink>
          <div>(770) 936-3991</div>
          <div>|</div>
          <div>yongmen@yongmenlaw.com</div>
        </div>
        <div className='nav-wrapper'>

          <NavLink to='/' className='logo-container'>
            <img className='nav-logo' src={logoPlaceholder} />
            <div className='logo-text-container'>
              <div>永门律师事务所</div>
            </div>
          </NavLink>

          <div className='nav-pages-bttn-container'>
            <NavLink to='/attorney' className='nav-attorney-link'>
              律师
            </NavLink>
            <NavLink to='/practice' className='nav-attorney-link'>
              法律实践
            </NavLink>
            <NavLink to='/resources' className='nav-attorney-link'>
              资源
            </NavLink>
            <NavLink to='/contact' className='nav-attorney-link'>
              联系我们
            </NavLink>
          </div>

          <button className='chinese-trans-bttn'>
            <img className='chinese-icon' src={chineseIcon} />
            <div className='chinese-txt'>English</div>
          </button>

        </div>
      </div> */}

    </nav>
  );
}

export default NavBar;
