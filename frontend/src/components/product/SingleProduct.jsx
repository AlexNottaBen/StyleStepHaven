import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import BuyButton from "../buttons/BuyButton";
import Button from "../buttons/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `http://127.0.0.1:8000/${id}`;
                const response = await axios.get(apiUrl);
                setProduct(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        fetchData();
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container">
            <h1>{product.name}</h1>
            <div className="row">
                <div className="col">
                    <img className={styles.img} src={product.image_url} alt={product.name} />
                </div>

                <div className="col">
                    <p>Price: {product.price} </p>
                    <p>Description: {product.description}</p>
                    <div className="row">
                        <div className="col">
                            <Button />
                        </div>
                        <div className="col">
                            <br />
                            <BuyButton product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
