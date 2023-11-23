import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import BuyButton from "../buttons/BuyButton";
import Button from "../buttons/Button";

const SingleProduct = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container">
            <h1>{product.name}</h1>
            <div className="row">
                <div className="col">
                    <img className={styles.img} src={product.imageUrl} alt={product.name} />
                </div>

                <div className="col">
                    <p>Price: {product.price} </p>
                    <p>Description: {product.description}</p>
                    <div className="row">
                        <div className="col">
                            <Button />
                        </div>
                        <div className="col">
                            <br />
                            <BuyButton product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;