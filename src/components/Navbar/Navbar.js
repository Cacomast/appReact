import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ logo }) => {
	const [isSidenavExpanded, setSidenavExpanded] = useState(false);
	const actionSidenav = () => {
		setSidenavExpanded(!isSidenavExpanded);
	};
	return (
		<header className="App-header">
			<nav>
				<div className="nav-wrapper Navbar">
					<Link to="/" className="brand-logo">
						<img src={logo} alt="logo" />
					</Link>
					<a
						href="#!"
						onClick={actionSidenav}
						className={
							isSidenavExpanded
								? 'display-none sidenav-trigger'
								: 'sidenav-trigger'
						}
						style={{ margin: 0 }}
					>
						<i className="material-icons">menu</i>
					</a>
					<a
						href="#!"
						onClick={actionSidenav}
						className={
							!isSidenavExpanded
								? 'display-none sidenav-trigger'
								: 'sidenav-trigger'
						}
						style={{ margin: 0 }}
					>
						<i className="material-icons">close</i>
					</a>
					<ul className="right hide-on-med-and-down">
						<li>
							<NavLink to="/category/fisico">Libros Físicos</NavLink>
						</li>
						<li>
							<NavLink to="/category/ebook">Ebooks</NavLink>
						</li>
						<li>
							<NavLink to="/category/audiolibro">AudioLibros</NavLink>
						</li>
						<li>
							<CartWidget />
						</li>
					</ul>
				</div>
			</nav>

			<ul
				className={isSidenavExpanded ? 'sidenav sidenav-expanded' : 'sidenav'}
			>
				<li>
					<NavLink to="/category/fisico">Libros Físicos</NavLink>
				</li>
				<li>
					<NavLink to="/category/ebook">Ebooks</NavLink>
				</li>
				<li>
					<NavLink to="/category/audiolibro">AudioLibros</NavLink>
				</li>
				<li>
					<CartWidget />
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
