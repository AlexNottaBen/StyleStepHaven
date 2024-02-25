// Pagination.tsx

import React from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i}>
                    <button onClick={() => onPageChange(i)} className={i === currentPage ? styles.currentPage : styles.pageNumber}>
                        {i}
                    </button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <div className={styles.paginationContainer}>
            <button onClick={handlePrevClick} disabled={currentPage === 1} className={styles.paginationButton}>
                Prev
            </button>
            <ul className={styles.pageNumbers}>{renderPageNumbers()}</ul>
            <button onClick={handleNextClick} disabled={currentPage === totalPages} className={styles.paginationButton}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
