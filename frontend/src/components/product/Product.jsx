// Product.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import Button from "../buttons/Button";
import BuyButton from "../buttons/BuyButton";
import axios from "axios";

const Product = ({ filter }) => {
    const [hoveredImg, setHoveredImg] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = "http://127.0.0.1:8000/";
                const response = await axios.get(apiUrl);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
        <div className={styles.productContainer}>
            {loading ? (
                <p>Загрузка данных...</p>
            ) : (
                filterProducts().map((product) => (
                    <form className={styles.productForm} key={product.id}>
                        <img className={styles.img} src={hoveredImg === product.id ? product.hovered_image_url : product.image_url} alt={product.name} onMouseOver={() => setHoveredImg(product.id)} onMouseOut={() => setHoveredImg(null)} />
                        <Link key={`link-${product.id}`} to={`/singleProduct/${product.id}`}>
                            <h3 className={styles.name}>{product.name}</h3>
                        </Link>
                        <p>Price: {product.price}</p>
                        <Button id={product.id} />
                        <br />
                        <BuyButton product={product} />
                    </form>
                ))
            )}
        </div>
    );
};

export default Product;
