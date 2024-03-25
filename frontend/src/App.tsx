// App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import NotFound from "./components/NotFound";
import Header from "./components/header/Header";
import HeaderAuth from "./components/header/HeaderAuth"; // Импортируем HeaderAuth
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import Basket from "./components/basket/Basket";
import Footer from "./components/footer/Footer";
import Registration from "./components/login/Registration";
import SingleProduct from "./components/product/SingleProduct";
import Men from "./components/catalog/Men";
import Women from "./components/catalog/Women";
import Kids from "./components/catalog/Kids";
import SearchPage from "./components/searchPage/SearchPage";
import styles from "./App.module.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasAccessToken, setHasAccessToken] = useState(false);

    useEffect(() => {
        // Проверяем наличие access token в localStorage
        const accessToken = localStorage.getItem("access_token");
        setHasAccessToken(accessToken !== null);
    }, [isLoggedIn]); // Обновляем состояние hasAccessToken при изменении isLoggedIn

    return (
        <div className={styles.App}>
            <BrowserRouter>
                {/* Отображаем HeaderAuth, если нет access token, и Header, если есть access token */}
                {hasAccessToken ? <HeaderAuth isLoggedIn={isLoggedIn} /> : <Header isLoggedIn={isLoggedIn} />}
                <Routes>
                    <Route path="basket" element={<Basket />} />
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<Contacts />} />
                    {/* Передаем isLoggedIn в компонент Login */}
                    <Route path="login" element={<Login onLogin={() => setIsLoggedIn(true)} isLoggedIn={isLoggedIn} />} />
                    <Route path="profile" element={<Profile isLoggedIn={isLoggedIn} />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="singleProduct/:id" element={<SingleProduct />} />
                    <Route path="searchPage" element={<SearchPage />} />
                    <Route path="men" element={<Men />} />
                    <Route path="women" element={<Women />} />
                    <Route path="kids" element={<Kids />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
