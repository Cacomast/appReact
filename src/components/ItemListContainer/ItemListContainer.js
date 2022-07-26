import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getBooks } from '../../asyncMock';

const ItemListContainer = ({ title, subtitle }) => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks().then((books) => {
			setBooks(books);
		});
	}, []);

	return (
		<div className="ItemListContainer-Body">
			<h2 className="center-align title-header">{title}</h2>
			<h4 className="center-align title-header">{subtitle}</h4>
			<ItemList books={books} />
		</div>
	);
};

export default ItemListContainer;
