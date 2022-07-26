const books = [
	{
		id: 1,
		isbn: 9789569646638,
		nombre: 'Fuego y Sangre (Cancion de Hielo y Fuego. Precuela #1)',
		autor: 'George R.R. Martin',
		tema: 'Fantasía',
		annio: 2018,
		categoria: 'fisico',
		imagen:
			'https://images.cdn1.buscalibre.com/fit-in/360x360/cf/13/cf135bc864182cf563a6e894ff3d1695.jpg',
		precio: 22310,
		stock: 5,
	},
	{
		id: 2,
		isbn: 9788490430101,
		nombre: 'La Marca de Atenea (Los Héroes del Olimpo 3)',
		autor: 'Rick Riordan',
		tema: 'Fantasía',
		annio: 2013,
		categoria: 'fisico',
		imagen:
			'https://images.cdn3.buscalibre.com/fit-in/360x360/38/9b/389bf3a4a9d46a402f0be0560b704895.jpg',
		precio: 20940,
		stock: 5,
	},
	{
		id: 3,
		isbn: 9786075276915,
		nombre: 'Las 48 Leyes del Poder',
		autor: 'Robert Greene',
		tema: 'Consejos',
		annio: 2019,
		categoria: 'fisico',
		imagen:
			'https://images.cdn3.buscalibre.com/fit-in/360x360/6f/41/6f416ad165a78898119774ccbc7fd136.jpg',
		precio: 26520,
		stock: 9,
	},
	{
		id: 4,
		isbn: 9789566063407,
		nombre: 'Horoscopo Chino 2022 (Ebook)',
		autor: 'Angeles Lasso',
		tema: 'Astrología',
		annio: 2021,
		categoria: 'ebook',
		imagen:
			'https://images.cdn2.buscalibre.com/fit-in/360x360/3a/36/3a366e29e8a7a6728c5f8033501df672.jpg',
		precio: 7500,
		stock: 2,
	},
	{
		id: 5,
		isbn: 9789504973270,
		nombre: 'A Fuego Lento - Edicion Cono sur (Ebook)',
		autor: 'Paula Hawkins',
		tema: 'Thriller',
		annio: 2021,
		categoria: 'ebook',
		imagen:
			'https://images.cdn1.buscalibre.com/fit-in/360x360/24/22/2422ff5ce4d22178c4b860c3e6714d36.jpg',
		precio: 6500,
		stock: 3,
	},
	{
		id: 6,
		isbn: 9788499926643,
		nombre: 'Homo Deus (Ebook)',
		autor: 'Yuval Noah Harari',
		tema: 'Debate',
		annio: 2016,
		categoria: 'ebook',
		imagen:
			'https://images.cdn3.buscalibre.com/fit-in/360x360/21/7d/217df914d30a75624201e6124aefa51e.jpg',
		precio: 5900,
		stock: 5,
	},
	{
		id: 7,
		isbn: 9788408170785,
		nombre: 'Pídeme lo que Quieras (Audiolibro)',
		autor: 'Megan Maxwell',
		tema: 'Fantasía',
		annio: 2017,
		categoria: 'audiolibro',
		imagen:
			'https://images.cdn1.buscalibre.com/fit-in/360x360/63/32/6332bea5bbc69e23ff2aed7603bd35d9.jpg',
		precio: 9500,
		stock: 8,
	},
	{
		id: 8,
		isbn: 9788408233183,
		nombre: '¿Quién eres? (Audiolibro)',
		autor: 'Megan Maxwell',
		tema: 'Fantasía',
		annio: 2020,
		categoria: 'audiolibro',
		imagen:
			'https://images.cdn1.buscalibre.com/fit-in/360x360/81/da/81da4a02febe2bc0843f2f3597f86547.jpg',
		precio: 5500,
		stock: 7,
	},
	{
		id: 9,
		isbn: 9786070763861,
		nombre: 'Los Amantes de Praga (Audiolibro)',
		autor: 'Alyson Richman',
		tema: 'Fantasía',
		annio: 2020,
		categoria: 'audiolibro',
		imagen:
			'https://images.cdn2.buscalibre.com/fit-in/360x360/00/41/004138a184eceb2efaf3f44ce3bdeec7.jpg',
		precio: 13110,
		stock: 6,
	},
];

export const getBooks = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(books);
		}, 2000);
	});
};
