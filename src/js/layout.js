import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { LoginForm } from "./views/LoginForm";
import { SingleCharacter } from "./views/SingleCharacter";
import { SinglePlanet } from "./views/SinglePlanet";
import { SingleVehicle } from "./views/SingleVehicle";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
// import Characters from "./views/characters";
import CharacterCard from "./component/characterCard";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/login" element={<LoginForm />} />
						<Route path="/characters/:theid" element={<SingleCharacter />} />
						<Route path="/planets/:theid" element={<SinglePlanet />} />
						<Route path="/vehicles/:theid" element={<SingleVehicle />} />
						<Route path="*" element={<h1>Not found!</h1>} />

					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
