import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/dialogs">Dialogs</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/news">News</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/music">Music</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;
