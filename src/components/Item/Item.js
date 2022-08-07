import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ book }) => {
	const precio = new Intl.NumberFormat('es-CL', {
		style: 'currency',
		currency: 'CLP',
	}).format(book.precio);
	return (
		<div className="Item">
			<div className="col s12">
				<div className="card">
					<div className="card-image__container">
						<div className="card-image">
							<img
								className="card-image-book"
								src={book.imagen}
								alt="Imagen del Libro"
							/>
						</div>
					</div>
					<div className="card-content">
						<span className="card-title">{book.nombre}</span>
						<div className="card-content__details">
							<p>isbn: {book.isbn}</p>
							<h6>{book.autor}</h6>
							<h5>{precio}</h5>
						</div>
					</div>
					<div className="card-action">
						<Link to={`/detail/${book.id}`} className="waves-light btn">
							Ver Detalle
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
