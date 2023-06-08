const DisplayExpense = (props) => {

    const handleDelete = (id) => {
        props.onDeleteExpense(id);
    }

    const handleEdit = (id) => {
        props.onEditExpense(id);
    }

	return (
		<ul>
			{props.expenses.map((expense) => {
				return (
					<li key={expense.id}>
						{expense.amount} - {expense.desc} - {expense.cat} -{" "}
						{expense.id}
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={() => handleDelete(expense.id)}>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};

export default DisplayExpense;
