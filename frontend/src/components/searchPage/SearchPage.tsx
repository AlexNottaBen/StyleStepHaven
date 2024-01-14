import { useLocation, Link } from "react-router-dom";
import Button from "../buttons/Button";
import BuyButton from "../buttons/BuyButton";
import styles from "./Search.module.css";

const SearchPage = () => {
    const location = useLocation();
    const searchResults = location.state && location.state.searchResults;

    return (
        <div>
            <h2>Результаты поиска:</h2>
            {Array.isArray(searchResults) && searchResults.length > 0 ? (
                searchResults.map((result) => (
                    <form className={styles.productForm} key={result.id}>
                        <img className={styles.img} src={result.image} alt={result.name} />
                        <Link key={`link-${result.id}`} to={`/singleProduct/${result.id}`}>
                            <h3 className={styles.name}>{result.name}</h3>
                        </Link>
                        <p>Price: {result.price}</p>

                        <Button id={result.id.toString()} />
                        <br />
                        <BuyButton product={result} />
                    </form>
                ))
            ) : (
                <p>Ничего не найдено</p>
            )}
        </div>
    );
};

export default SearchPage;
