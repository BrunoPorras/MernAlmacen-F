import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import Navbar from './navbar'

export default class Registro extends Component {


    state = {
        solicitudes: [],
        id_local: "String",
        tipoS: "Entrada",
        codigoS: "",
        estadoS: "Por aprobar",
        productos: [{
            nombre: "",
            codigo: "",
            categoria: "",
            proveedor: "",
            precio: "",
            cantidad: 0,
            descripcion: ""
        }]
    }
    setId = (a) => {
        this.setState({
            id_local: a
        })
        //console.log(this.state.id_local);
    }

    async componentDidMount() {
        this.getSolicitudes();

        console.log(this.state.solicitudes)
    }

    getSolicitudes = async () => {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/solicitudes/');
        this.setState({ solicitudes: res.data });
    }

    getSolicitud = async (id) => {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/solicitudes/' + id);
        this.setState({ solicitudes: res.data });
    }


    crearSolicitudVacia = async () => {
        const res = await axios.post('https://sistema-almacen-beta.herokuapp.com/api/solicitudes/', {
            tipoS: "Entrada",
            estadoS: "Por aprobar"
        })
        this.setId(res.data);
        //console.log(res.data);
    }

    registrarSolicitud = async (id) => {
        await axios.put('https://sistema-almacen-beta.herokuapp.com/api/solicitudes/' + id, {
            estadoS: "Registrado"
        })
        //console.log(res.data);
    }

    onSubmit = async (e) => {
        const res = await axios.post('https://sistema-almacen-beta.herokuapp.com/api/solicitudes/', {
            nombre: this.state.nombre,
            codigo: this.state.codigo
        })
        console.log(res)
        this.getCategorias();

    }

    deleteCategoria = async (id) => {
        await axios.delete('https://sistema-almacen-beta.herokuapp.com/api/solicitudes/' + id)
        console.log(id)
        this.getCategorias();
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
                                    modificar, eliminar solicitudes de entrada/salida de productos,
                                    permitirá también registrar dichas solicitudes como válidas para
                                    ser enviadas al proveedor.
                                </p>
                            </div>
                        </div>
                        <div className="sep-peq"></div>
                        <div className="row justify-content-around">
                            <div className="row justify-content-center">
                                <div className="col-4 text-center">
                                    <form className="d-flex">
                                        <select className="form-select" aria-label="Ejemplo" required>
                                            <option selected disabled value>Escoja un tipo de solicitud</option>
                                            <option value="1">Entrada</option>
                                            <option value="2">Salida</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            
                            <div className="sep-peq"></div>

                            <div className="col-4 text-center">

                                <button
                                    className="btn btn-secondary btn-outline-dark"
                                    data-bs-toggle="modal" data-bs-target="#registrar_solicitud">
                                    Registrar solicitud
                                </button>

                                <div className="modal fade" id="registrar_solicitud" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Confirmación para eliminar:</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ¿Desea crear registrar esta solicitud? Esto hará que la solicitu pase a la sección de registros
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                <button type="button" className="btn btn-primary" id="registrar_soli"
                                                    data-bs-dismiss="modal"
                                                    onClick={() => this.registrarSolicitud(this.state.id_local)}>Sí</button>
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
                                            <th scope="col">Código</th>
                                            <th scope="col">Categoría</th>
                                            <th scope="col">Proveedor</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Modificar</th>
                                            <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.solicitudes.map(solicitudes =>
                                                <tr key={solicitudes._id}>
                                                    <td>{solicitudes.id_local}</td>
                                                    <td>{solicitudes.tipoS}</td>
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