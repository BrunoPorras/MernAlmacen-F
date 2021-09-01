import React, { Component } from 'react'
import logo from './imagenes/logo.png'
import Navigation from './comp_home/Navigation'
import Footer from './comp_home/Footer'

export default class LoginUsuario extends Component {


    constante = {
        campos: [{
            a1: "username",
            a2: "Nombre de usuario",
            a3: "Escriba su nombre de usuario",
            a4: "text"
        },{
            a1: "password",
            a2: "Contraseña",
            a3: "Escriba su contraseña",
            a4: "password"
        }]
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <div className="container w-75">
                    
                </div>
                <div className="container w-75 mt-5 rounded shadow">
                    <div className="text-end p-3">
                        <img src={logo} alt="Logo de almacen" width="100" height="60" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 ">
                            <h2 className="fw-bold text-center py-5">Inicio de sesión</h2>
                            <form action="#">
                                {
                                    this.constante.campos.map(campos =>
                                        <div className="mb-4" key = {campos.a2}>
                                            <label className="form-label">{campos.a2}</label>
                                            <input type={campos.a4} className="form-control" name={campos.a1} placeholder={campos.a3} required />
                                        </div>
                                    )
                                }

                                <div className="mb-4">
                                    <label className="form-label">Rol</label>
                                    <select className="form-select" aria-label="Ejemplo" required>
                                        <option defaultValue disabled value>Escoja una opción</option>
                                        <option value="1">Jefe de almacén</option>
                                        <option value="2">Almacenero</option>
                                    </select>
                                </div>

                                <div className="d-grid my-5">
                                    <button id="btn_reg" type="submit" className="btn btn-primary">Iniciar sesión</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        )
    }
}