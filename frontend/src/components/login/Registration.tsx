import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Registration.module.css";

interface FormData {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}

const Registration: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/user/create/", formData);
            const token = response.data.token; // Предполагается, что сервер возвращает токен в формате JSON
            localStorage.setItem("access_token", token); // Сохранение токена в localStorage
        } catch (error) {
            console.error("Ошибка при регистрации:", error);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.regForm} onSubmit={handleSubmit}>
                <div className={styles.name}>
                    <label htmlFor="firstName">Name:</label>
                    <input className={styles.nameInput} type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className={styles.surname}>
                    <label htmlFor="lastName">Surname:</label>
                    <input className={styles.surnameInput} type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className={styles.username}>
                    <label htmlFor="username">Username:</label>
                    <input className={styles.usernameInput} type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
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
