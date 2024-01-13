import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FaTrash } from "react-icons/fa";
import styles from "./Header.module.css";
import logo from "/public/logo.png";
import Search from "../search/Search";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store"; // Предполагается, что у вас есть тип RootState
import { cartActions } from "../../store/cart.slice";
import ordersData from "../../data/orders";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const [orders, setOrders] = useState(ordersData);

    const toggleActive = () => {
        setIsActive((prev) => !prev);
    };

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleRemoveProduct = useCallback(
        (id: number) => {
            dispatch(cartActions.remove(id));
        },
        [dispatch]
    );

    const handleIncrement = useCallback(
        (id: number) => {
            dispatch(cartActions.add(cartItems.find((item) => item.id === id)!));
        },
        [dispatch, cartItems]
    );

    const handleDecrement = useCallback(
        (id: number) => {
            dispatch(cartActions.decrease(id));
        },
        [dispatch]
    );

    useEffect(() => {
        const totalItemsCount = cartItems.reduce((total, item) => total + item.count, 0);
        console.log(totalItemsCount);
    }, [cartItems]);

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />

            <Search />
            <nav className={styles.navigation}>
                <NavLink to="#" className={`${styles.navitem} ${isActive ? styles.active : ""}`} onClick={toggleActive}>
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
                                            <div className="row ">
                                                <div className="col-3">{item.image && <img className={styles.img} src={item.image} alt={item.name} />}</div>
                                                <div className="col-8">
                                                    <p className={styles.name}>Name: {item.name}</p>
                                                    <p className={styles.price}>Price: {item.price}</p>
                                                </div>
                                                <div className="col">
                                                    <FaTrash className={styles.deleteIcon} onClick={() => handleRemoveProduct(item.id)} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <div className={styles.quantity}>
                                                        <button className={styles.increment} onClick={() => handleDecrement(item.id)}>
                                                            ➖
                                                        </button>
                                                        <span>{item.count}</span>
                                                        <button className={styles.decrement} onClick={() => handleIncrement(item.id)}>
                                                            ➕
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <NavLink to="/basket" className={styles.cartButton}>
                                                        <span className={styles.cart}>Go to cart</span>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={styles.shop}>
                                    <span>No products</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
