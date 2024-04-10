import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import BuyButton from "../buttons/BuyButton";
import styles from "./Search.module.css";

const SearchPage = () => {
    const searchResults = useSelector((state: RootState) => state.search.searchResults);

    return (
        <div className={styles.search}>
            <h2>Determination results:</h2>
            <div className={styles.productContainer}>
                {Array.isArray(searchResults) && searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <form className={styles.productForm} key={result.id}>
                            <img className={styles.img} src={result.image} alt={result.name} />
                            <Link key={`link-${result.id}`} to={`/singleProduct/${result.id}`}>
                                <h3 className={styles.name}>{result.name}</h3>
                            </Link>
                            <p>Price: {result.price}</p>

                            <br />
                            <BuyButton product={result} />
                        </form>
                    ))
                ) : (
                    <div className={styles.notFoundContainer}>
                        <div className="row">
                            <h1 className={`${styles.nothing_found} col`}>Nothing found</h1>
                            <img src="search-not-found-1.png" alt="Nothing found-1" className="col-5" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
