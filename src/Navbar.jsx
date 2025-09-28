import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
  
     <header>
      <div className="hamburger" id="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="nav-menu-container" id="navMenu">
      <nav className="nav-menu">
            <ul>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/Hakkimizda">Hakkımızda</Link></li>
                <li><Link to="/services">Hizmetler</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
            </ul>
      </nav>

      </div>

      <div className="navbar">
        <div className="navbar-logo">
          <img src="\assets\img\cretivo-logo-white.png" alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Navbar
