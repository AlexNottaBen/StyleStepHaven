import Product from "../product/Product";
import ShoeCategories from "../shoeCategories/ShoeCategories";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <ShoeCategories />
            <Product />
        </>
    );
};

export default Home;
