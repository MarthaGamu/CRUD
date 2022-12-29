import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List';

function App() {
	const LOCAL_STORAGE_KEY = 'TODO';
	const [todo, setTodo] = useState({ text: '', status: false });
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
	);

	const handleChange = (e) => {
		setTodo({ text: e.target.value, status: false, id: Math.random() });
	};

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (todo.text === '') return;
		//todos.push(todo);
		setTodos([...todos, todo]);
		setTodo({ ...todo, text: '' });
	};

	const statusHandler = (id) => {
		const updated = todos.map((obj) => {
			if (obj.id === id) {
				return { ...obj, status: true };
			}
			return obj;
		});

		setTodos(updated);
	};

	const deleteHandler = (id) => {
		const filtered = todos.filter((item) => item.id !== id);
		setTodos(filtered);
	};
	return (
		<div className='App'>
			<div className='container'>
				{' '}
				<div className='heading'>
					{' '}
					<h1>TODO LIST APPLICATION</h1>
				</div>
				<form onSubmit={submitHandler}>
					<label className='label'>Todo input field</label>
					<br />
					<input
						type='text'
						value={todo.text}
						name='todo'
						onChange={handleChange}
						placeholder='Enter a todo item...'
					/>
					<button type='submit' onClick={submitHandler} className='submitBtn'>
						Add todo
					</button>
				</form>
				<List
					todos={todos}
					statusHandler={statusHandler}
					deleteHandler={deleteHandler}
				/>
			</div>
		</div>
	);
}

export default App;
