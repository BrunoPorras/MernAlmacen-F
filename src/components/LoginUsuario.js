import React, { Component } from 'react'
import logo from './imagenes/logo.png'
import axios from 'axios'
import Navigation from './comp_home/Navigation'
import Footer from './comp_home/Footer'

export default class LoginUsuario extends Component {

    state = {
        usuarios: [],
        username: "",
        password: ""
    }


    constante = {
        campos: [{
            a1: "username",
            a2: "Nombre de usuario",
            a3: "Escriba su nombre de usuario",
            a4: "text"
        }, {
            a1: "password",
            a2: "Contraseña",
            a3: "Escriba su contraseña",
            a4: "password"
        }]
    }
    async componentDidMount() {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/usuarios/');
        this.setState({ usuarios: res.data });
        console.log(this.state.usuarios)
    }

    iniciarSesion = async () => {
        await axios.get('https://sistema-almacen-beta.herokuapp.com/api/usuarios/', { params: { username: this.state.username, password: this.state.password } })
            .then(response => {
                console.log(response.data)
                console.log(this.state.username)
                console.log(this.state.password)
                return response.data;
            })
            .then(response=>{
                if(response.length>0){
                    console.log("Inicio correcto")
                }else{
                    console.log("Inicio incorrecto")
                }
            })
            .catch(error => {
                console.log(error);
                console.log("Inicio inválido");
            })

    }/*
    iniciarSesion1 = async () => {
        await axios.get('https://sistema-almacen-beta.herokuapp.com/api/usuarios/',
            { params: { username: this.state.username, password: this.state.password } })
            .then(response => {
                this.state.usuarios.map(usuarios =>
                    {if(usuarios.username===this.username){
                        
                    };}
                    );

                console.log("Inicio correcto")
                console.log(this.state.username)
                console.log(this.state.password);
            })
            .catch(error => {
                console.log(error);
                console.log("Inicio inválido");
            })

    }*/

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onChangePass = (e) => {
        this.setState({
            password: e.target.value
        })
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
                        <div className="col-12 col-md-6 form-group">
                            <h2 className="fw-bold text-center py-5">Inicio de sesión</h2>

                            <div className="mb-4" >
                                <label className="form-label">Nombre de usuario</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                onChange= {this.onChangeUsername}
                                name="username" 
                                placeholder="Escriba su nombre de usuario" required />
                            </div>

                            <div className="mb-4" >
                                <label className="form-label">Contraseña</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                onChange={this.onChangePass}
                                name="password" 
                                placeholder="Escriba su contraseña" required />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Rol</label>
                                <select className="form-select" aria-label="Ejemplo" required>
                                    <option defaultValue disabled value>Escoja una opción válida</option>
                                    <option value="1">Jefe de almacén</option>
                                    <option value="2">Almacenero</option>
                                </select>
                            </div>

                            <div className="d-grid my-5">
                                <button type="submit" className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        )
    }
}