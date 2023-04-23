import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";
import logo from "./logo.png";
import Icons from "@/variables/Icons";
import { Icon } from "@iconify/react";
import { classnames } from "@/helpers/component";

const Navbar = () => {
  // const [openNavbar, setOpenNavbar] = useState(false);
  // const toggleNavbar = () => {
  //   setOpenNavbar(!openNavbar);
  // };
  // const closeNavbar = () => {
  //   setOpenNavbar(!openNavbar);
  // };
  return (
    <nav
      className={styles.navbar}
      // className={classnames([
      //   styles.navbar,
      //   openNavbar ? styles.opennavbar : "",
      // ])}
    >
      <div className={styles.logo}>
        <img src={logo.src} width={120} />
      </div>
      <ul className={styles.navItems}>
        {/* <Icon
          icon={Icons.Close}
          className={styles.close}
          // onClick={() => setOpenNavbar(false)}
        ></Icon> */}
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
        // onClick={toggleNavbar}
      ></Icon>
      <div className={styles.button}>
        <Button>Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;
