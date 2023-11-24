import React from "react";
import styles from "./BuyButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";

const BuyButton = ({ product }) => {
    const dispatch = useDispatch();

    const handleBuyClick = (event) => {
        event.preventDefault();

        console.log("Click handled!");
        dispatch(cartActions.add(product));
    };

    return (
        <button className={styles.buyButton} onClick={handleBuyClick}>
            Buy
        </button>
    );
};

export default BuyButton;
