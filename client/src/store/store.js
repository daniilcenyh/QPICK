import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as productReducer, productsFetch } from "./productSlice/product.slice"
import { reducer as busketReducer,getTotals } from "./busketSlice/busket.slice"
import { reducer as favoriteReducer } from "./favoriteSlice/favorite.slice";
import { productsAPI } from "./productSlice/productsAPI";


const reducers = combineReducers({
    products : productReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    busket: busketReducer,
    favorites: favoriteReducer,
})


export const store = configureStore({
    reducer: reducers,
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsAPI.middleware);
    }
})

store.dispatch(productsFetch())
store.dispatch(getTotals())