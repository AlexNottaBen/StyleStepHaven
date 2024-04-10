// searchSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: string;
    image: string;
    name: string;
    price: number;
}

interface SearchState {
    searchTerm: string;
    searchResults: Product[]; // Здесь измененный тип данных
}

const initialState: SearchState = {
    searchTerm: "",
    searchResults: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        setSearchResults(state, action: PayloadAction<Product[]>) {
            // Также изменен тип здесь
            state.searchResults = action.payload;
        },
    },
});

export const { setSearchTerm, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
