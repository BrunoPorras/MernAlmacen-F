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

                           
                        </div>

                        <div className="sep-peq"></div>

                        <div className="row justify-content-around">
                            <div className="col-10">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Codigo</th>
                                            <th scope="col">Tipo de Solicitud</th>
                                            <th scope="col">Ver detalle</th>
                                            <th scope="col">Aprobar</th>
                                            <th scope="col">Rechazar</th>
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