import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");
const authInitialState = {
	token: initialToken,
	isLoggedIn: !!initialToken,
};

const authSlice = createSlice({
	name: "auth",
	initialState: authInitialState,
	reducers: {
		login(state, action) {
			state.token = action.payload;
			localStorage.setItem("token", state.token);
			state.isLoggedIn = true;
		},
		logout(state) {
			state.token = null;
			localStorage.removeItem("token");
			state.isLoggedIn = false;
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
