import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ books }) => {
	return (
		<div className="ItemList">
			{books.map((book) => (
				<Item key={book.id} book={book} />
			))}
		</div>
	);
};

export default ItemList;
