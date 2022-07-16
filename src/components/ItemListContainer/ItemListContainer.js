import './ItemListContainer.css';

const ItemListContainer = ({ title, subtitle }) => {
	return (
		<div className="ItemListContainer-Body">
			<h2 className="center-align title-header">{title}</h2>
			<h4 className="center-align title-header">{subtitle}</h4>
		</div>
	);
};

export default ItemListContainer;
