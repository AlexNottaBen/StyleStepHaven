import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

interface FormData {
    username: string;
    password: string;
}

interface LoginProps {
    onLogin: () => void;
    isLoggedIn: boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        password: "",
    });
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

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
            const response = await axios.post("http://localhost:8000/api/token/", JSON.stringify(formData), {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const accessToken = response.data.access;
            localStorage.setItem("access_token", accessToken);
            onLogin();
            navigate("/profile");
        } catch (error) {
            setError("Incorrect username or password");
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.username}>
                    <label htmlFor="username">Username:</label>
                    <input className={styles.usernameInput} type="text" id="username" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
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
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
