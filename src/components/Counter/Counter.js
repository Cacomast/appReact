import './Counter.css';

import { useState } from 'react';

const Counter = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(1);

	const increment = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	return (
		<div className="Counter">
			<h1>{count}</h1>
			<div className="Counter-buttons">
				<button className="waves-light red btn" onClick={decrement}>
					Decrementar
				</button>
				<button className="waves-light btn" onClick={increment}>
					Incrementar
				</button>
				<button className="waves-light btn" onClick={() => onAdd(count)}>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default Counter;
