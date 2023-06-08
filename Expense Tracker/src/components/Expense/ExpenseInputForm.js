import { useRef } from "react";

const ExpenseInputForm = (props) => {

    const amountInputRef = useRef();
    const descInputRef = useRef();
    const categoryInputRef = useRef();

    const handleExpenseForm = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredDescription = descInputRef.current.value;
        const enteredCategory = categoryInputRef.current.value;

        const expenseObj = {
            amount : enteredAmount,
            desc : enteredDescription,
            cat : enteredCategory
        }

        props.onHandleSubmit(expenseObj);
    }

    return <form onSubmit={handleExpenseForm}>
        <label htmlFor="amount">Amount Spent</label>
        <input id="amount" type="number" ref={amountInputRef}/>
        <label htmlFor="desc">Description</label>
        <input id="desc" type="text" ref={descInputRef}/>
        <label htmlFor="cat">Category</label>
        <select id="cat" ref={categoryInputRef}>
            <option value="Transportation">Transportation</option>
            <option value="Food">Food</option>
            <option value="Bills">Bills</option>
            <option value="Entertainmnet">Entertainmnet</option>
        </select>
        <button type="submit">Add expense</button>
    </form>
}

export default ExpenseInputForm;