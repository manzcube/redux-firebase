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
        return await authService.register(user)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)        
    }
})

// Sing In user
export const signin = createAsyncThunk('auth/singin', async (user, thunkAPI) => {
    try {
        return await authService.signin(user)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)        
    }
})

// Sing Out user
export const signout = createAsyncThunk('auth/signout', async () => {
    try {
        return await authService.signout(user)
    } catch (err) {
        return err.message        
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
                state.user = action.meta.arg.name
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(signin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.meta.arg.name
            })
            .addCase(signin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(signout.pending, (state) => {
                state.isLoading = true
            })
            .addCase(signout.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = null
            })
            .addCase(signout.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = authSlice.actions

export default authSlice.reducer