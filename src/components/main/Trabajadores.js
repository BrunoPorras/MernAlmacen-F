import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import Navbar from './navbar'

export default class Trabajadores extends Component {

    state = {
        trabajadores: [],
        nombreEmpleado: "",
        DNI: "",
        telefEmpleado: "",
        area: ""
    }
    onChangeNombreEmpleado = (e) => {
        this.setState({
            nombreEmpleado: e.target.value
        })
    }
    onChangeDNI = (e) => {
        this.setState({
            DNI: e.target.value
        })
    }
    onChangeTelefEmpleado = (e) => {
        this.setState({
            telefEmpleado: e.target.value
        })
    }
    onChangeArea = (e) => {
        this.setState({
            area: e.target.value
        })
    }

    async componentDidMount() {
        this.getTrabajadores();
        console.log(this.state.trabajadores)
    }

    getTrabajadores = async () => {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/trabajadores/');
        this.setState({ trabajadores: res.data });
    }

    onSubmit = async (e) => {
        const res = await axios.post('https://sistema-almacen-beta.herokuapp.com/api/trabajadores/', {
            nombre: this.state.nombreEmpleado,
            DNI: this.state.DNI,
            telefTrabajador: this.state.telefEmpleado,
            area: this.state.area
        })
        console.log(res)
        this.getTrabajadores();

    }

    modifyTrabajador = async (id) => {
        console.log(id);
        await axios.put('https://sistema-almacen-beta.herokuapp.com/api/trabajadores/' + id, {
            nombre: this.state.nombreEmpleado,
            DNI: this.state.DNI,
            telefTrabajador: this.state.telefEmpleado,
            area: this.state.area
        })
        this.getTrabajadores();

    }

    deleteTrabajador = async (id) => {
        await axios.delete('https://sistema-almacen-beta.herokuapp.com/api/trabajadores/' + id)
        console.log(id)
        this.getTrabajadores();
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
                                    Dentro de este apartado usted como jefe de almacén puede registrar,
                                    modificar, eliminar y listar trabajadores del sistema, además el
                                    sistema muestra un formulario para cuando se desee añadir o modificar
                                    un trabajador, con sus campos correspondientes, y también una lista de
                                    los que ya están registrados, para facilitar las operaciones de
                                    eliminar y modificar.
                                </p>
                            </div>
                        </div>
                        <div className="sep-peq"></div>
                        <div className="row justify-content-around">
                            <div className="col-4 text-center">
                                <button
                                    className="btn btn-secondary btn-outline-dark"
                                    data-bs-toggle="modal" data-bs-target="#añadir_trab">
                                    Añadir
                                </button>
                                <div className="modal fade" id="añadir_trab" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Añadir trabajador:</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Nombre:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeNombreEmpleado}
                                                            name="nombre"
                                                            placeholder="Escriba el nombre del empleado"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Dni:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeDNI}
                                                            name="codigo"
                                                            placeholder="Escriba el DNI del empleado"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Teléfono:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeTelefEmpleado}
                                                            name="codigo"
                                                            placeholder="Escriba el n° de teléfono del empleado"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Área de trabajo:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeArea}
                                                            name="codigo"
                                                            placeholder="Escriba el área de trabajo del empleado"
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
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Dni</th>
                                            <th scope="col">Teléfono</th>
                                            <th scope="col">Área</th>
                                            <th scope="col">Modificar</th>
                                            <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.trabajadores.map(trabajadores =>
                                                <tr key={trabajadores._id}>
                                                    <td>{trabajadores.nombre}</td>
                                                    <td>{trabajadores.DNI}</td>
                                                    <td>{trabajadores.telefTrabajador}</td>
                                                    <td>{trabajadores.area}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-secondary btn-outline-dark"
                                                            data-bs-toggle="modal" data-bs-target={"#trab_m_" + trabajadores.nombreEmpleado}>
                                                            Modificar
                                                        </button>
                                                        <div className="modal fade" id={"trab_m_"+trabajadores.nombreEmpleado} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="staticBackdropLabel">Modificar trabajador:</h5>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <form>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Nombre</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeNombreEmpleado}
                                                                                    name="nombreEmpleado"
                                                                                    placeholder="Escriba el nombre del trabajador"
                                                                                />
                                                                            </div>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Código</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeDNI}
                                                                                    name="dni"
                                                                                    placeholder="Escriba el DNI del trabajador"
                                                                                />
                                                                            </div>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Teléfono</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeTelefEmpleado}
                                                                                    name="telefEmpleado"
                                                                                    placeholder="Escriba el n° de teléfono del trabajador"
                                                                                />
                                                                            </div>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Área</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeArea}
                                                                                    name="area"
                                                                                    placeholder="Escriba el área del trabajador"
                                                                                />
                                                                            </div>

                                                                        </form>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                                        <button type="button" className="btn btn-primary"
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => this.modifyTrabajador(trabajadores._id)}>Sí</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-secondary btn-outline-dark"
                                                            data-bs-toggle="modal" data-bs-target={"#trab_e_" + trabajadores.nombre}>
                                                            Eliminar
                                                        </button>
                                                        <div className="modal fade" id={"trab_e_" + trabajadores.nombre} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="staticBackdropLabel">Confirmación para eliminar:</h5>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        ¿Está seguro que desea eliminar el trabajador escogido?
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                                        <button type="button" className="btn btn-primary" id={trabajadores._id}
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => this.deleteTrabajador(trabajadores._id)}>Sí</button>
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