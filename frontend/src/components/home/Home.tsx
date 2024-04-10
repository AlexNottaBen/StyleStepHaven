import React, { useEffect, useState } from "react";
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
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка страницы вверх при монтировании компонента
    }, []); // Пустой массив зависимостей, чтобы код вызывался только один раз

    return (
        <div className={styles.home}>
            <ShoeCategories />
            <Filter onFilterChange={handleFilterChange} />
            <Product filter={filter} />
        </div>
    );
};

export default Home;
