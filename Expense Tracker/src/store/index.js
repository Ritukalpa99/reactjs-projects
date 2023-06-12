import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import expenseReducer from "./expenseSlice";
const store = configureStore({
	reducer: { auth: authReducer, exp: expenseReducer },
});

export default store;
