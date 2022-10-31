import { createSlice } from "@reduxjs/toolkit";

const generalSlice= createSlice({
    name:"rtk-query-learning",
    initialState:{
        items:[],
    },
    reducers:{

    },
})

export const generalAction= generalSlice.actions;
export default generalSlice;