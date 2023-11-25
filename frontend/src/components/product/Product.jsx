import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import Button from "../buttons/Button";
import BuyButton from "../buttons/BuyButton";
import axios from "axios";

const Product = () => {
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

    return (
        <>
            {loading ? (
                <p>Загрузка данных...</p>
            ) : (
                products.map((product) => (
                    <form className={styles.productForm} key={product.id}>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img className={styles.img} src={hoveredImg === product.id ? product.hovered_image_url : product.image_url} alt={product.name} onMouseOver={() => setHoveredImg(product.id)} onMouseOut={() => setHoveredImg(null)} />
                                </div>
                                <div className="col">
                                    <Link key={`link-${product.id}`} to={`/singleProduct/${product.id}`}>
                                        <h2 className={styles.name}>{product.name}</h2>
                                    </Link>
                                    <p>Price: {product.price}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Button id={product.id} />
                                </div>
                                <div className="col">
                                    <br />
                                    <BuyButton product={product} />
                                </div>
                            </div>
                        </div>
                    </form>
                ))
            )}
        </>
    );
};

export default Product;
