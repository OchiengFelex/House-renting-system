
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaAirbnb } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
import { BsHouseXFill } from 'react-icons/bs';
import { RiLoginBoxFill } from 'react-icons/ri';
import {FaSignOutAlt} from 'react-icons/fa';
import {TbBrandBooking} from 'react-icons/tb';
import { useContext } from 'react'
import {Context} from "../components/context/userContext/Context.jsx";

import './Header.css';

function Header() {

    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`navbar ${isNavOpen ? 'nav-open' : ''}`}>
      <header>
        <div className='img1'>
          <img src='./src/assets/logo.webp' style={{ width: '80px', height: '70px', borderRadius: '8px' }} />
        </div>
        <nav>
          <div className={`nav-icon ${isNavOpen ? 'nav-open' : ''}`} onClick={toggleNav}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <ul className={isNavOpen ? 'nav-open' : ''}>
            <li>
              <FaHome style={{ color: 'gold' }} />
              <Link to='/'>Home</Link>
            </li>

            <li>
              <FaAirbnb style={{ color: 'gold' }} />
              <Link to='/aboutus'>About US</Link>
            </li>

            <li>
              <RiLoginBoxFill style={{ color: 'gold' }} />
              <Link to='/signup'>SignUp</Link>
            </li>

            <li>
              <MdContactPage style={{ color: 'gold' }} />
              <Link to='/contact'>Contact</Link>
            </li>

            { user  && (
                <>
                
                <li>
              <BsHouseXFill style={{ color: 'gold' }} />
              <Link to='/houselisting'> House Listing</Link>
            </li>

            <li>
              <TbBrandBooking style={{ color: 'gold' }} />
              <Link to='/booking'>Booking</Link>
            </li>

            <li>
            <FaSignOutAlt style={{ color: 'red' }} />
            <Link onClick={handleLogout}> Logout</Link>
            </li>

                </>
            )}

          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
