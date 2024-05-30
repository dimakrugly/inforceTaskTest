import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const selectReducerComments = createSelector(
    (state: RootState) => state.comments,
    (productsState) => productsState.comments
);


export const selectComments = createSelector(selectReducerComments, (comments) => {
    return comments
})
