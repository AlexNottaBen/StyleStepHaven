import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import styles from "../profile/Profile.module.css";

const Profile: React.FC = () => {
    const [userData, setUserData] = useState<any>(null); // Состояние для данных пользователя

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const base64Token = localStorage.getItem("access_token");

                if (base64Token) {
                    // Декодируем токен из формата base64
                    const tokenParts = base64Token.split(".");
                    const payload = tokenParts[1];
                    const decodedPayload = atob(payload);
                    const parsedPayload = JSON.parse(decodedPayload);

                    // Получаем ID пользователя из декодированного токена
                    const userId = parsedPayload.user_id;

                    // Отправляем запрос на сервер по ID пользователя
                    const response = await axios.get(`http://localhost:8000/api/user/${userId}`, {
                        headers: {
                            Authorization: `JWT ${base64Token}`,
                        },
                    });

                    // Обновляем состояние с данными пользователя
                    setUserData(response.data);
                }
            } catch (error) {
                console.error("Ошибка при получении данных пользователя:", error);
            }
        };

        fetchUserData(); // Вызываем функцию получения данных пользователя при монтировании компонента
    }, []);

    return (
        <div>
            <div className={styles.navigate}>
                <NavLink className={styles.navitem} to="/profile">
                    <h2>Profile</h2>
                </NavLink>
            </div>
            <h1>Profile</h1>
            {userData && (
                <Box
                    component="form"
                    sx={{
                        m: 1,
                        width: "25ch",
                        "& > :not(style)": {
                            margin: "7px 0",
                            "& .MuiInputBase-input": { color: "white" },
                            "& .MuiInputLabel-root": { color: "white !important" },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white !important",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "green !important",
                            },
                            "&:focus .MuiOutlinedInput-notchedOutline": {
                                borderColor: "green !important",
                            },
                            "& fieldset": { borderColor: "white !important" },
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="name" label="Name" variant="outlined" defaultValue={userData.username} />
                    <TextField id="firstname" label="First Name" variant="outlined" defaultValue={userData.first_name} />
                    <TextField id="lastname" label="Surname" variant="outlined" defaultValue={userData.last_name} />
                </Box>
            )}

            <button className={styles.customButton}>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" className="icon">
                            <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"></path>
                        </svg>
                    </div>
                </div>
                <span>Save</span>
            </button>
        </div>
    );
};

export default Profile;
