// Search.tsx
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchTerm, setSearchResults } from "../../store/search.slice";
import { RootState } from "../../store/store";

import styles from "./Search.module.css";
import axios from "axios";

const Search: React.FC = () => {
    const [searchTermLocal, setSearchTermLocal] = useState<string>("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTermLocal(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
        navigate("/SearchPage");
    };

    useEffect(() => {
        // Функция для выполнения поиска при изменении searchTerm
        const fetchData = async () => {
            try {
                const apiUrl = `http://127.0.0.1:8000/api/products/?search=${searchTerm}`;
                const response = await axios.get(apiUrl);
                dispatch(setSearchResults(response.data.results));
            } catch (error) {
                console.error("Ошибка при выполнении поиска:", error);
            }
        };

        if (searchTerm.trim() !== "") {
            fetchData();
        } else {
            // Если поисковый запрос пуст, очистим результаты
            dispatch(setSearchResults([]));
        }
    }, [searchTerm, dispatch]);

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.search} type="text" placeholder="Search..." value={searchTermLocal} onChange={handleInputChange} />
            <button className={styles.button} type="submit">
                Search
            </button>
        </form>
    );
};

export default Search;
