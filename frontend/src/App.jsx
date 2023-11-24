import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import NotFound from "./components/NotFound";
import Header from "./components/header/Header.jsx";
import Login from "./components/login/Login";
import Basket from "./components/basket/Basket";
import Footer from "./components/footer/Footer";
import Registration from "./components/login/Registration";
import SingleProduct from "./components/product/SingleProduct";
import styles from "./App.module.css";
import products from "./data/products";
<<<<<<< HEAD
import Men from "./components/catalog/Men.jsx";
import Women from "./components/catalog/Women.jsx";
import Kids from "./components/catalog/Kids.jsx";
=======
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="basket" element={<Basket />} />
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="singleProduct/:id" element={<SingleProduct />} />
<<<<<<< HEAD
                    <Route path="men" element={<Men />} />
                    <Route path="women" element={<Women />} />
                    <Route path="kids" element={<Kids />} />
=======
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
