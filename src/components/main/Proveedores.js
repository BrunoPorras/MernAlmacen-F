import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import Navbar from './navbar'

export default class Proveedores extends Component {

    state = {
        proveedores: [],
        nombreEmpresa: "",
        RUC: "",
        telefEmpresa: "",
        correoEmpresa: ""
    }

    //Para la lectura de elementos
    onChangeNombre = (e) => {
        this.setState({
            nombreEmpresa: e.target.value
        })
    }
    onChangeRUC = (e) => {
        this.setState({
            RUC: e.target.value
        })
    }
    onChangeTelef = (e) => {
        this.setState({
            telefEmpresa: e.target.value
        })
    }
    onChangeCorreo = (e) => {
        this.setState({
            correoEmpresa: e.target.value
        })
    }


    async componentDidMount() {
        this.getProveedores();
        console.log(this.state.proveedores)
    }

    getProveedores = async () => {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/proveedores/');
        this.setState({ proveedores: res.data });
    }

    onSubmit = async (e) => {
        const res = await axios.post('https://sistema-almacen-beta.herokuapp.com/api/proveedores/', {
            nombreEmpresa: this.state.nombreEmpresa,
            RUC: this.state.RUC,
            telefEmpresa: this.state.telefEmpresa,
            correoEmpresa: this.state.correoEmpresa
        })
        console.log(res)
        this.getProveedores();

    }

    modifyProveedor= async (id) => {
        console.log(id);
        await axios.put('https://sistema-almacen-beta.herokuapp.com/api/proveedores/' + id, {
            nombreEmpresa: this.state.nombreEmpresa,
            RUC: this.state.RUC,
            telefEmpresa: this.state.telefEmpresa,
            correoEmpresa: this.state.correoEmpresa
        })
        this.getCategorias();

    }

    deleteProveedores = async (id) => {
        await axios.delete('https://sistema-almacen-beta.herokuapp.com/api/proveedores/' + id)
        console.log(id)
        this.getProveedores();
    }



    render() {
        return (
            <div className="d-flex justify-content">
                <Sidebar></Sidebar>
                <div className="w-100 shadow">
                    <Navbar></Navbar>
                    <div className="container">
                        <div className="sep-peq"></div>
                        <div className="row justify-content-around">
                            <div className="col-10 bg-light shadow rounded">
                                <p className="fs-5">
                                    Dentro de este apartado usted como jefe de almacén puede añadir,
                                    modificar, eliminar y ver los proveedores, al momento de seleccionarlo
                                    se muestra un formulario para cuando se desee añadir o modificar un proveedor,
                                    con sus campos correspondientes, y también una lista de los que ya están
                                    registrados, para facilitar las operaciones de eliminar y modificar.
                                </p>
                            </div>
                        </div>
                        <div className="sep-peq"></div>
                        <div className="row justify-content-around">
                            <div className="col-4 text-center">
                                <button
                                    className="btn btn-secondary btn-outline-dark"
                                    data-bs-toggle="modal" data-bs-target="#añadir_prov">
                                    Añadir
                                </button>
                                <div className="modal fade" id="añadir_prov" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Añadir proveedor</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Nombre de empresa:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeNombre}
                                                            name="nombre_empresa"
                                                            placeholder="Escriba el nombre de la empresa"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">RUC:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeRUC}
                                                            name="ruc"
                                                            placeholder="Escriba la RUC de la empresa"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Teléfono:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeTelef}
                                                            name="telefono"
                                                            placeholder="Escriba el n° de teléfono"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Correo:</p>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            onChange={this.onChangeCorreo}
                                                            name="email"
                                                            placeholder="Escriba el correo de la empresa"
                                                        />
                                                    </div>

                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Salir</button>
                                                <button type="button" className="btn btn-primary"
                                                    data-bs-dismiss="modal"
                                                    onClick={() => this.onSubmit()}>Añadir</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="sep-peq"></div>
                        <div className="row justify-content-around">
                            <div className="col-10">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre de empresa</th>
                                            <th scope="col">Ruc</th>
                                            <th scope="col">Teléfono</th>
                                            <th scope="col">Correo</th>
                                            <th scope="col">Modificar</th>
                                            <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.proveedores.map(proveedores =>
                                                <tr key={proveedores._id}>
                                                    <td>{proveedores.nombreEmpresa}</td>
                                                    <td>{proveedores.RUC}</td>
                                                    <td>{proveedores.telefEmpresa}</td>
                                                    <td>{proveedores.correoEmpresa}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-secondary btn-outline-dark"
                                                            data-bs-toggle="modal" data-bs-target={"#prov_m_" + proveedores.nombreEmpresa}>
                                                            Modificar
                                                        </button>
                                                        <div className="modal fade" id={"prov_m_"+proveedores.nombreEmpresa} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="staticBackdropLabel">Modificar categoría:</h5>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <form>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Nombre</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeNombre}
                                                                                    name="nombre"
                                                                                    placeholder="Escriba el nombre de la empresa"
                                                                                />
                                                                            </div>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Código</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeRUC}
                                                                                    name="codigo"
                                                                                    placeholder="Escriba la RUC"
                                                                                />
                                                                            </div>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Código</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeTelef}
                                                                                    name="codigo"
                                                                                    placeholder="Escriba el teléfono de la empresa"
                                                                                />
                                                                            </div>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Código</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeCorreo}
                                                                                    name="codigo"
                                                                                    placeholder="Escriba el correo de la empresa"
                                                                                />
                                                                            </div>

                                                                        </form>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                                        <button type="button" className="btn btn-primary"
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => this.modifyProveedor(proveedores._id)}>Sí</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-secondary btn-outline-dark"
                                                            data-bs-toggle="modal" data-bs-target={"#prov_e_" + proveedores.nombreEmpresa}>
                                                            Eliminar
                                                        </button>
                                                        <div className="modal fade" id={"prov_e_" + proveedores.nombreEmpresa} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="staticBackdropLabel">Confirmación para eliminar:</h5>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        ¿Está seguro que desea eliminar el item escogido?: {proveedores.nombreEmpresa}
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                                        <button type="button" className="btn btn-primary" id={proveedores._id}
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => this.deleteProveedores(proveedores._id)}>Sí</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}