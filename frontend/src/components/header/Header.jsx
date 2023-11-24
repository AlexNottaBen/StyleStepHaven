import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FaTrash } from "react-icons/fa";
import styles from "./Header.module.css";
import logo from "/public/logo.png";
import Search from "../search/Search";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";

import ordersData from "../../data/orders";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch(); // Добавляем хук dispatch
    const [orders, setOrders] = useState(ordersData); // Используем useState для хранения заказов

    const toggleActive = () => {
        setIsActive((prev) => !prev);
    };

    const cartItems = useSelector((state) => state.cart.items);

    const handleRemoveProduct = useCallback(
        (id) => {
            dispatch(cartActions.remove(id));
        },
        [dispatch]
    );

    const handleIncrement = useCallback(
        (id) => {
            dispatch(cartActions.add(cartItems.find((item) => item.id === id)));
        },
        [dispatch, cartItems]
    );

    const handleDecrement = useCallback(
        (id) => {
            dispatch(cartActions.decrease(id));
        },
        [dispatch]
    );

    useEffect(() => {
        const totalItemsCount = cartItems.reduce((total, item) => total + item.count, 0);
        console.log(totalItemsCount); // Это общее количество товаров в корзине
    }, [cartItems]);

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />

            <Search />
            <nav className={styles.navigation}>
                <NavLink className={`${styles.navitem} ${isActive ? styles.active : ""}`} onClick={toggleActive}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartItems.length > 0 && <span className={styles.cartCount}>{cartItems.reduce((total, item) => total + item.count, 0)}</span>}
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
                        <div>
                            {cartItems && cartItems.length > 0 ? (
                                <div className={styles.shop}>
                                    {cartItems.map((item) => (
                                        <div className={styles.shopCart} key={item.id}>
                                            {item.imageUrl && <img className={styles.img} src={item.imageUrl} alt={item.name} />}
                                            <p className={styles.name}>
                                                Count: {item.count}, Name: {item.name}
                                            </p>
                                            <p className={styles.price}>Price: {item.price}</p>

                                            <div className={styles.quantity}>
                                                <button onClick={() => handleDecrement(item.id)}>-</button>
                                                <span>{item.count}</span>
                                                <button onClick={() => handleIncrement(item.id)}>+</button>
                                            </div>

                                            <FaTrash className={styles.deleteIcon} onClick={() => handleRemoveProduct(item.id)} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={styles.shop}>No products</div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
