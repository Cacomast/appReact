import './App.css';
import 'materialize-css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar logo="img/logo.png" />
			</header>
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
