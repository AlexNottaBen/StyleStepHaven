import Product from "../product/Product";

const Men: React.FC = () => {
    return (
        <div>
            <h2>Men's Products</h2>
            <Product filter="men" />
        </div>
    );
};

export default Men;
