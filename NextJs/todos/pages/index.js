import { useState } from "react";

const TodoApp = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const handleInputChange = (event) => {
		setNewTodo(event.target.value);
	};

	const handleAddTodo = () => {
		if (newTodo.trim() !== "") {
			setTodos([...todos, { text: newTodo, completed: false }]);
			setNewTodo("");
		}
	};

	const handleDeleteTodo = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	const handleToggleComplete = (index) => {
		const updatedTodos = [...todos];
		updatedTodos[index].completed = !updatedTodos[index].completed;
		setTodos(updatedTodos);
	};

	return (
		<div>
			<h1>Todo App</h1>
			<div>
				<input
					type="text"
					value={newTodo}
					onChange={handleInputChange}
					placeholder="Add a new Todo"
				/>
				<button onClick={handleAddTodo}>Add</button>
			</div>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						<span
							style={{
								textDecoration: todo.completed
									? "line-through"
									: "none",
                  cursor:"pointer"
							}}
							onClick={() => handleToggleComplete(index)}
						>
							{todo.text}
						</span>
						<button onClick={() => handleDeleteTodo(index)}>
							Delete
						</button>
						{!todo.completed && (
							<button onClick={() => handleToggleComplete(index)}>
								Mark as completed
							</button>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoApp;
