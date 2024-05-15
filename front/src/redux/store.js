import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/appointmentReducer'

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})