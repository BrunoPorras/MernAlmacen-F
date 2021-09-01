import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../imagenes/logo.png'
//import {useAuth0} from '@auth0/auth0-react'

const Navigation = () => {
    
    //const { loginWithRedirect, isAuthenticated } = useAuth0();
    //console.log(isAuthenticated);
    return (
        <nav className="navbar navbar-expand-sm navbar-dark sticky-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo de almacen" width="100" height="60" />
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toogle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className = "nav-link m-1" to="/categorias">Inicio</Link></li>
                            <li className="nav-item"><Link className = "nav-link m-1" to="/funcionalidades">Funcionalidades</Link></li>
                            <li className="nav-item"><Link className = "nav-link m-1" to="/register">Regístrese ahora</Link></li>
                            <li className="nav-item"><Link className = "nav-link m-1" to="/login">Ingresar</Link></li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navigation

// <li className="nav-item" onClick={()=> loginWithRedirect()}><Link className = "nav-link m-1">Ingresar</Link></li>


/*import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './../imagenes/logo.png'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo de almacen" width="100" height="60" />
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toogle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className = "nav-link m-1"to="/">Inicio</Link></li>
                            <li className="nav-item"><Link className = "nav-link m-1" to="/funcionalidades">Funcionalidades</Link></li>
                            <li className="nav-item"><Link className = "nav-link m-1" to="/register">Regístrese ahora</Link></li>
                            <li className="nav-item"><Link className = "nav-link m-1" to="/login">Ingresar</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}*/
