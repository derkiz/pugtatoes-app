import React from 'react'
import './footer.css'
import Link from 'next/link'

const Footer = () => {
  return (
  <>
    <div className="footer">
      <div className="footer-flex-container">
        <div className="footer-column">
          <div className="footer-title">Quick Links</div>
            <ul>
              <li>Catalogue</li>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        <div className="footer-column">
          <div className="footer-title">Our mission</div>
            <p>Our aim is to create the cutest pug art products with our talented artist Zoe to bring joy to all of our customers! </p>
        </div>
        <div className="mobile-menu-icon-3">
          <div className="footer-image-holder">
            <img src="static/pugtatoes-logo.svg"></img>
          </div>
        </div>
      </div>
      <div className="footer-flex-container">
        <div className="newsletter">
          <div className="footer-title">Stay updated!</div>
          <div className="insert-email">
            <p>Email</p>
            <div className="email-icon">
              <img src="static/arrow-right.svg" alt="arrow-right svg"></img>
            </div>
          </div>
        </div>
        <div className="socials">
          <div className="social-item">
            <img className="footer-icon" src="static/instagram.svg" alt="Instagram Icon"></img>
          </div>
          <div className="social-item">
            <img className="footer-icon-2" src="static/x.svg" alt="Instagram Icon"></img>
          </div>
          <div className="social-item">
            <img className="footer-icon" src="static/tiktok.svg" alt="Instagram Icon"></img>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Footer