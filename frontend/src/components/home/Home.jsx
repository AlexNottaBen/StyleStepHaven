// Home.js
import React, { useState } from "react";
import Product from "../product/Product";
import ShoeCategories from "../shoeCategories/ShoeCategories";

import styles from "./Home.module.css";
import Filter from "../filter/Filter";

const Home = () => {
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    return (
        <>
            <ShoeCategories />
            <Filter onFilterChange={handleFilterChange} />
            <Product filter={filter} />
        </>
    );
};

export default Home;
