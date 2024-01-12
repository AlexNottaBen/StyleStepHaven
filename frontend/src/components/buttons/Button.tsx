import React, { useState } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    id: string;
}

const Button: React.FC<ButtonProps> = ({ id }) => {
    const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

    const handleChange = (productId: string, size: string) => {
        setSelectedSizes((prevState) => ({
            ...prevState,
            [productId]: size,
        }));
    };

    return (
        <>
            <div className="col">
                <span className={styles.size}>Size</span>
                <br />
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    {[35, 36, 37, 38, 39, 40].map((size) => (
                        <React.Fragment key={size}>
                            <input type="radio" className="btn-check" name={`btnradio-${id}`} id={`radio${size}-${id}`} autoComplete="off" checked={selectedSizes[id] === `radio${size}`} onChange={() => handleChange(id, `radio${size}`)} />
                            <label className={`${styles.groupButton} btn btn-outline-primary`} htmlFor={`radio${size}-${id}`}>
                                {size}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Button;
