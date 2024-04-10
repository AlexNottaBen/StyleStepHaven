import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart.slice";
import authSlice from "./auth.slice";
import searchReducer from "./search.slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        auth: authSlice,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
