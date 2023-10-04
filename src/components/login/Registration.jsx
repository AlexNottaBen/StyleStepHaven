import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Registration.module.css";

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
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
        //Здесь можно добавить логику для отправки данных на сервер, нет это не чатгпт писал а я))))
        console.log("Отправка данных:", formData);
    };

    return (
        <div className="container">
            <form className={styles.regForm} onSubmit={handleSubmit}>
                <div className={styles.name}>
                    <label htmlFor="firstName">Name:</label>
                    <input className={styles.nameInput} type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className={styles.surname}>
                    <label htmlFor="lastName">Surname:</label>
                    <input className={styles.surnameInput} type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className={styles.email}>
                    <label htmlFor="email">Email:</label>
                    <input className={styles.emailInput} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles.password}>
                    <label htmlFor="password">Password:</label>
                    <input className={styles.passwordInput} type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button className={styles.buttonRegistration} type="submit">
                    Registration
                </button>

                <Link to="/login" className={styles.buttonLogin}>
                    Login
                </Link>
            </form>
        </div>
    );
};

export default Registration;
