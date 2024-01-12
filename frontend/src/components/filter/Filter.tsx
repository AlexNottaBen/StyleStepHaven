import { useState, FC } from "react";
import styles from "./Filter.module.css";

interface FilterProps {
    onFilterChange: (category: string) => void;
}

const Filter: FC<FilterProps> = ({ onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState("all");

    const handleButtonClick = (category: string) => {
        setActiveFilter(category);
        onFilterChange(category);
    };

    return (
        <div className={styles.filterContainer}>
            <button className={`${styles.button} ${activeFilter === "all" ? styles.activeButton : ""}`} onClick={() => handleButtonClick("all")}>
                All
            </button>
            <button className={`${styles.button} ${activeFilter === "men" ? styles.activeButton : ""}`} onClick={() => handleButtonClick("men")}>
                Men's
            </button>
            <button className={`${styles.button} ${activeFilter === "women" ? styles.activeButton : ""}`} onClick={() => handleButtonClick("women")}>
                Women's
            </button>
            <button className={`${styles.button} ${activeFilter === "kids" ? styles.activeButton : ""}`} onClick={() => handleButtonClick("kids")}>
                Kids
            </button>
        </div>
    );
};

export default Filter;
