import React from 'react'
import './AboutUS.css'

function AboutUS() {
  return (
    <div className='body-cont'>
            <h1>WHO ARE WE</h1>
        <div className='body-main'>
            
        <div className='body-image'>
            <img src='\src\assets\winn.jpeg' style={{width:'670px'}}/>
        </div>
        <div className='body-content'>
            <h1>About Us</h1>
            <pre style={{ wordSpacing:'5px'}}> Ababu Real Estate Properties has a heritage of 15 years<br/>in the real estate industry,driven by a vision to provide quality<br/>property solutions in Kenya that offers optimum returns of investment.<br/>With its wealth of experience,Ababu Real Estate Properties Limited is<br/>continuously dedicated to providing environmentally sustainable, <br/>strategically located and economically viable properties within Kenya.</pre>
            <img src='src\assets\about.jpeg' style={{width:'700px'}}/>
            <img src='./src/assets/logo.webp'style={{width:'700px',height:'200px'}}/>
        </div>
        </div>

    </div>
  )
}

export default AboutUS