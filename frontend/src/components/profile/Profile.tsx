import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../profile/Profile.module.css";

const Profile: React.FC = () => {
    return (
        <div>
            <div className={styles.navigate}>
                <NavLink className={styles.navitem} to="/profile">
                    <h2>Profile</h2>
                </NavLink>
                <NavLink className={styles.navitem} to="/orders">
                    <h2>Orders</h2>
                </NavLink>
            </div>

            <h1>Profile</h1>

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
                <TextField id="name" label="Name" variant="outlined" />
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="password" label="Password" variant="outlined" />
            </Box>
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
