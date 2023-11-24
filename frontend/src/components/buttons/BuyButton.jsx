// BuyButton.jsx
<<<<<<< HEAD
import styles from "./BuyButton.module.css";
import orders from "../../data/orders";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";

const BuyButton = ({ product }) => {
    const dispatch = useDispatch();

    const add = (e) => {
        e.preventDefault();
        dispatch(cartActions.add(product));
    };

=======
import React from "react";
import styles from "./BuyButton.module.css";
import orders from "../../data/orders";

const BuyButton = ({ product }) => {
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef
    const handleBuyClick = (event) => {
        event.preventDefault();

        console.log("Click handled!");
        orders.push(product);
    };

    return (
<<<<<<< HEAD
        <button className={styles.buyButton} onClick={add}>
=======
        <button className={styles.buyButton} onClick={handleBuyClick}>
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef
            Buy
        </button>
    );
};

export default BuyButton;
