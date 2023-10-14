import React, { useState } from "react";
import styles from "./Basket.module.css";
import BasketForm from "./forms/BasketForm";
import ContactForm from "./forms/ContactForm";
import DeliveryForm from "./forms/DeliveryForm";

const Basket = () => {
    return (
        <>
            <h1>Placing an order</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ContactForm />
                        <br />
                        <DeliveryForm />
                    </div>
                    <div className="col">
                        <BasketForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Basket;
