"use client";

import { useState } from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`${styles.navLinks} ${isActive ? styles.active : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Über Uns</a></li>
          <li><a href="#">Feuerwache</a></li>
          <li><a href="#">Fahrzeuge</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
        <a className={styles.headerButton} href='/member'>Login</a>
      </nav>
    </header>
  );
};

export default NavBar;
