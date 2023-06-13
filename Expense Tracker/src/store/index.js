import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import expenseReducer from "./expenseSlice";
import themeReduce from "./themeSlice"
const store = configureStore({
	reducer: { auth: authReducer, exp: expenseReducer, theme : themeReduce },
});

export default store;
