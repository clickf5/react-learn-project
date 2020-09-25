import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';
import Sidebar from './Sidebar';

const Navbar = () => (
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
    <Sidebar />
  </nav>
);

export default Navbar;
