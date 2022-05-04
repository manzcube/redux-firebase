import { combineReducers } from 'redux';

// Importing all reducers
import authReducer from './services/reducers/authSlice';

const rootReducer = combineReducers({
    // Define the top-level state fields names
    auth: authReducer
})

export default rootReducer;