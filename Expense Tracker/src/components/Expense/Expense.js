import ExpenseInputForm from "./ExpenseInputForm";
import DisplayExpense from "./DisplayExpense";
import { useState } from "react";

const Expense = () => {
    const [items,setItems] = useState([]);
    const getExpenses = (obj) => {
        setItems((prev) => [...prev,obj])
    }
    return <>
    <ExpenseInputForm onHandleSubmit={getExpenses}/>
    <DisplayExpense expenses={items}/>
    </>
}

export default Expense;