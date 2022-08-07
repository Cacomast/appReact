import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getBooks, getBooksByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ title, subtitle }) => {
	const [books, setBooks] = useState([]);
	const { categoryId } = useParams();
	const dinamycText =
		categoryId === 'fisico'
			? 'Libros Físicos'
			: categoryId === 'ebook'
			? 'Ebooks'
			: 'AudioLibros';

	useEffect(() => {
		const nameFunction = categoryId ? getBooksByCategory : getBooks;
		nameFunction(categoryId)
			.then((books) => {
				setBooks(books);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [categoryId]);

	return (
		<div className="App-Body">
			<div className="TitleContainer-Body">
				<h2 className="center-align title-header">{title}</h2>
				<h4 className="center-align title-header">
					{categoryId ? dinamycText : subtitle}
				</h4>
				<ItemList books={books} />
			</div>
		</div>
	);
};

export default ItemListContainer;
