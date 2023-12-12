import React from "react";
import Product from "../product/Product";

const Men = () => {
    return (
        <div>
            <h2>Men's Products</h2>
            <Product filter="men" />
        </div>
    );
};

export default Men;
