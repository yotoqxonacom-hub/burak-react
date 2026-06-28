
import { createSlice } from "@reduxjs/toolkit";

interface OrdersPageState { }

const initialState: OrdersPageState = {};

const ordersPageSlice = createSlice({
    name: "ordersPage",
    initialState,
    reducers: {},
});

export default ordersPageSlice.reducer;