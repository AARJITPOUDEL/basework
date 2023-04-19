import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__Column}>
        <h2 className={styles.Footer__Title}>Company</h2>
        <ul className={styles.Footer__List}>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__Column}>
        <h2 className={styles.Footer__Title}>Resources</h2>
        <ul className={styles.Footer__List}>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Whitepapers</a>
          </li>
          <li>
            <a href="#">Webinars</a>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__Column}>
        <h2 className={styles.Footer__Title}>Learn</h2>
        <ul className={styles.Footer__List}>
          <li>
            <a href="#">Tutorials</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__Column}>
        <h2 className={styles.Footer__Title}>Features</h2>
        <ul className={styles.Footer__List}>
          <li>
            <a href="#">Feature 1</a>
          </li>
          <li>
            <a href="#">Feature 2</a>
          </li>
          <li>
            <a href="#">Feature 3</a>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__Column}>
        <h2 className={styles.Footer__Title}>Products</h2>
        <ul className={styles.Footer__List}>
          <li>
            <a href="#">Kanban</a>
          </li>
          <li>
            <a href="#">Scrum</a>
          </li>
          <li>
            <a href="#">Bug Report</a>
          </li>
          <li>
            <a href="#">Notes</a>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__Column}>
        <h2 className={styles.Footer__Title}>Trust</h2>
        <ul className={styles.Footer__List}>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Se</a>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__Column}>
        <h2 className={styles.Footer__Title}>Resources</h2>
        <ul className={styles.Footer__List}>
          <li>
            <a href="#">Apps</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Plugins</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
