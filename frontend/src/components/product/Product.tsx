// Product.tsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import BuyButton from "../buttons/BuyButton";
import axios from "axios";
import Pagination from "../pagination/Pagination";

interface ProductProps {
    filter: string;
}

interface ProductData {
    id: number;
    image: string;
    hovered_image: string;
    name: string;
    price: number;
    department: string;
}

const Product: React.FC<ProductProps> = ({ filter }) => {
    const [hoveredImg, setHoveredImg] = useState<number | null>(null);
    const [products, setProducts] = useState<ProductData[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `http://127.0.0.1:8000/api/products/?page=${currentPage}`;
                const response = await axios.get(apiUrl);
                setProducts(response.data.results);
                setTotalPages(Math.ceil(response.data.count / response.data.results.length));
                setLoading(false);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, filter]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const filterProducts = () => {
        switch (filter) {
            case "men":
                return products.filter((product) => product.department === "Men's");
            case "women":
                return products.filter((product) => product.department === "Women's");
            case "kids":
                return products.filter((product) => product.department === "Kid's");
            default:
                return products;
        }
    };

    return (
        <div>
            <div className={styles.productContainer}>
                {loading ? (
                    <p>Загрузка данных...</p>
                ) : Array.isArray(filterProducts()) ? (
                    filterProducts().map((product) => (
                        <form className={styles.productForm} key={product.id}>
                            <img className={styles.img} src={hoveredImg === product.id ? product.hovered_image : product.image} alt={product.name} onMouseOver={() => setHoveredImg(product.id)} onMouseOut={() => setHoveredImg(null)} />
                            <Link key={`link-${product.id}`} to={`/singleProduct/${product.id}`}>
                                <h3 className={styles.name}>{product.name}</h3>
                            </Link>
                            <p>Price: {product.price} ₴</p>
                            <BuyButton product={product} />
                        </form>
                    ))
                ) : (
                    <p>Нет данных для отображения</p>
                )}
            </div>
            <div className={styles.paginationContainer}>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    );
};

export default Product;
