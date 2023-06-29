import React from 'react'
import {Link} from 'react-router-dom'
import './HouseListing.css'

function HouseListing() {

  
  return (
    <div className="houseListing-main">


    <div className="card-container">
    <div className="cards">
        <div className="image">
    <img src='./src/image/card 1.jpg'/>
        </div>
        <div className="title">
    <h2>Serene Haven Villas</h2>
        </div>
        <div className="description">
    <pre>Luxurious villas with stunning views<br/>
    private pools, and landscaped gardens.<br/>
    Price: $2,500,000<br/>
    Location: Hilltop Estates, kenya</pre>
        </div>
        <div className="next">
        <button><Link to = "/booking"> Book Now </Link></button>
        </div>
    </div>
    <div className="cards">
        <div className="image">
    <img src='./src/image/loby 4.jpg'/>
        </div>
        <div className="title">
    <h2>Metropolitan Apartments</h2>
        </div>
        <div className="description">
    <pre>apartments in the heart of the city, <br/>
    offering convenience urban lifestyle.<br/>
    Price: $1,800/month (rent)<br/>
    Location: Downtown Central District.</pre>
        </div>
        <div className="next">
        <button><Link to = "/booking"> Book Now </Link></button>
        </div>
    </div>


    
    <div className="cards">
        <div className="image">
    <img src='./src/image/card 2.jpg'/>
        </div>
        <div className="title">
    <h2>Harmony Apartments</h2>
        </div>
        <div className="description">
    <pre>Modern apartments with state-of-the-art<br/>
     amenities and a vibrant community.<br/>
    Price: $1,200/month (rent)<br/>
    Location: Downtown Runda</pre>
        </div>
        <div className="next">
        <button><Link to = "/booking"> Book Now </Link></button>
        </div>
    </div>


    <div className="cards">
        <div className="image">
    <img src='./src/image/card 3.jpg'/>
        </div>
        <div className="title">
    <h2>Riverside Flats</h2>
        </div>
        <div className="description">
    <pre>Stylish flats with balconies overlooking <br/>
    the riverfront and close proximity to parks.<br/>
    Price: £500,000<br/>
    Location: Waterside Carne. Kenya.</pre>
        </div>
        <div className="next">
        <button><Link to = "/booking"> Book Now </Link></button>
        </div>
    </div>

    <div className="cards">
        <div className="image">
    <img src='./src/image/card 4.jpg'/>
        </div>
        <div className="title">
    <h2>Tranquil Villa Retreat</h2>
        </div>
        <div className="description">
    <pre> villas nestled amidst lush greenery,<br/>
    offering tranquility and privacy.<br/>
    Price: €1,800,000<br/>
    Location: Monteith,pale Pipeline.Kenya.</pre>
        </div>
        <div className="next">
        <button><Link to = "/booking"> Book Now </Link></button>
        </div>
    </div>



    <div className="cards">
        <div className="image">
    <img src='./src/image/card 5.jpg'/>
        </div>
        <div className="title">
    <h2>Coastal Breeze Flats</h2>
        </div>
        <div className="description">
    <pre>Contemporary apartments with panoramic city<br/>
     views and access to a rooftop lounge.<br/>
    Price: $3,000/month (rent)<br/>
    Location: Downtown Skyline District.</pre>
        </div>
        <div className="next">
        <button><Link to = "/booking"> Book Now </Link></button>
        </div>
    </div>



    <div className="cards">
        <div className="image">
    <img src='./src/image/lby 1.jpg'/>
        </div>
        <div className="title">
    <h2>Heights Apartments</h2>
        </div>
        <div className="description">
    <pre> Airy flats with ocean vistas, <br/>
     within walking distance of the beach <br/>.
    Price: $800,000<br/>
    Location: Indian Shores, Mombasa .</pre>
        </div>
        <div className="next">
        <button><Link to = "/booking"> Book Now </Link></button>
        </div>
    </div>

    <div className="cards">
        <div className="image">
    <img src='./src/image/loby 5.jpg'/>
        </div>
        <div className="title">
    <h2>Garden Grove Villas</h2>
        </div>
        <div className="description">
    <pre>Spacious villas with expansive gardens, <br/>
    perfect for nature enthusiasts and outdoor.<br/>
    Price: ₹4,500,000<br/>
    Location: Whitefield, Bangalore,Kenya.</pre>
        </div>
        <div className="next">
        <button><Link to = "/booking"> Book Now </Link></button>
        </div>
    </div>

    
    <div className="cards">
        <div className="image">
    <img src='./src/image/loby 2.jpg'/>
        </div>
        <div className="title">
    <h2>Oasis Villas</h2>
        </div>
        <div className="description">
    <pre>Exquisite villas with lush courtyards<br/>
    amenities, creating an oasis of relaxation.<br/>
    Price: AED 6,000,000<br/>
    Location: Palm , United Arab Emirates.</pre>
        </div>
        <div className="next">
        <button><Link to = "/booking"> Book Now </Link></button>
        </div>
    </div>
    </div>

    <div className="map-container" style={{ width: "100%", height: "500px", borderRadius:"8px", backgroundColor:"gray" }}>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8867720683597!2d36.82194661464747!3d-1.2863891989932532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f182e4d3500dd%3A0x66a737365d29c063!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1624943030440!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 6 }} allowFullScreen="" loading="lazy"></iframe>
</div>




    </div>
  )
}

export default HouseListing