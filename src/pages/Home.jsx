import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='content'>
        <div className='content-main'>
            <h1>Welcome To Ababu Real Estate </h1><br/>
            <h2>Rent The Best Houses And Offices</h2><br/>
            <h4>SEAECH AFFORDABLE PROPERTIES</h4>
        </div>
        <div className='content-main1'>
            <h2>LUXURY REAL ESTATE</h2>
            <pre style={{
                fontSize:'20px'
            }
            }>An excellent real estate professional, integrity,
             in-depth community and market knowledge, marketing savvy,<br/>
             effective negotiation skills and a high-quality professional
              network, all of which are hallmarks of how Ababu Felex works.<br/>
              Contact him today to learn more about real estate and homes for sale!</pre>
        </div> 
        <div className='tag' >
        <img src='.\src\assets\home-1.jpeg' style={{
            width:'400px'
        }}/>
        <img src='.\src\assets\home-2.jpeg'style={{
            width:'400px'
        }}/>
        <img src='.\src\assets\home-3.jpeg'style={{
            width:'400px'
        }}/>
        </div>
       
       



        </div>
         
    
  )
}

export default Home