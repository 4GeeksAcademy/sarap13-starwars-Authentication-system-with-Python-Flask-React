import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.js";


export const Home = () => {
	return (
		<div className="text-center mt-5">
			{/* <h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> */}
			<Card />
		</div>
	);
}