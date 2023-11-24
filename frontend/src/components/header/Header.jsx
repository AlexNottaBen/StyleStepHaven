<<<<<<< HEAD
import React, { useState, useCallback, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FaTrash } from "react-icons/fa";
import styles from "./Header.module.css";
import logo from "/public/logo.png";
import Search from "../search/Search";
<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch(); // Добавляем хук dispatch
=======
import ordersData from "../../data/orders";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [orders, setOrders] = useState(ordersData); // Используем useState для хранения заказов
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef

    const toggleActive = () => {
        setIsActive((prev) => !prev);
    };

<<<<<<< HEAD
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
=======
    const handleRemoveProduct = (index) => {
        // const updatedOrders = [...orders]; // это ломает код
        orders.splice(index, 1); // используем исходный массив
        setOrders(orders);
    };
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
<<<<<<< HEAD
            <Search />
            <nav className={styles.navigation}>
                <NavLink className={`${styles.navitem} ${isActive ? styles.active : ""}`} onClick={toggleActive}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartItems.length > 0 && <span className={styles.cartCount}>{cartItems.reduce((total, item) => total + item.count, 0)}</span>}
=======

            <Search />

            <nav className={styles.navigation}>
                <NavLink className={`${styles.navitem} ${isActive ? styles.active : ""}`} onClick={toggleActive}>
                    <FontAwesomeIcon icon={faShoppingCart} />
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
