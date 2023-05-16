import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./DataSlice";


export const Stores = configureStore({
    reducer: {
        data: dataSlice
    }
});