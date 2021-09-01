import React, { Component } from 'react'
import axios from 'axios'
import Navigation from './comp_home/Navigation';
import Footer from './comp_home/Footer'

export default class RegistroUsuarios extends Component {

    state = {
        usuarios: [],
        nombres: '',
        apellidos: '',
        telefono: '',
        correo: '',
        usename: '',
        password: '',
        rol: ''
    }

    async componentDidMount() {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/usuarios/');
        this.setState({ usuarios: res.data });
        console.log(this.state.usuarios)
    }

    onChangeName = (e) => {
        this.setState({
            nombres: e.target.value
        })
    }
    onChangeLastName = (e) => {
        this.setState({
            apellidos: e.target.value
        })
    }
    onChangePhone = (e) => {
        this.setState({
            telefono: e.target.value
        })
    }
    onChangeCorreo = (e) => {
        this.setState({
            correo: e.target.value
        })
    }
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
    onChangeRol = (e) => {
        this.setState({
            rol: e.target.value
        })
        console.log(e.target.value)
    }

    onSubmit = async (e) => {
        const res = await axios.post('https://sistema-almacen-beta.herokuapp.com/api/usuarios/', {
            nombres: this.state.nombres,
            apellidos: this.state.apellidos,
            telefono: this.state.telefono,
            correo: this.state.correo,
            usename: this.state.username,
            password: this.state.password
        })
        console.log(res)
    }


    render() {
        return (
            <div>
                <Navigation></Navigation>
                <div className="container w-75 mt-5 rounded shadow">
                    <div className="text-end p-3">

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 ">
                            <h2 className="fw-bold text-center py-5">Registro de usuario</h2>
                            <form onSubmit={this.onSubmit}>

                                <div className="mb-4">
                                    <label className="form-label">Nombres</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.onChangeName}
                                        name="first_name"
                                        placeholder="Escriba su nombre" 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Apellidos</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.onChangeLastName}
                                        name="last_name"
                                        placeholder="Escriba su apellido" 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Teléfono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.onChangePhone}
                                        name="phone"
                                        placeholder="Escriba su n° telefono" 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Dirección de correo</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        onChange={this.onChangeCorreo}
                                        name="email"
                                        placeholder="UsuarioDeAlmacen@ejemplo.com" 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Nombre de usuario</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.onChangeUsername}
                                        name="username"
                                        placeholder="Escriba su username" 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        onChange={this.onChangePass}
                                        name="password"
                                        placeholder="Escriba su contraseña" 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Rol</label>
                                    <select className="form-select" aria-label="Ejemplo" required onChange={this.onChangeRol}>
                                        <option defaultValue disabled value>Escoja una opción</option>
                                        <option value="Jefe de almacen">Jefe de almacén</option>
                                        <option value="Almacenero">Almacenero</option>
                                    </select>
                                </div>

                                <div className="d-grid my-5">
                                    <button id="btn_reg" type="submit" className="btn btn-primary">Registrarse</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="sep-peq1"></div>
                <Footer></Footer>
            </div>
        )
    }
}