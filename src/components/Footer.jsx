import React from 'react';
import footerlogo from '../assets/footerlogo.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <FooterLogo />
        <FooterLinks />
        <FooterContacts />
        <FooterSocialMedia />
      </div>
      <div className="footer-bottom">
        <p>© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="footer-section footer-logo">
      <img src={footerlogo} alt="Footer Logo" />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="footer-section">
      <h2 style={{fontSize:'35px'}}>Information</h2>
      <ul style={{fontSize:'20px'}}>
        <li>Main</li>
        <li>Gallery</li>
        <li>Projects</li>
        <li>Certifications</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
}

function FooterContacts() {
  return (
    <div className="footer-section">
      <h2 style={{fontSize:'35px'}}>Contacts</h2>
      <p>1234 Sample Street<br />Austin, Texas 78704</p><br/>
      <p>512.333.2222</p><br/>
      <p>sampleemail@gmail.com</p>
    </div>
  );
}

function FooterSocialMedia() {
  return (
    <div className="footer-section">
      <h2 style={{fontSize:'35px'}}>Social Media</h2>
      <div className="social-icons">
        {/* You can place icons or links here */}
        <p>Facebook</p><br/>
        <p>Instagram</p><br/>
        <p>LinkedIn</p>
      </div>
    </div>
  );
}

export default Footer;
