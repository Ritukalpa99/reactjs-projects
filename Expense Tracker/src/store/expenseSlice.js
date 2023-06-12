import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
	amount: 0,
	expenseItems: [],
};
const expenseSlice = createSlice({
	name: "exp",
	initialState: initialExpenseState,
	reducers: {
		addExpense(state, action) {
			const { obj, expId } = action.payload;
			const newItem = { ...obj, id: expId };
			state.expenseItems.push(newItem);
			state.amount = state.expenseItems.reduce(
				(total, item) => total + +item.amount,
				0
			);
		},
		deleteExpense(state, action) {
			const itemId = action.payload;
			state.expenseItems = state.expenseItems.filter(
				(item) => item.id !== itemId
			);
			state.amount = state.expenseItems.reduce(
				(total, item) => total + +item.amount,
				0
			);
		},
		getExpense(state, action) {
			state.expenseItems = action.payload;
			state.amount = state.expenseItems.reduce(
				(total, item) => total + +item.amount,
				0
			);
		},
		updateExpense(state, action) {
			const updatedItem = action.payload;
			state.expenseItems = state.expenseItems.map((item) => {
				if (item.id === updatedItem.id) {
					return { ...updatedItem };
				}
				return item;
			});
			state.amount = state.expenseItems.reduce(
				(total, item) => total + +item.amount,
				0
			);
		},
	},
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;

// {
// 	addExpnese(state, action) {
// 		const { obj, expId } = action.payload;
// 		const newItem = { ...obj, id: expId };
// 		state.amount = 0;
// 		return [...state.expenseItems, newItem];
// 	},
// 	deleteExpense(state, action) {
// 		const itemId = action.payload;
// 		state.amount = 0;
// 		return state.expenseItems.filter((item) => item.id !== itemId);
// 	},
// 	getExpense(state, action) {
// 		state.amount = 0;
// 		state.expenseItems = action.payload
// 		return state;
// 	},
// 	updateExpense(state, action) {
// 		const updatedItem = action.payload;
// 		state.amount = 0;
// 		return state.expenseItems.map((item) => {
// 			if (item.id === updatedItem.id) {
// 				return { ...updatedItem };
// 			}

// 			return item;
// 		});
// 	},
// },
