import { NavLink } from "react-router-dom";
import styles from "./ShoeCategories.module.css";
import { motion } from "framer-motion";

const ShoeCategories: React.FC = () => {
    return (
        <>
            <motion.h1
                initial={{
                    y: -1000,
                    opacity: 0,
                }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                Select a category
            </motion.h1>
            <nav className={styles.tileContainer}>
                <motion.div
                    initial={{
                        x: -1000,
                        opacity: 0,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <NavLink to={"/men"} className={`${styles.tile} ${styles.man}`}>
                        <h3 className={styles.container}>Men</h3>
                    </NavLink>
                </motion.div>
                <motion.div
                    initial={{
                        x: -1000,
                        opacity: 0,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <NavLink to={"/women"} className={`${styles.tile} ${styles.woman}`}>
                        <h3 className={styles.container}>Women</h3>
                    </NavLink>
                </motion.div>

                <motion.div
                    initial={{
                        x: -1000,
                        opacity: 0,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <NavLink to={"/kids"} className={`${styles.tile} ${styles.child}`}>
                        <h3 className={styles.container}>Kids</h3>
                    </NavLink>
                </motion.div>
            </nav>
        </>
    );
};

export default ShoeCategories;
