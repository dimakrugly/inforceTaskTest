import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {ProductType} from "../reducer/productSlice";

export const selectReducerProducts = createSelector(
    (state: RootState) => state.products,
    (productsState) => productsState
);


export const selectProducts = createSelector(selectReducerProducts, ({products}) => {
    return products
})

export const selectProductDetails = createSelector(selectReducerProducts, ({productDetails}) => {

    return productDetails as ProductType;
})