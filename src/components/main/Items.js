import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import Navbar from './navbar'

export default class Salida_p extends Component {


    state = {
        solicitudes: [],
        nombreP: "",
        codigoP: "",
        categoriaP: "",
        proveedorP: "",
        precioP: "",
        cantidadP: "",
        descripcionP: ""
    }
   
    //Para cada producto
    onChangeNombreP = (e) => {
        this.setState({
            nombreP: e.target.value
        })
    }
    onChangeCodigo = (e) => {
        this.setState({
            codigoP: e.target.value
        })
    }
    onChangeCategoría = (e) => {
        this.setState({
            categoriaP: e.target.value
        })
    }
    onChangeProveedor = (e) => {
        this.setState({
            proveedorP: e.target.value
        })
    }
    onChangePrecio = (e) => {
        this.setState({
            precioP: e.target.value
        })
    }
    onChangeCantidad = (e) => {
        this.setState({
            cantidadP: e.target.value
        })
    }
    onChangeDescripcion = (e) => {
        this.setState({
            descripcionP: e.target.value
        })
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
            tipoS: "Salida",
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
                                    Dentro de este apartado usted como jefe de almacén puede ver a
                                    detalle los diversos productos registrados en el almacén.
                                </p>
                            </div>
                        </div>
                        <div className="sep-peq"></div>


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