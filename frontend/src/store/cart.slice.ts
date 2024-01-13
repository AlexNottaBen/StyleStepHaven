import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    name: string; // Добавляем поле с названием продукта
    price: number; // Добавляем поле с ценой продукта
    image_url: string; // Добавляем поле с URL изображения продукта
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
            const existed = state.items.find((i) => i.id === id);
            if (!existed) {
                state.items.push({ ...action.payload, count: 1 });
                return;
            }
            state.items.map((i) => {
                if (i.id === id) {
                    i.count += 1;
                }
                return i;
            });
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
    },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
