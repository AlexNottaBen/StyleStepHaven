import React, { useState } from "react";
import Product from "../product/Product";
import ShoeCategories from "../shoeCategories/ShoeCategories";
import styles from "./Home.module.css";
import Filter from "../filter/Filter";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const [filter, setFilter] = useState<string>("all");

    const handleFilterChange = (category: string) => {
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
