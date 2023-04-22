import React from "react";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";
import logo from "./logo.png";
import Icons from "@/variables/Icons";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo.src} width={120} />
      </div>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="/">Overview</a>
        </li>
        <li className={styles.navItem}>
          <a href="">Projects</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Life at Basework</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Blogs</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">About</a>
        </li>
      </ul>{" "}
      <Icon
        icon={Icons.Hamburger}
        className={styles.hamburger}
        width={30}
        style={{ marginRight: "10px" }}
      ></Icon>
      <div className={styles.button}>
        <Button>Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;
