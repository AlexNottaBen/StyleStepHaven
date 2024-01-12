import React from "react";
import styles from "./BuyButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";
import { motion } from "framer-motion";

interface BuyButtonProps {
    product: {
        // Замените типы данных на актуальные
        // Пример: id: string, name: string, price: number, и так далее
        id: number;
        name: string;
        price: number;
        imageUrl: string;
        count: number;

        // Дополнительные свойства вашего продукта
    };
}

const BuyButton: React.FC<BuyButtonProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleBuyClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        console.log("Click handled!");
        dispatch(cartActions.add(product));
    };

    return (
        <div className="example-container">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className={styles.buyButton} onClick={handleBuyClick}>
                Buy
            </motion.button>
        </div>
    );
};

export default BuyButton;
