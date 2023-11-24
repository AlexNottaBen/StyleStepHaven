import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart.slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
