import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ShoeCategories.module.css";

const ShoeCategories = () => {
    return (
        <nav className={styles.tileContainer}>
            <NavLink to={"/men"} className={`${styles.tile} ${styles.man}`}>
                <h3 className={styles.container}>Men</h3>
            </NavLink>
            <NavLink to={"women"} className={`${styles.tile} ${styles.woman}`}>
                <h3 className={styles.container}>Women</h3>
            </NavLink>
            <NavLink to={"kids"} className={`${styles.tile} ${styles.child}`}>
                <h3 className={styles.container}>Kids</h3>
            </NavLink>
        </nav>
    );
};

export default ShoeCategories;
