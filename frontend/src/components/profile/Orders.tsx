import { NavLink } from "react-router-dom";
import styles from "../profile/Orders.module.css";

const Orders = () => {
    return (
        <div>
            <div className={styles.navigate}>
                <NavLink className={styles.navitem} to="/profile">
                    <h2>Profile</h2>
                </NavLink>
                <NavLink className={styles.navitem} to="/orders">
                    <h2>Orders</h2>
                </NavLink>
            </div>
            <h1>Orders</h1>
        </div>
    );
};

export default Orders;
