import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BuyButton from "../buttons/BuyButton";
import axios from "axios";
import styles from "./SingleProduct.module.css";

interface ProductData {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    count: number;
    attributes: { name: string; value: string }[];
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
                console.error("Error while receiving data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading data...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container">
            <h1>{product.name}</h1>
            <div className="row">
                <div className="col">
                    <img className={styles.img} src={product.image} alt={product.name} />
                    <div className={styles.attributes}>
                        <h2>Attributes:</h2>
                        <ul>
                            {product.attributes.map((attribute, index) => (
                                <li key={index}>
                                    <strong>{attribute.name}:</strong> {attribute.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <h1 className={styles.price}>Price: {product.price} ₴</h1>
                    <p className={styles.description}>
                        <strong>Description:</strong> {product.description}
                    </p>
                    <div className="row">
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
