import { createSlice } from "@reduxjs/toolkit";

const initialMailState = {
	Mail: [],
};

const mailSlice = createSlice({
	name: "Mail",
	initialState : initialMailState,
	reducers: {
		onSendMail(state, action) {
			if (action.payload == null) {
			} else {
				state.Mail = action.payload;
			}
		},
	},
});

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
