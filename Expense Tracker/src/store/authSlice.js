import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");
const initialAuthState = { token: initialToken, isLoggedIn: !!initialToken };

const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state, action) {
			state.token = action.payload;
			localStorage.setItem("token", action.payload);
			state.isLoggedIn = true;
		},
		logout(state) {
			state.token = null;
            localStorage.removeItem('token');
			state.isLoggedIn = false;
		},
	},
});


export const authActions = authSlice.actions;
export default authSlice.reducer;