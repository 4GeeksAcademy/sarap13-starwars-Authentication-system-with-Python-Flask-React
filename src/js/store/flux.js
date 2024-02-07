import { element } from "prop-types";
import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Creamos espacios de memoria para almacenar a los characteres, y los detalles de cada character
			characters: [],
			characterDetails: {},
			planets: [],
			planetDetails: {},
			vehicles: [],
			vehicleDetails: {},
			favorites: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						// En el Store modificamos el valor de character a data.results(la respuesta)
						setStore({ characters: data.results });
					})
					.catch((error) => console.log(error));
			},
			// crear otro fetch para traer los detalles de los characters
			// creamos un param characterId para poder utilizarlo en la función. En single le estamos pasando como params.theid 
			// 		que es la variable url dinamica que cambiara dependiendo del num de id
			getCharacterDetails: (characterId) => {
				fetch(`https://www.swapi.tech/api/people/${characterId}`)
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						// en Store cambiamos valor characterDetails a lo que queramos acceder, en este caso las propiedades.
						// Utilizamos result? porque es un objeto muy grande y puede darnos error, si ponemos el interrogante antes de la propiedad del objeto a la que quereamos acceder no dará error. Hacemos esto cuando sabemos a ciencia cierta que esa propiedad existe.
						// creamos una constante para añadirle el id y poder pasarselo a la detaisCard, así podemos en el img poner
						// el id actual para añadir la foto.
						const characterDetailsWithId = {
							...data.result?.properties,
							characterId: characterId
						};
						setStore({ characterDetails: characterDetailsWithId });
					})
					.catch((error) => console.log(error));
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						// En el Store modificamos el valor de character a data.results(la respuesta)
						setStore({ planets: data.results });
					})
					.catch((error) => console.log(error));

			},

			getPlanetDetails: (planetId) => {
				fetch(`https://www.swapi.tech/api/planets/${planetId}`)
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						// en Store cambiamos valor characterDetails a lo que queramos acceder, en este caso las propiedades.
						// Utilizamos result? porque es un objeto muy grande y puede darnos error, si ponemos el interrogante antes de la propiedad del objeto a la que quereamos acceder no dará error. Hacemos esto cuando sabemos a ciencia cierta que esa propiedad existe.
						const planetDetailsWithId = {
							...data.result?.properties,
							planetId: planetId
						};
						setStore({ planetDetails: planetDetailsWithId });
					})
					.catch((error) => console.log(error));
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						// En el Store modificamos el valor de character a data.results(la respuesta)
						setStore({ vehicles: data.results });
					})
					.catch((error) => console.log(error));

			},

			getVehicleDetails: (vehicleId) => {
				fetch(`https://www.swapi.tech/api/vehicles/${vehicleId}`)
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log(data);
						// en Store cambiamos valor characterDetails a lo que queramos acceder, en este caso las propiedades.
						// Utilizamos result? porque es un objeto muy grande y puede darnos error, si ponemos el interrogante antes de la propiedad del objeto a la que quereamos acceder no dará error. Hacemos esto cuando sabemos a ciencia cierta que esa propiedad existe.
						setStore({ vehicleDetails: data.result?.properties });
					})
					.catch((error) => console.log(error));
			},

			addToFavorites: (favoriteName) => {
				// Al clicar al corazón se activará AddToFavorites.
				// Cuando le de al click el name se añadirá al array favorites. y se dibujará en el navbar
				// Setea el array favorites añadiendole el characterName de donde cliqueemos
				// Cambiamos el store el array, añadimos el characterName al array favorites si esta incluido ya no se añade mas veces.
				if (!getStore().favorites.includes(favoriteName)) {
					setStore({ favorites: [...getStore().favorites, favoriteName] });
				}
				// console.log(getStore().favorites);
			},

			deleteFromFavorites: (favoriteElementToDelete) => {
				// Queremos que cuando le de al icon trash del navbar se elimine de favoritos.
				// Se hace un filter en el favorites del store que coja el indice que crea un array con los elementos que no sean iguales a 
				// favoriteElementToDelete
				setStore({ favorites: getStore().favorites.filter((index) => index !== favoriteElementToDelete) }
					// Queremos que cuando eliminemos el elemento de fav el botón de la card se desclique 
				);

			},

			// Fetch hecho con async.
			// Algunas líneas pueden tardar mucho y el async lo utilizamos para que para el usuario no sea tan lento el proceso y se vayan ejecutando de mientras las cosas mas rápidas.
			// Usamos await para esperar por una línea de código
			// Los try catch siempre tiene que retornar algo aunque sea nada tiene que poner return 
			login: async (userName, password) => {
				try {
					// Guardame la información cuando la tengas en let response 
					let response = await fetch("https://scaling-umbrella-vxrv4qx9q75hp56j-3000.app.github.dev/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"name": userName,
							"password": password
						})
					})
					let data = await response.json()
					console.log(data);
					return true
				} catch (error) {
					console.log(error)
					return false
				}
				// Le devolvemos true para que si logeamos devuelva true y en el error false
				// Una vez iniciada sesion queremos que nos rediriga a /home y lo haremos en la view LoginForm
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
}
	export default getState;
