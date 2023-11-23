// BuyButton.jsx
import React from "react";
import styles from "./BuyButton.module.css";
import orders from "../../data/orders";

const BuyButton = ({ product }) => {
    const handleBuyClick = (event) => {
        event.preventDefault();

        console.log("Click handled!");
        orders.push(product);
    };

    return (
        <button className={styles.buyButton} onClick={handleBuyClick}>
            Buy
        </button>
    );
};

export default BuyButton;
