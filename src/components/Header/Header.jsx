import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerBlock}>
        <NavLink to="/home" activeClassName={styles.activeLink}>
          <div className={styles.btn}>Home</div>
        </NavLink>
        <NavLink to="/employees" activeClassName={styles.activeLink}>
          <div className={styles.btn}>Employees</div>
        </NavLink>
        <NavLink to="/settings" activeClassName={styles.activeLink}>
          <div className={styles.btn}>Settings</div>
        </NavLink>
        <NavLink to="/logout" activeClassName={styles.activeLink}>
          <div className={styles.btn}>Logout</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
