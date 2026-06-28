import { createSlice } from "@reduxjs/toolkit";

interface HomePageState { }

const initialState: HomePageState = {};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {},
});

export default homePageSlice.reducer;