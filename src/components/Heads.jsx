import React from 'react'
import headlogo from '../assets/headlogo.png'
import { Link } from 'react-router-dom'


function Heads() {
  return (
    <header >
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  );
}

function HeaderLogo() {
  return (
    <div >
      
    </div>
  );
}

function HeaderNavigation() {
  return (
    <nav>
  <div className="logo">
    <img src={headlogo} width="100px" height="80px" alt="" />
  </div>
  <ul>
    <NavigationLink to="/" label="MAIN" />
    <NavigationLink to="/Gallery" label="GALLERY" />
    <NavigationLink to="/Projects" label="PROJECTS" />
    <NavigationLink to="/Certificate" label="CERTIFICATIONS" />
    <NavigationLink to="/Contact" label="CONTACTS" />
  </ul>
</nav>
  );
}

function NavigationLink({ to, label }) {
  return (
    <Link to={to}>
      <li >
        {label}
      </li>
    </Link>
  );
}

export default Heads;