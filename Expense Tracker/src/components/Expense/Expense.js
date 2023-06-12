import ExpenseInputForm from "./ExpenseInputForm";
import DisplayExpense from "./DisplayExpense";
import { useEffect, useState } from "react";
import EditForm from "./EditForm";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/expenseSlice";

const Expense = () => {
	const expItem = useSelector((state) => state.exp.expenseItems);
	const totalAmount = useSelector((state) => state.exp.amount);
	const dispatch = useDispatch();
	
	const [items, setItems] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [editData, setEditData] = useState();
	useEffect(() => {
		fetchExpenses();
		// console.log(expItem)
	}, []);

	const fetchExpenses = async () => {
		try {
			const res = await fetch(
				`https://expense-tracker-91438-default-rtdb.firebaseio.com/expense.json`
			);

			if (res.ok) {
				const data = await res.json();

				const loadedExpense = [];
				for (const key in data) {
					loadedExpense.push({
						id: key,
						amount: data[key].amount,
						desc: data[key].desc,
						cat: data[key].cat,
					});
				}
				// setItems(loadedExpense);
				dispatch(expenseActions.getExpense(loadedExpense));
			} else {
				throw new Error("Something went Wrong");
			}
		} catch (err) {
			// alert(err.message);
		}
	};

	const editExpenseHandler = (obj) => {
		// alert('edit clicked')
		setEditModal(true);
		setEditData(obj);
	};

	const updateStateHandler = (obj) => {
		// setItems((prevItems) => {
		// 	return prevItems.map((item) => {
		// 		if (item.id === obj.id) {
		// 			return { ...obj };
		// 		}

		// 		return item;
		// 	});
		// });
		dispatch(expenseActions.updateExpense(obj));
	};
	const deleteExpenseHandler = async (id) => {
		// alert(id)
		try {
			await fetch(
				`https://expense-tracker-91438-default-rtdb.firebaseio.com/expense/${id}.json`,
				{
					method: "DELETE",
				}
			);

			// setItems((prev) => prev.filter((item) => item.id !== id));
			dispatch(expenseActions.deleteExpense(id));
		} catch (err) {
			console.log(err);
		}
	};
	const addExpenseHandler = async (obj) => {
		try {
			const res = await fetch(
				`https://expense-tracker-91438-default-rtdb.firebaseio.com/expense.json`,
				{
					method: "POST",
					body: JSON.stringify(obj),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await res.json();
			const expId = data.name;
			// setItems((prev) => [...prev, { ...obj, id: data.name }]);
			dispatch(expenseActions.addExpense({ obj, expId }));
			// console.log(data);
			// alert(data.name)
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<button onClick={() => setShowForm((prev) => !prev)}>
				{!showForm ? "Add Expense" : "Hide Add Expense Form"}
			</button>
			{showForm && <ExpenseInputForm onAddExpense={addExpenseHandler} />}
			{editModal && (
				<EditForm
					updateState={updateStateHandler}
					expenses={editData}
					onModalClose={() => setEditModal(false)}
				/>
			)}
			<DisplayExpense
				expenses={expItem}
				onEditExpense={editExpenseHandler}
				onDeleteExpense={deleteExpenseHandler}
			/>
		</>
	);
};

export default Expense;
