import React, { useState } from "react";
import styles from "../forms/BasketForm.module.css";

const BasketForm = () => {
    const [quantity, setQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [totalToPay, setTotalToPay] = useState(0);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);

        // После изменения количества пересчитываем сумму заказа
        setTotalAmount(newQuantity * pricePerUnit);
    };

    const handleShippingCostChange = (e) => {
        const newShippingCost = parseInt(e.target.value, 10);
        setShippingCost(newShippingCost);

        // После изменения стоимости доставки пересчитываем итоговую сумму к оплате
        setTotalToPay(totalAmount + newShippingCost);
    };

    return (
        <div>
            <form className={styles.basketForm} action="">
                <h1>Basket</h1>

                <div>
                    <label htmlFor="quantity">Количество товаров</label>
                    <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} />
                </div>
                <div>
                    <label htmlFor="totalAmount">Сумма товаров</label>
                    <input type="text" id="totalAmount" value={totalAmount} readOnly />
                </div>
                <div>
                    <label htmlFor="shippingCost">Стоимость доставки</label>
                    <input type="number" id="shippingCost" value={shippingCost} onChange={handleShippingCostChange} />
                </div>
                <div>
                    <label htmlFor="totalToPay">Сумма к оплате</label>
                    <input type="text" id="totalToPay" value={totalToPay} readOnly />
                </div>
            </form>
        </div>
    );
};

export default BasketForm;
