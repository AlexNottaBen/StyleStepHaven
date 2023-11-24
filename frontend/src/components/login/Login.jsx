import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const Login = () => {
    const [formData, setFormData] = useState({
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
        // Здесь можно добавить логику для отправки данных на сервер
        console.log("Отправка данных:", formData);
    };

    return (
        <div className="container">
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.email}>
                    <label htmlFor="email">Email:</label>
                    <input className={styles.emailInput} type="email" id="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles.password}>
                    <label htmlFor="password">Password:</label>
                    <input className={styles.passwordInput} type="password" id="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <button className={styles.buttonLogin} type="submit">
                    Login
                </button>

                <Link to="/registration" className={styles.buttonRegistration}>
                    Registration
                </Link>
            </form>
        </div>
    );
};

export default Login;
