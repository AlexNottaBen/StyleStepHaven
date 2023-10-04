import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(`Вы ищете: ${searchTerm}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <input className={styles.search} type="text" placeholder="Search..." value={searchTerm} onChange={handleInputChange} />
            <button className={styles.button} type="submit">
                Search
            </button>
        </form>
    );
};

export default Search;
