import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "../forms/DeliveryForm.module.css";

interface CartItem {
    id: number;
    name: string;
    price: string;
    count: number;
}

interface DeliveryFormProps {
    cartItems: CartItem[];
    onSubmit: (formData: FormData) => void;
    onIncrement: (id: number) => void;
    onDecrement: (id: number) => void;
    onRemove: (id: number) => void;
}

interface FormData {
    order: CartItem[];
    amount: string;
    deliveryMethod: string;
    paymentMethod: string;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ cartItems, onSubmit, onIncrement, onDecrement, onRemove }) => {
    const [formData, setFormData] = useState<FormData>({
        order: cartItems || [],
        amount: "",
        deliveryMethod: "courier",
        paymentMethod: "creditCard",
    });

    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            order: cartItems || [],
        }));
    }, [cartItems]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("/API-submit-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Заказ успешно отправлен");
            } else {
                console.error("Не удалось отправить заказ");
            }
        } catch (error) {
            console.error("Ошибка при отправке заказа:", error);
        }
    };

    const calculateTotalPrice = () => {
        if (cartItems && cartItems.length > 0) {
            const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.count, 0);
            return `$${totalPrice.toFixed(2)}`;
        }
        return "$0.00";
    };

    const handleIncrement = (id: number) => {
        onIncrement(id);
    };

    const handleDecrement = (id: number) => {
        onDecrement(id);
    };

    const handleRemove = (id: number) => {
        onRemove(id);
    };

    return (
        <form className={styles.deliveryForm} action="/submit_order" method="post" onSubmit={handleSubmit}>
            <h1>2. Choose delivery options</h1>
            <div>
                <label htmlFor="order">Order:</label>
                <ul>
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - Quantity: {item.count} Price - {item.price}
                                <button type="button" onClick={() => handleIncrement(item.id)}>
                                    ➕
                                </button>
                                <button type="button" onClick={() => handleDecrement(item.id)}>
                                    ➖
                                </button>
                                <button type="button" onClick={() => handleRemove(item.id)}>
                                    Remove
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>No products in the order</li>
                    )}
                </ul>
            </div>

            <div>
                <label htmlFor="totalPrice">Total Price:</label>
                <span>{calculateTotalPrice()}</span>
            </div>

            <div>
                <label htmlFor="deliveryMethod">Delivery method:</label>
                <select className={styles.deliveryInput} id="deliveryMethod" name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange} required>
                    <option value="courier">Courier</option>
                    <option value="pickup">Pickup</option>
                    <option value="post">Mail</option>
                </select>
            </div>

            <div>
                <label htmlFor="paymentMethod">Payment method:</label>
                <select className={styles.paymentMethod} id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                    <option value="creditCard">Credit card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cash">Cash</option>
                </select>
            </div>

            <button className={styles.button} type="submit">
                Submit
            </button>
        </form>
    );
};

export default DeliveryForm;
