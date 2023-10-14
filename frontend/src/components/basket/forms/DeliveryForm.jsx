import React, { useState } from "react";
import styles from "../forms/DeliveryForm.module.css";

const DeliveryForm = () => {
    const [formData, setFormData] = useState({
        order: {},
        amount: "",
        deliveryMethod: "courier",
        paymentMethod: "creditCard",
    });

    const handleProductSelect = (selectedProduct) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            order: selectedProduct,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику для отправки данных на сервер
        console.log("Отправка данных:", formData);
    };

    return (
        <form className={styles.deliveryForm} action="/submit_order" method="post" onSubmit={handleSubmit}>
            <h1>2. Choose variant delivery</h1>
            <div>
                <label htmlFor="order">Заказ:</label>
                <textarea id="order" name="order" value={formData.order.name} readOnly></textarea>
            </div>
            <div>
                <label htmlFor="amount">Сумма:</label>
                <input className={styles.sum} type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="deliveryMethod">Способ доставки:</label>
                <select className={styles.deliveryInput} id="deliveryMethod" name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange} required>
                    <option value="courier">Курьер</option>
                    <option value="pickup">Самовывоз</option>
                    <option value="post">Почта</option>
                </select>
            </div>
            <div>
                <label htmlFor="paymentMethod">Способ оплаты:</label>
                <select className={styles.paymentMethod} id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                    <option value="creditCard">Кредитная карта</option>
                    <option value="paypal">PayPal</option>
                    <option value="cash">Наличные</option>
                </select>
            </div>
            <button className={styles.button} type="submit">
                Submit
            </button>
        </form>
    );
};

export default DeliveryForm;
