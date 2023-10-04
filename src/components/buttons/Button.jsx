import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ id }) => {
    const [selectedSizes, setSelectedSizes] = useState({});

    const handleChange = (productId, size) => {
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
                    <input type="radio" className="btn-check" name={`btnradio-${id}`} id={`radio1-${id}`} autoComplete="off" checked={selectedSizes[id] === "radio1"} onChange={() => handleChange(id, "radio1")} />
                    <label className={`${styles.groupButton} btn btn-outline-primary`} htmlFor={`radio1-${id}`}>
                        35
                    </label>

                    <input type="radio" className="btn-check" name={`btnradio-${id}`} id={`radio2-${id}`} autoComplete="off" checked={selectedSizes[id] === "radio2"} onChange={() => handleChange(id, "radio2")} />
                    <label className={`${styles.groupButton} btn btn-outline-primary`} htmlFor={`radio2-${id}`}>
                        36
                    </label>

                    <input type="radio" className="btn-check" name={`btnradio-${id}`} id={`radio3-${id}`} autoComplete="off" checked={selectedSizes[id] === "radio3"} onChange={() => handleChange(id, "radio3")} />
                    <label className={`${styles.groupButton} btn btn-outline-primary`} htmlFor={`radio3-${id}`}>
                        37
                    </label>

                    <input type="radio" className="btn-check" name={`btnradio-${id}`} id={`radio4-${id}`} autoComplete="off" checked={selectedSizes[id] === "radio4"} onChange={() => handleChange(id, "radio4")} />
                    <label className={`${styles.groupButton} btn btn-outline-primary`} htmlFor={`radio4-${id}`}>
                        38
                    </label>

                    <input type="radio" className="btn-check" name={`btnradio-${id}`} id={`radio5-${id}`} autoComplete="off" checked={selectedSizes[id] === "radio5"} onChange={() => handleChange(id, "radio5")} />
                    <label className={`${styles.groupButton} btn btn-outline-primary`} htmlFor={`radio5-${id}`}>
                        39
                    </label>

                    <input type="radio" className="btn-check" name={`btnradio-${id}`} id={`radio6-${id}`} autoComplete="off" checked={selectedSizes[id] === "radio6"} onChange={() => handleChange(id, "radio6")} />
                    <label className={`${styles.groupButton} btn btn-outline-primary`} htmlFor={`radio6-${id}`}>
                        40
                    </label>
                </div>
            </div>
        </>
    );
};

export default Button;
