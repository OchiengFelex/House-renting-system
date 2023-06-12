import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {MdContactPage} from 'react-icons/md'
import {BsHouseXFill} from 'react-icons/bs'
import {RiLoginBoxFill} from 'react-icons/ri'

import './Header.css'
function Header() {
  return (
    <div className='navbar'>
        
        <header>
        <img src='./src/assets/logo.webp' style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
            <nav>
                <ul>
                    <li>
                            <FaHome style={{color:'gold'}}/>
                        <span className='span'><Link to="/"><a href='#'>Home</a></Link></span>
                        </li>
                        <li>
                            <FcAbout style={{color:'gold'}}/>
                            <span className='span'>
                        <Link to="/aboutus"><a href='#'>AboutUS</a></Link>
                        </span>
                        </li>
                        <li>
                            <MdContactPage style={{color:'gold'}}/>
                        <span className='span'>
                        <Link to="/contact"><a href='#'>Contact</a></Link>
                        </span>
                        </li>
                        <li>
                            <BsHouseXFill style={{color:'gold'}}/>
                        <span className='span'>
                        <Link to="/houselisting"><a href='#'> HouseListing</a></Link>
                        </span>
                        </li>
                        <li>
                            <RiLoginBoxFill style={{color:'gold'}}/>
                        <span className='span'>
                        <Link to="/signup"><a href='#'><button>SignUp</button></a></Link>
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header