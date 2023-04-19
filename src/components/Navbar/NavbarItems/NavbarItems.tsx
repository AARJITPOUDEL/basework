import React from 'react'
import styles from './NavbarItems.module.scss'
const NavbarItems = () => {
  return (
    <div>
              <ul className={styles.navItems}style={{ fontFamily: "'Urbanist', sans-serif" }} >
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
      </ul>
    </div>
  )
}

export default NavbarItems