import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name: "sample",
    initialState: {
        login: JSON.parse(localStorage.getItem("login")) || false,
        files: [],
        search: "",
        users: JSON.parse(localStorage.getItem("users")) || [],
        comment: []
    },
    reducers: {
        login: (state, action) => {
            state.login = action.payload;
        },
        files: (state, action) => {
            state.files = action.payload;
        },
        search: (state, action) => {
            state.search = action.payload;
        },
        users: (state, action) => {
            state.users = action.payload;
        },
        comment: (state, action) => {
            state.comment = action.payload;
        }
    }
});

export const { login, files, search, users, comment } = dataSlice.actions;
export default dataSlice.reducer;