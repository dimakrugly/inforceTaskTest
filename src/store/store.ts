import {configureStore} from '@reduxjs/toolkit';
import productReducer from './reducer/productSlice';
import commentReducer from './reducer/commentSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        comments: commentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
