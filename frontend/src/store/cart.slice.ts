import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    image_url: string;
    count: number;
    image: string;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CartItem>) => {
            const { id } = action.payload;
            const existingItemIndex = state.items.findIndex((item) => item.id === id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count += 1;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        decrease: (state, action: PayloadAction<number>) => {
            const itemToDecrease = state.items.find((item) => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.count > 1) {
                itemToDecrease.count -= 1;
            }
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const itemToIncrement = state.items.find((item) => item.id === action.payload);
            if (itemToIncrement) {
                itemToIncrement.count += 1;
            }
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
