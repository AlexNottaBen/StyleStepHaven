import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import axios from "axios";

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `http://127.0.0.1:8000/api/products/?search=${searchTerm}`;
                const response = await axios.get(apiUrl);
                setSearchResults(response.data.results);
            } catch (error) {
                console.error("Ошибка при выполнении поиска:", error);
            }
        };

        if (searchTerm.trim() !== "") {
            fetchData();
        } else {
            // Если поисковый запрос пуст, очистим результаты
            setSearchResults([]);
        }
    }, [searchTerm]);

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        // Переходим на страницу с результатами поиска
        navigate("/SearchPage", { state: { searchResults } });
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
