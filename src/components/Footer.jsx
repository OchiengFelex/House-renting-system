import React from 'react'
import {FiTwitter} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {FaWordpressSimple} from 'react-icons/fa'
import {FaDownload} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    const year= new Date().toLocaleDateString();
  return (
    <div className='footer'>

            <div className='icons'>
            <div id='icons-one'>
                <h4>Join our social Community</h4>
                <div>
                <span><FiFacebook/> </span>
                <span><FiTwitter/></span>
                <span><FiUsers/></span>
                <span><FaTwitter/></span>
                <span><BsInstagram/></span>
               <span><FaWordpressSimple/></span> 
                <span><FaDownload/></span>
                </div>
                <pre>
                    <h4>Help Center</h4>
                    Contact Us<br/>
                    Video Community<br/>
                    Support Center<br/>
                    Activation & Registration<br/>
                    Account
                </pre>
                </div>

                <div className='footer-main'>
          <img src='./src/assets/app-store1.png'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
          <img src='./src/assets/play-store.png'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
          <h4 style={{color:"white"}}>Phone support: +254-700-400-200</h4>
          <h4 style={{color:"white"}}>MON-FRI 9AM-5PM EST</h4>
          <button><a href='#'><Link to = "/Contact"> Contact us</Link></a></button> &nbsp; &nbsp; 
          <button><a href='#'><Link to = "/"> Home</Link></a></button>
          <h4 style={{color:"white"}}>@ Renting House Date:{year}</h4>
            </div> 
                
                <div id='icons-two'>
                    <div style={{display:'flex',justifyContent:'space-evenly' ,gap:'5px'}}>
                <img src='./src/assets/logo.webp' style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
                <img src='./src/assets/property.jpeg'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
                <img src='./src/assets/H.PNG'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
                <img src='./src/assets/forent.webp'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
                </div>
                <pre>
                    <h3>Group member</h3>
                <img src='./src/assets/edraw.svg'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/><br/>
                <img src='./src/assets/ufoto.svg'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
                </pre>
                </div>
                
            
          
        </div> 
    </div>
  )
}

export default Footer