import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");
const initialAuthState = {
	token: initialToken,
	isLoggedIn: !!initialToken,
	id: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state, action) {
			const { token, id } = action.payload;
			state.token = token;
			state.id = id;
			localStorage.setItem("token", state.token);
			localStorage.setItem("user", state.id);
			state.isLoggedIn = true;
		},
		logout(state) {
			state.token = null;
			state.id = "";
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			state.isLoggedIn = false;
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
