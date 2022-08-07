import './App.css';
import 'materialize-css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar logo="img/logo.png" />
				<Routes>
					<Route
						path="/"
						element={
							<ItemListContainer
								title="Lista de Libros"
								subtitle="¡Disfruta de nuestra tienda de libros!"
							/>
						}
					/>
					<Route
						path="/category/:categoryId"
						element={<ItemListContainer title="Listado filtrado" />}
					/>
					<Route path="/detail/:bookId" element={<ItemDetailContainer />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
