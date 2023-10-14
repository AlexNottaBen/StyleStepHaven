// Product.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import products from "../../data/products";
import Button from "../buttons/Button";
import BuyButton from "../buttons/BuyButton";

const Product = () => {
    const [hoveredImg, setHoveredImg] = useState(null);

    return (
        <>
            {products.map((product) => (
                <form className={styles.productForm} key={product.id}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img className={styles.img} src={hoveredImg === product.id ? product.hoveredImageUrl : product.imageUrl} alt={product.name} onMouseOver={() => setHoveredImg(product.id)} onMouseOut={() => setHoveredImg(null)} />
                            </div>
                            <div className="col">
                                <Link to={`/singleProduct/${product.id}`}>
                                    <h2 className={styles.name}>{product.name}</h2>
                                </Link>
                                <p>Price: {product.price} </p>
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
            ))}
        </>
    );
};

export default Product;
