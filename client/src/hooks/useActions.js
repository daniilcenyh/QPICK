import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"

import { actions as productActions } from '../store/productSlice/product.slice'
import { actions as busketActions } from "../store/busketSlice/busket.slice"
import { actions as favoriteActions } from "../store/favoriteSlice/favorite.slice"

const rootActions = {
    ...productActions,
    ...busketActions,
    ...favoriteActions,
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions,dispatch),[dispatch])
}