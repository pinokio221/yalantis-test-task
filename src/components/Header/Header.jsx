import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerBlock}>
        <div>
          <NavLink to="/home" activeClassName={styles.activeLink}>
            <button className={styles.btn}>Home</button>
          </NavLink>
          <NavLink to="/employees" activeClassName={styles.activeLink}>
            <button className={styles.btn}>Employees</button>
          </NavLink>
          <NavLink to="/settings" activeClassName={styles.activeLink}>
            <button className={styles.btn}>Settings</button>
          </NavLink>
          <NavLink to="/logout" activeClassName={styles.activeLink}>
            <button className={styles.btn}>Logout</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
