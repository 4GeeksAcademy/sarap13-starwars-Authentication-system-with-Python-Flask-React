import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Lo usamos para redirigir desde el form a la pagina home una vez iniciada la sesión 

// Formulario para login

export const LoginForm = () => {
    // creamos los estados del username y password que cambiaran 
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);
    // Activamos el useNavigate
    const navigate = useNavigate();

    // Funcion para ejecutar el submit 
    // se le pasa e como parametro y el preventdefault para que no actue por defecto, sino que ejecute el codigo de abajo
    function handleLogin (e) {
        e.preventDefault()
        // let logged = 
        // console.log(userName, password)
        actions.login(userName, password) // activamos la funcion login y le pasamos como param username y password 
    }



    return (
        <form onSubmit={handleLogin}>
            <div className="container bg-light p-5">
                <div className="form-group p-2">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={(e)=>setUserName(e.target.value)} />
                </div>
                <div className="form-group p-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="p-2">
                    {/* falta linkear el p con el registro */}
                    <p>If you don't have an account click here to register!</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>

    );
};

export default LoginForm;