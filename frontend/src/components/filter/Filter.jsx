// ProductFilter.js
import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState("all");

    const handleButtonClick = (category) => {
        setActiveFilter(category);
        onFilterChange(category);
    };

    return (
        <div className={styles.filterContainer}>
            <button className={activeFilter === "all" ? styles.activeButton : ""} onClick={() => handleButtonClick("all")}>
                All
            </button>
            <button className={activeFilter === "men" ? styles.activeButton : ""} onClick={() => handleButtonClick("men")}>
                Men's
            </button>
            <button className={activeFilter === "women" ? styles.activeButton : ""} onClick={() => handleButtonClick("women")}>
                Women's
            </button>
            <button className={activeFilter === "kids" ? styles.activeButton : ""} onClick={() => handleButtonClick("kids")}>
                Kids
            </button>
        </div>
    );
};

export default Filter;
