import { useRef } from "react";
import Modal from "../layout/Modal/Modal";
import classes from "./EditForm.module.css";
const EditForm = (props) => {
	const amountRef = useRef();
	const descRef = useRef();
	const catRef = useRef();

	setTimeout(() => {
		amountRef.current.value = props.expenses.amount;
		descRef.current.value = props.expenses.desc;
		catRef.current.value = props.expenses.cat;
	}, 200);

	const closeModal = () => {
		props.onModalClose();
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		const enteredAmount = amountRef.current.value;
		const enteredDescription = descRef.current.value;
		const enteredCategory = catRef.current.value;

		const expenseObj = {
			amount: enteredAmount,
			desc: enteredDescription,
			cat: enteredCategory,
		};
        updateExpense(expenseObj);

        props.updateState({...expenseObj, id: props.expenses.id})
	};

	const updateExpense = async (obj) => {
		const id = props.expenses.id;
		try {
			const res = await fetch(
				`https://expense-tracker-91438-default-rtdb.firebaseio.com/expense/${id}.json`,
				{
					method: "PUT",
					body: JSON.stringify(obj),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (!res.ok) {
				throw new Error("Error updating data");
			}
            if(res.ok) {
                alert("Successfully Updated!")
            }
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<Modal>
			<span className={classes.cross} onClick={closeModal}>
				&times;
			</span>
			<form onSubmit={handleSubmit}>
				<div className={classes.form}>
					<label htmlFor="amount">Amount Spent</label>
					<input id="amount" type="number" ref={amountRef} />
					<label htmlFor="desc">Description</label>
					<input id="desc" type="text" ref={descRef} />
					<label htmlFor="cat">Category</label>
					<select id="cat" ref={catRef}>
						<option value="Transportation">Transportation</option>
						<option value="Food">Food</option>
						<option value="Bills">Bills</option>
						<option value="Entertainmnet">Entertainmnet</option>
					</select>
					<button type="submit">Update expense</button>
				</div>
			</form>
		</Modal>
	);
};

export default EditForm;
