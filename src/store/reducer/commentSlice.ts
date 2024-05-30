import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

export interface CommentType {
    id: number;
    productId: number;
    description: string;
    date: string;
}

interface CommentState {
    comments: CommentType[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CommentState = {
    comments: [],
    status: 'idle',
};

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
    const response = await axios.get('http://localhost:5001/comments');
    return response.data;
});

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<CommentType>) => {
            state.comments.push(action.payload);
        },
        removeComment: (state, action: PayloadAction<number>) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
                state.status = 'idle';
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const {addComment, removeComment} = commentSlice.actions;
export default commentSlice.reducer;
