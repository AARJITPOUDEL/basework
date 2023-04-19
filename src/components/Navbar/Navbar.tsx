import React from 'react';
import styles from './Navbar.module.scss'
import Button from '../Button/Button';
import NavbarItems from './NavbarItems/NavbarItems';
import logo from './NavbarItems/logo.png'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
  <div className={styles.logo}> 
<img src={logo.src} width={120}/>
  </div>
    <NavbarItems></NavbarItems>
      <div className={styles.button}>
     <Button >Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;
