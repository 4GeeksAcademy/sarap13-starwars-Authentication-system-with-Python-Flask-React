
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

export const Navbar = () => {

	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context)

	// Variable creada para que aparezca el numero de favoritos al lado de Favorites en el boton dropdown. Se le pasa el valor en el return.
	let favoritesCounter = store.favorites.length;

	/*
	Función 
	If  3 veces con planetas y vehiculos (store.characters.find (buscar que elname es igual al item de favoritos))
	 convocar ala store.personajes . y todo 
	 return string que contiene 
	 store.characters.find => comprobar que este en el store  
	 Map = > si el elem.name = */

	const getUrl = (favorite) => {
		store.characters.map((item) => {
			if (item.name === favorite) {
				console.log("hola");
				return `/characters/${item.uid}`
			}
		})

		store.planets.map((item) => {
			if (item.name === favorite) {
				console.log("adioa");
				return `/planets/${item.uid}`
			}
		})

		store.vehicles.map((item) => {
			if (item.name === favorite) {
				console.log("chao");
				return `/vehicles/${item.uid}`
			}
		})
		console.log("pepino");
		return null;
	}

	return (
		<div className="container-fluid p-0 mt-3">
			<nav className="navbar mb-5 ">
				<div className="d-flex flex-row">
					<Link className="" to="/">
						<img className="card-img-top mx-5 w-25 h-auto starwars-button-navbar" src="https://assets.stickpng.com/images/602176580ad3230004b93c22.png" />
					</Link>
					<div className="mx-5 d-flex align-items-center">
						<Link to="/demo">
							<div className="btn-group align-items-center" role="group">
								<button type="button" className="btn btn-light rounded-pill mx-3 d-flex flex-row align-items-center box-shadow" aria-expanded="false">
									<div className="d-flex flex-row align-items-center justify-content-between">
										<Link className="mx-1 mb-0 fs-5 text-decoration-none text-black" to={`/login`}>
										LOGIN
										</Link>
									</div>
								</button>
								<button id="btnGroupDrop1" type="button" className="btn btn-light rounded-pill dropdown-toggle mx-3 d-flex flex-row align-items-center box-shadow" data-bs-toggle="dropdown" aria-expanded="false">
									<div className="d-flex flex-row align-items-center justify-content-between">
										<p className="mx-1 mb-0 fs-5">FAVORITES</p>
										<p className=" bg-dark rounded-circle px-1 mb-0 text-light">{favoritesCounter}</p>
									</div>
								</button>
								<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="btnGroupDrop1">
									{store.favorites.map((item, index) => (
										// <div  className="  ">
										<li key={index}> <Link to={() => getUrl(item)} className="dropdown-item d-flex flex-row align-items-center justify-content-between">
											<p className="text-reset text-decoration-none align-self-center mb-0">{item}</p>
											<button className="btn" onClick={() => actions.deleteFromFavorites(item)}>
												<i className="fa fa-trash"></i>
											</button></Link>
										</li>
										// /* // </div> */ }
									))}
								</ul>
							</div>
						</Link>
					</div>
				</div>

			</nav >
		</div >
	);
};
