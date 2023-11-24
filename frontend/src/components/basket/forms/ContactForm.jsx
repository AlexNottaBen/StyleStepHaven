import React, { useState } from "react";
import styles from "../forms/ContactForm.module.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        city: "",
    });

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
        <form className={styles.contactForm} action="/submit_form" method="post" onSubmit={handleSubmit}>
            <h1>1. Contact details</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input className={styles.nameInput} type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="phone">Phone number:</label>
                <input className={styles.numberInput} type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input className={styles.cityInput} type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <button className={styles.button} type="submit">

                Изменить

                Submit

            </button>
        </form>
    );
};

export default ContactForm;
