import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FaTrash } from "react-icons/fa";
import styles from "./Header.module.css";
import logo from "/public/logo.png";
import Search from "../search/Search";
import ordersData from "../../data/orders";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [orders, setOrders] = useState(ordersData); // Используем useState для хранения заказов

    const toggleActive = () => {
        setIsActive((prev) => !prev);
    };

    const handleRemoveProduct = (index) => {
        // const updatedOrders = [...orders]; // это ломает код
        orders.splice(index, 1); // используем исходный массив
        setOrders(orders);
    };

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />

            <Search />

            <nav className={styles.navigation}>
                <NavLink className={`${styles.navitem} ${isActive ? styles.active : ""}`} onClick={toggleActive}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </NavLink>
                <NavLink className={styles.navitem} to="/">
                    Home
                </NavLink>
                <NavLink className={styles.navitem} to="/about">
                    About
                </NavLink>
                <NavLink className={styles.navitem} to="/contacts">
                    Contacts
                </NavLink>
                <NavLink className={styles.login} to="/login">
                    Login
                </NavLink>
                {isActive && (
                    <div>
                        {orders && orders.length > 0 ? (
                            <div className={styles.shop}>
                                {orders.map((order, index) => (
                                    <div className={styles.shopCart} key={index}>
                                        <>
                                            <img className={styles.img} src={order.imageUrl} alt={order.name} />
                                            <h2 className={styles.name}>{order.name}</h2>
                                            <p className={styles.price}>{order.price}</p>
                                            <FaTrash className={styles.deleteIcon} onClick={() => handleRemoveProduct(index)} />
                                        </>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.shop}>No products</div>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
