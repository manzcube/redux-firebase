import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../config/firebase-config'
import authService from './authService';

const user = auth.currentUser

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}


// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        console.log('from the try block of register func in authSlice I show the response:', user)
        return await authService.register(user)
    } catch (err) {
        console.log('from the catch block of register func in authSlice I show the error message:', err.message)
        
        return thunkAPI.rejectWithValue(err.message)        
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
                console.log('from the fullfield addCase of authSlice I show you state:', state,'and action:', action)
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
    }
})

export const { reset } = authSlice.actions

export default authSlice.reducer