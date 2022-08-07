import './Loader.css';

const Loader = () => {
	console.log('status');
	return (
		<div className="App-Body">
			<div className="container-loader">
				<div className="preloader-wrapper big active">
					<div className="spinner-layer spinner-green-only">
						<div className="circle-clipper left">
							<div className="circle"></div>
						</div>
						<div className="gap-patch">
							<div className="circle"></div>
						</div>
						<div className="circle-clipper right">
							<div className="circle"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
