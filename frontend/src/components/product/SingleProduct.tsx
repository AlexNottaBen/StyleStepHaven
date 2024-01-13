import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BuyButton from "../buttons/BuyButton";
import Button from "../buttons/Button";
import axios from "axios";
import styles from "./SingleProduct.module.css";

interface ProductData {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    count: number;
    imageUrl: string;
}

const SingleProduct: React.FC = () => {
    const { id = "" } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `http://127.0.0.1:8000/api/products/${id}/`;
                const response = await axios.get<ProductData>(apiUrl);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Загрузка данных...</div>;
    }

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div className="container">
            <h1>{product.name}</h1>
            <div className="row">
                <div className="col">
                    <img className={styles.img} src={product.image} alt={product.name} />
                </div>

                <div className="col">
                    <p>Цена: {product.price} </p>
                    <p>Описание: {product.description}</p>
                    <div className="row">
                        <div className="col">
                            <Button id={id} />
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
