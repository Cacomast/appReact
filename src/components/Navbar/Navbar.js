import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react';

const Navbar = ({ logo }) => {
	const [isSidenavExpanded, setSidenavExpanded] = useState(false);
	const actionSidenav = () => {
		setSidenavExpanded(!isSidenavExpanded);
	};
	return (
		<div>
			<nav>
				<div className="nav-wrapper Navbar">
					<a href="#!" className="brand-logo">
						<img src={logo} alt="logo" />
					</a>
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
							<button>Libros Físicos</button>
						</li>
						<li>
							<button>Ebooks</button>
						</li>
						<li>
							<button>AudioLibros</button>
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
					<button>Libros Físicos</button>
				</li>
				<li>
					<button>Ebooks</button>
				</li>
				<li>
					<button>AudioLibros</button>
				</li>
				<li>
					<CartWidget />
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
