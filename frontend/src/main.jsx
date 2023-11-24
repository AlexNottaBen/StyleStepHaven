import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/header/Header.jsx";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
=======

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
>>>>>>> 7f2da322bd25957f53d2c3ef799950f510ec7aef
    </React.StrictMode>
);
