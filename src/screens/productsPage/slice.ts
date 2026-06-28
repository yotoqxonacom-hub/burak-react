import { createSlice } from "@reduxjs/toolkit";

interface ProductsPageState { }

const initialState: ProductsPageState = {};

const productsPageSlice = createSlice({
    name: "productsPage",
    initialState,
    reducers: {},
});

export default productsPageSlice.reducer;