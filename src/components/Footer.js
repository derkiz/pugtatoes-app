'use client'

import React, { useState } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [name, setName] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    if (name.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_flex_container}>
          <div className={styles.footer_column}>
            <div className={styles.footer_title}>Quick Links</div>
            <ul>
              <Link href="/collections" style={{ textDecoration: "none", color: "inherit" }}><li>Shop All</li></Link>
              <Link href="/pages/about" style={{ textDecoration: "none", color: "inherit" }}><li>About</li></Link>
              <Link href="/pages/contact" style={{ textDecoration: "none", color: "inherit" }}><li>Contact</li></Link>
              <Link href="/pages/contact" style={{ textDecoration: "none", color: "inherit" }}><li>Customer Support</li></Link>
              <Link href="/pages/privacy-policy" style={{ textDecoration: "none", color: "inherit" }}><li>Privacy Policy</li></Link>
              <Link href="/pages/terms-and-conditions" style={{ textDecoration: "none", color: "inherit" }}><li>Terms and Conditions</li></Link>
            </ul>
          </div>
          <div className={styles.footer_column}>
            <div className={styles.footer_title}>Our mission</div>
            <p>Our aim is to create the cutest pug art products with our talented artist Zoe to bring joy to all of our customers!</p>
          </div>
          <div className={styles.mobile_menu_icon_3}>
            <div className={styles.footer_image_holder}>
              <img src="/static/pugtatoes-logo.svg" alt="Pugtatoes Logo"></img>
            </div>
          </div>
        </div>
        <div className={styles.footer_flex_container}>
          <div className={styles.newsletter}>
            <div className={styles.footer_title}>Stay updated!</div>
            <form onSubmit={handleSubscribe} className={styles.insert_email}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input_field}
              />
              <label className={styles.label} htmlFor="name">Your Email *</label>
            </form>
            {subscribed && <div className={styles.thank_you_message}>Thanks for subscribing!</div>}
          </div>
          <div className={styles.socials}>
            <div className={styles.social_item}>
              <img className={styles.footer_icon} src="/static/instagram.svg" alt="Instagram Icon"></img>
            </div>
            <div className={styles.social_item}>
              <img className={styles.footer_icon_2} src="/static/x.svg" alt="Twitter Icon"></img>
            </div>
            <div className={styles.social_item}>
              <img className={styles.footer_icon} src="/static/tiktok.svg" alt="TikTok Icon"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
