import { createSlice } from "@reduxjs/toolkit"; 

const initialState =  localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [];

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers : {
        addToFavorite: (state, { payload : product }) => {
            state.push(product);
            localStorage.setItem("favorite", JSON.stringify(state))
        },
        removeFromFavorite: (state, { payload: product }) => {
            const itemIndex = state.findIndex((event) => event.id === product.id)

            if (itemIndex !== -1) {
                state.splice(itemIndex,1)
                localStorage.setItem("favorite", JSON.stringify(state))
            }
            
        }
    }
})

export const { actions, reducer } = favoriteSlice;