import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.css'




const Navbar = () => {
  return (
    <div className='uppar'>
      
      <nav>
        <div class="logo">
            <h1>DTC</h1>
        </div>
        <div class="links">
        <div className="link" data-aos="fade-up" data-aos-duration="1200">
      <Link to="/">Home</Link>
    </div>            
    <div class="link" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100"><Link to="/about" href="">About</Link></div>
            {/* <div class="link" data-aos="fade-up" NavLink to=""ata-aos-duration="1200" data-aos-delay="200"><NavLink to="/service" href="">Services</NavLink></div> */}
            <div class="link" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300"><NavLink to="/service" href="">Service</NavLink></div>
            <div class="link" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500"><NavLink to="/update" href="">Info</NavLink></div>
            <div class="link" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600"><NavLink to="/contact" href="">Contact</NavLink></div>
        </div>
        <div class="buttons">
            <button data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800" style={{textDecoration: 'none'}}><NavLink  to="/login">Login</NavLink></button>
            {/* <button data-aos="fade-up" data-aos-duration="1200" data-aos-delay="900">Sign up</button> */}
        </div>
    </nav>

      
    </div>
  )
}

export default Navbar
