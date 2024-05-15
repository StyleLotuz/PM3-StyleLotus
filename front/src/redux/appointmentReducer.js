import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    userAppointments: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload;
        },
        logoutUser: (state) => {
            state.userId = null;
            state.userAppointments = [];
        }
    }
});

export const { setUserId, setUserAppointments, logoutUser } = userSlice.actions;
export default userSlice.reducer;