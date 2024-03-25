// Profile.tsx
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import styles from "../profile/Profile.module.css";
import HeaderAuth from "../header/HeaderAuth"; // Используем HeaderAuth
import Header from "../header/Header";

const Profile: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
    const [userData, setUserData] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const base64Token = localStorage.getItem("access_token");

                if (base64Token) {
                    const tokenParts = base64Token.split(".");
                    const payload = tokenParts[1];
                    const decodedPayload = atob(payload);
                    const parsedPayload = JSON.parse(decodedPayload);

                    const userId = parsedPayload.user_id;

                    const response = await axios.get(`http://localhost:8000/api/user/${userId}`, {
                        headers: {
                            Authorization: `JWT ${base64Token}`,
                        },
                    });

                    setUserData(response.data);
                }
            } catch (error) {
                console.error("Ошибка при получении данных пользователя:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleSaveChanges = async () => {
        try {
            const base64Token = localStorage.getItem("access_token");
            if (base64Token) {
                await axios.put(`http://localhost:8000/api/user/${userData.id}/`, userData, {
                    headers: {
                        Authorization: `JWT ${base64Token}`,
                    },
                });
                alert("Changes saved successfully!");
            }
        } catch (error) {
            console.error("Ошибка при сохранении изменений:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevUserData: any) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
    };

    return (
        <div>
            {isLoggedIn ? <HeaderAuth isLoggedIn={isLoggedIn} /> : <Header isLoggedIn={isLoggedIn} />}
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
                    <TextField id="username" name="username" label="Username" variant="outlined" defaultValue={userData.username} onChange={handleChange} />
                    <TextField id="first_name" name="first_name" label="First Name" variant="outlined" defaultValue={userData.first_name} onChange={handleChange} />
                    <TextField id="last_name" name="last_name" label="Last Name" variant="outlined" defaultValue={userData.last_name} onChange={handleChange} />
                </Box>
            )}
            <button className={styles.customButton} onClick={handleSaveChanges}>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" className="icon">
                            <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"></path>
                        </svg>
                    </div>
                </div>
                <span>Save</span>
            </button>
            <button className={styles.logoutButton} onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Profile;
