import './Item.css';

const Item = ({ book }) => {
	return (
		<>
			<div className="col s12">
				<div className="card">
					<div className="card-image">
						<img
							className="card-image-book"
							src={book.imagen}
							alt="Imagen del Libro"
						/>
					</div>
					<div className="card-content">
						<span className="card-title">{book.nombre}</span>
						<div className="card-content__details">
							<p>isbn: {book.isbn}</p>
							<h6>{book.autor}</h6>
							<h5>$ {book.precio}</h5>
						</div>
					</div>
					<div className="card-action">
						<button className="waves-light btn">Detalle</button>
						<button className="waves-light btn">Agregar al carrito</button>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							Card Title<i className="material-icons right">close</i>
						</span>
						<p>
							Here is some more information about this product that is only
							revealed once clicked on.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Item;
