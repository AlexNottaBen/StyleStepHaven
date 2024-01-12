import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Basket.module.css";
import ContactForm from "./forms/ContactForm";
import DeliveryForm from "./forms/DeliveryForm";
import { RootState } from "../../store/store";
import { CartItem, cartActions } from "../../store/cart.slice";

interface BasketProps {}

const Basket: React.FC<BasketProps> = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleIncrement = (id: number) => {
        dispatch(cartActions.add(cartItems.find((item) => item.id === id)!));
    };

    const handleDecrement = (id: number) => {
        dispatch(cartActions.decrease(id));
    };

    const handleRemove = (id: number) => {
        dispatch(cartActions.remove(id));
    };

    const handleDeliveryFormSubmit = (formData: string) => {
        // Ваша логика обработки данных формы
        console.log("Form data submitted:", formData);
    };

    return (
        <>
            <h1>Placing an order</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ContactForm />
                    </div>
                    <div className="col">
                        <DeliveryForm cartItems={cartItems} onSubmit={handleDeliveryFormSubmit} onIncrement={handleIncrement} onDecrement={handleDecrement} onRemove={handleRemove} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Basket;
