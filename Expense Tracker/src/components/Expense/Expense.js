import ExpenseInputForm from "./ExpenseInputForm";
import DisplayExpense from "./DisplayExpense";
import { useEffect, useState } from "react";
import EditForm from "./EditForm";

const Expense = () => {
	const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editModal, setEditModal] = useState(false);

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

    const editExpenseHandler = () => {
        // alert('edit clicked')
        setEditModal(true)
    }

    const deleteExpenseHandler = async (id) => {
        // alert(id)
        try {
            await fetch(`https://expense-tracker-91438-default-rtdb.firebaseio.com/expense/${id}.json`,{
                method : "DELETE"
            })

            setItems((prev) => prev.filter((item) => item.id !== id));

        }catch(err) {
            console.log(err)
        }
    }
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
                setItems((prev) => [...prev, obj,{id :  data.name}]);
			console.log(data);
            alert(data.name)
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>  
            <button onClick={() => setShowForm((prev) => !prev)}>{!showForm ? "Add Expense" : "Hide Add Expense Form"}</button>
            {showForm && 
			<ExpenseInputForm onAddExpense={addExpenseHandler} />}
            {editModal && <EditForm onModalClose={() => setEditModal(false)}/>}
			<DisplayExpense expenses={items} onEditExpense={editExpenseHandler} onDeleteExpense={deleteExpenseHandler}/>
		</>
	);
};

export default Expense;
