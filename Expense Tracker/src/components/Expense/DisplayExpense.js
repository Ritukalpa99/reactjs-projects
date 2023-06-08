
const DisplayExpense = (props) => {
    return (
        <ul>
            {props.expenses.map((expense) => {
                return <li key={expense.amount}>{expense.amount} - {expense.desc} - {expense.cat}</li>
            })}
        </ul>
    )
}

export default DisplayExpense;