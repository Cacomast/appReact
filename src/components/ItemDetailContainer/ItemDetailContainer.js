import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getBookId } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
	const [book, setBook] = useState();
	const { bookId } = useParams();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getBookId(bookId)
			.then((response) => {
				setBook(response);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [bookId]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="App-Body">
			<div className="TitleContainer-Body">
				<h2 className="center-align title-header">Detalle</h2>
				<ItemDetail {...book}></ItemDetail>
			</div>
		</div>
	);
};

export default ItemDetailContainer;
