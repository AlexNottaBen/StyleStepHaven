import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../forms/ContactForm.module.css";

interface FormData {
    name: string;
    phone: string;
    city: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        city: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
