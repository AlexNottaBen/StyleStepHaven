import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import logo from "/public/logo.png";
import Search from "../search/Search";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />

            <Search />

            <nav className={styles.navigation}>
                <NavLink className={styles.navitem} to="/basket">
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
            </nav>
        </header>
    );
};

export default Header;
