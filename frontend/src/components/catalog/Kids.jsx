import React from "react";
import Product from "../product/Product";

const Kids = () => {
    return (
        <div>
            <h3>Kids' Products</h3>
            <Product filter="kids" />
        </div>
    );
};

export default Kids;
