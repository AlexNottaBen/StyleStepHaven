import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Search.module.css";

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        console.log(`Вы ищете: ${searchTerm}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <input className={styles.search} type="text" placeholder="Search..." value={searchTerm} onChange={handleInputChange} />
            <button className={styles.button} type="submit">
                Search
            </button>
        </form>
    );
};

export default Search;
