import ExpenseInputForm from "./ExpenseInputForm";
import DisplayExpense from "./DisplayExpense";
import { useEffect, useState } from "react";

const Expense = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
        fetchExpenses()
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
				setItems(loadedExpense);
			} else {
				throw new Error("Something went Wrong");
			}
		} catch (err) {
			alert(err.message);
		}
	};
	const addExpenseHandler = async (obj) => {
		setItems((prev) => [...prev, obj]);
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
			// console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<ExpenseInputForm onAddExpense={addExpenseHandler} />
			<DisplayExpense expenses={items} />
		</>
	);
};

export default Expense;
