import './App.css';
import 'materialize-css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
	const handleOnAdd = (quantity) => {
		console.log(`la cantidad agregada es: ${quantity}`);
	};

	return (
		<div className="App">
			<header className="App-header">
				<Navbar logo="img/logo.png" />
			</header>
			<Counter stock={10} initial={1} onAdd={handleOnAdd} />
			<div className="App-Body">
				<ItemListContainer
					title="Lista de Libros"
					subtitle="¡Disfruta de nuestra tienda de libros!"
				/>
			</div>
		</div>
	);
}

export default App;
