import React, { useState } from 'react'
import headlogo from '../assets/headlogo.png'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";


function Heads() {

 
  return (
    <header>
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  );
}

function HeaderLogo() {
  return (
    <div className="logo">
      <img src={headlogo} width="100px" height="80px" alt="Logo" />
    </div>
  );
}

function HeaderNavigation() {
   const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu =()=>{
    setIsOpen(!isOpen)
  };
  return (
    <div className="bar">
      <div className="container">
         
        <nav>
         
         <ul className={`nav-links ${isOpen ? "active" : ""}`}>
              <NavigationLink to="/" label="MAIN" />
              <NavigationLink to="/Gallery" label="GALLERY" />
              <NavigationLink to="/Projects" label="PROJECTS" />
              <NavigationLink to="/Certificate" label="CERTIFICATIONS" /> 
              <NavigationLink to="/Contact" label="CONTACTS" />
         </ul>

        </nav>
        <div className='icon' onClick={toggleMenu} >
            <FaBars/>
          </div>
      </div>
    </div>
  );
}

function NavigationLink({ to, label }) {
  return (
    <li>
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default Heads;