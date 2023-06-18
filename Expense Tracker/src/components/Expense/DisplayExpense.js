import classes from "./DisplayExpense.module.css"

const DisplayExpense = (props) => {
	const handleDelete = (id) => {
		props.onDeleteExpense(id);
	};

	const handleEdit = (obj) => {
		props.onEditExpense(obj);
	};

	return (
		<ul className={classes.list}>
			{props.expenses.map((expense) => {
				return (
					<li key={expense.id}>
						{expense.amount} - {expense.desc} - {expense.cat}
						<button className={classes.edit}
							onClick={() =>
								handleEdit({
									id: expense.id,
									amount: expense.amount,
									desc: expense.desc,
									cat: expense.cat,
								})
							}
						>
							Edit
						</button>
						<button className={classes.delete} onClick={() => handleDelete(expense.id)}>
							Delete
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default DisplayExpense;
