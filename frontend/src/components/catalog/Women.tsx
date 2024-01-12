import React from "react";
import Product from "../product/Product";

const Women: React.FC = () => {
    return (
        <div>
            <h2>Women's Products</h2>
            <Product filter="women" />
        </div>
    );
};

export default Women;
