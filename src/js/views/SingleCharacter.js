import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CharacterDetailsCard } from "../component/characterDetailsCard.js";

export const SingleCharacter = () => {
	const { store, actions } = useContext(Context);

	// Creamos un espacio para guardar los params de la ruta creada.
	const params = useParams();
	console.log(params.theid)

	useEffect(() => {
		actions.getCharacterDetails(params.theid)
		// Envias a la función la parte que coge la url dinamica y se lo pasas al flux como parametro.

	}, [])

	return (
		<div className="jumbotron align-items-center">
			<CharacterDetailsCard />

			{/* <Link to="/">
				<span className="btn btn-primary btn-lg m-5" href="#" role="button">
					Back home
				</span>
			</Link> */}
		</div>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};
