import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

export interface ProductType {
    id: number;
    imageUrl: string;
    name: string;
    count: number;
    size: { width: number; height: number };
    weight: string;
    comments: number[];
}

interface ProductState {
    products: ProductType[];
    productDetails: ProductType | null,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductState = {
    products: [],
    productDetails: null,
    status: 'idle',
};

const API_URL = 'http://localhost:5001/products';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (newProduct: ProductType) => {
    const response = await axios.post(API_URL, newProduct);
    return response.data;
});

export const removeProduct = createAsyncThunk('products/removeProduct', async (productId: number) => {
    await axios.delete(`${API_URL}/${productId}`);
    return productId;
});

export const updateProduct = createAsyncThunk('products/updateProduct', async (updatedProduct: ProductType) => {
    const response = await axios.put(`${API_URL}/${updatedProduct.id}`, updatedProduct);
    return response.data;
});


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductDetails(state, action: PayloadAction<number>) {
            const product = state.products.find(product => product.id === action.payload);

            if (product) {
                state.productDetails = product;
            }
        },
        updateProductDetails(state, action: PayloadAction<ProductType>) {
            state.productDetails = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(addProduct.fulfilled, (state, action: PayloadAction<ProductType>) => {
                state.products.push(action.payload);
            })
            .addCase(removeProduct.fulfilled, (state, action: PayloadAction<number>) => {
                state.products = state.products.filter(product => product.id !== action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action: PayloadAction<ProductType>) => {
                const index = state.products.findIndex(product => product.id === action.payload.id);
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            });
    },
});

export default productSlice.reducer;

export const {setProductDetails, updateProductDetails} = productSlice.actions;
