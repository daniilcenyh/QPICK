import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    items: [],
    status: null,
    error: null
}

const API_URL = "http://localhost:5000/products"

export const productsFetch = createAsyncThunk(
    "products/productsFetch",

    async (id = null, { rejectWithValue }) => {
        try { 
            const response = await axios.get(API_URL);
            return response?.data
        }catch(error) {
            console.error(error.name);
            return rejectWithValue(error.response.data)
        }
        
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(productsFetch.rejected, (state,action) => {
                state.status = "rejected";
                state.error = action.payload;
            })
    }
})

export const { actions, reducer } = productsSlice;