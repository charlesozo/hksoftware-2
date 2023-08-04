import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import "./Footer.css"

import {motion} from 'framer-motion'
const Footer = () => {
  const gmailLink = "mailto:hksoftware00@gmail.com"
  function handleEmail() {
    window.location.href = gmailLink
  }
  return (
    <motion.section
    id="footer"
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
       <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Contact Us</span>
         
         
        </div>
 
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
        <form class="contact-form">
       <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="form-group">
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" required />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="form-group">
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" required />
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" onClick={handleEmail}>Submit</button>
  </form> 
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Where to find us</span>
            <p>Jagatsinghpur Odisha 754103</p>
          </div>
          <ul className={css.menu}>
            <li>call us at +916372271190</li>
            <li>email us at hksoftware00@gmail.com</li>
            <li>© 2022. All rights reserved by HK software inc.</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
