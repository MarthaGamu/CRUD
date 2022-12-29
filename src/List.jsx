import React from 'react';

export default function List({ todos, statusHandler, deleteHandler }) {
	const listing = todos.map((item) => {
		return (
			<ul key={item.id}>
				<li className='listWrapper'>
					<div className='content'> {item.text}</div>
					<div className='btns'>
						<button
							onClick={() => statusHandler(item.id)}
							className='submitBtn'
						>
							{item.status ? 'done' : 'inprogress'}
						</button>
						<button
							onClick={() => {
								deleteHandler(item.id);
							}}
							className='submitBtn'
						>
							Delete
						</button>
					</div>
				</li>
			</ul>
		);
	});
	return <div className='listContainer'>{listing}</div>;
}
