import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        id="hamburger"
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menü */}
      <div className={`nav-menu-container ${isOpen ? "active" : ""}`} id="navMenu">
        <nav className="nav-menu">
          <ul>
            <Link to="/"><li>Anasayfa</li></Link>
          <Link to="/hakkimizda">  <li>Hakkımızda</li></Link>
           <Link to="/hizmetlerimiz"> <li>Hizmetler</li></Link>
            <Link to="/iletisim"><li>İletişim</li></Link>
          </ul>
        </nav>
      </div>

      {/* Logo */}
      <div className="navbar">
        <div className="navbar-logo">
          <img src="/assets/img/cretivo-logo-white.png" alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
