import styles from "./BuyButton.module.css";

const BuyButton = () => {
    const handleClick = (event) => {
        event.preventDefault();
        // Добавьте здесь логику, которая должна выполняться при нажатии на кнопку
    };

    return (
        <button className={styles.buyButton} onClick={handleClick}>
            Buy
        </button>
    );
};

export default BuyButton;
