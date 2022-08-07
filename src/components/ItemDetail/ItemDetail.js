import './ItemDetail.css';
import Counter from '../Counter/Counter';
import Loader from '../Loader/Loader';

const ItemDetail = ({
	id,
	nombre,
	isbn,
	autor,
	tema,
	annio,
	categoria,
	imagen,
	precio,
	stock,
}) => {
	const formatPrecio = new Intl.NumberFormat('es-CL', {
		style: 'currency',
		currency: 'CLP',
	}).format(precio);

	return (
		<div className="ItemDetail">
			<div className="col s12">
				<div className="card">
					<div className="card-image__container">
						<div className="card-image">
							<img
								className="card-image-book"
								src={imagen}
								alt="Imagen del Libro"
							/>
						</div>
					</div>
					<div className="card-content">
						<span className="card-title">{nombre}</span>
						<div className="card-content__details-container">
							<div className="details__list text-bold">
								<p>isbn</p>
								<p>Autor</p>
								<p>Tema</p>
								<p>Año</p>
								<p>Categoría</p>
							</div>
							<div className="details__list">
								<p>: {isbn}</p>
								<p>: {autor}</p>
								<p>: {tema}</p>
								<p>: {annio}</p>
								<p>: {categoria}</p>
							</div>
						</div>
						<div className="card-content__details">
							<Counter stock={stock} />
							<h5>{formatPrecio}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
