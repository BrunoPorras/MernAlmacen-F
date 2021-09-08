import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import Navbar from './navbar'

export default class Entrada_p extends Component {


    state = {
        entradas: [],
        nombre: "",
        codigo: "",
        categoria: "",
        proveedor: "",
        precio: "",
        cantidad: 0,
        cantidad_au: 0,
        Categorias: [],
        Proveedores: [],
        Productos: []
    }



    onChangeNombreP = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }
    onChangeCodigo = (e) => {
        this.setState({
            codigo: e.target.value
        })
    }
    onChangeCategoría = (e) => {
        this.setState({
            categoria: e.target.value
        })
    }
    onChangeProveedor = (e) => {
        this.setState({
            proveedor: e.target.value
        })
    }
    onChangePrecio = (e) => {
        this.setState({
            precio: e.target.value
        })
    }
    onChangeCantidad = (e) => {
        this.setState({
            cantidad: e.target.value
        })
    }
    onChangeCantidadAu = (e) => {
        this.setState({
            cantidad_au: e.target.value
        })
    }


    async componentDidMount() {
        this.getCategorias();
        this.getProveedores();
        this.getItems();
        console.log(this.state.entradas);
    }

    getItems = async () => {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/items/');
        this.setState({ Productos: res.data });
    }

    getCategorias = async () => {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/categorias/');
        this.setState({ Categorias: res.data });
    }

    getProveedores = async () => {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/proveedores/');
        this.setState({ Proveedores: res.data });
    }

    onSubmit = async (e) => {
        const res = await axios.post('https://sistema-almacen-beta.herokuapp.com/api/items/', {
            nombreP: this.state.nombre,
            codigoP: this.state.codigo,
            categoriaP: this.state.categoria,
            proveedorP: this.state.proveedor,
            precioP: this.state.precio,
            cantidadP: this.state.cantidad
        })
        console.log(res)
        this.getItems();
    }

    modifyItemStock = async (id, stock) => {
        console.log(id);
        const num1 = parseInt(this.state.cantidad_au, 10) + parseInt(stock, 10)
        await axios.put('https://sistema-almacen-beta.herokuapp.com/api/items/' + id, {
            cantidadP: num1
        })
        this.getItems();
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
                                    Dentro de este apartado usted como jefe de almacén puede añadir, modificar,
                                    eliminar productos a una solicitud de ingreso de productos, permitirá también
                                    registrar dichas solicitudes como válidas para ser enviadas al proveedor.
                                </p>
                            </div>
                        </div>
                        <div className="sep-peq"></div>
                        <div className="row justify-content-around">
                            <div className="col-4 text-center">
                                <button
                                    className="btn btn-secondary btn-outline-dark"
                                    data-bs-toggle="modal" data-bs-target="#añadir_prod">
                                    Añadir
                                </button>
                                <div className="modal fade" id="añadir_prod" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Añadir entrada producto:</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Nombre:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeNombreP}
                                                            name="nombre"
                                                            placeholder="Escriba el nombre del producto"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Código:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeCodigo}
                                                            name="codigo"
                                                            placeholder="Escriba el código"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Categoría:</p>
                                                        <select className="form-select" aria-label="Ejemplo" required onChange={this.onChangeCategoría}>
                                                            <option defaultValue disabled value>Escoja una opción</option>
                                                            {
                                                                this.state.Categorias.map(Categorias =>
                                                                    <option value={Categorias.nombre} key={Categorias._id}>{Categorias.nombre}</option>
                                                                )
                                                            }
                                                        </select>
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Proveedor:</p>
                                                        <select className="form-select" aria-label="Ejemplo" required onChange={this.onChangeProveedor}>
                                                            <option defaultValue disabled value>Escoja una opción</option>
                                                            {
                                                                this.state.Proveedores.map(Proveedores =>
                                                                    <option value={Proveedores.nombreEmpresa} key={Proveedores._id}>{Proveedores.nombreEmpresa}</option>
                                                                )
                                                            }
                                                        </select>
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Precio:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangePrecio}
                                                            name="precio"
                                                            placeholder="Escriba el precio del producto"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Cantidad:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeCantidad}
                                                            name="cantidad"
                                                            placeholder="Escriba la cantidad de productos a ingresar"
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
                                            <th scope="col">Código</th>
                                            <th scope="col">Categoría</th>
                                            <th scope="col">Proveedor</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Aumentar stock</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.Productos.map(Productos =>
                                                <tr key={Productos._id}>
                                                    <td>{Productos.nombreP}</td>
                                                    <td>{Productos.codigoP}</td>
                                                    <td>{Productos.categoriaP}</td>
                                                    <td>{Productos.proveedorP}</td>
                                                    <td>{Productos.cantidadP}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-secondary btn-outline-dark"
                                                            data-bs-toggle="modal" data-bs-target={"#au_stock"+Productos.codigoP}>
                                                            Añadir stock
                                                        </button>
                                                        <div className="modal fade" id={"au_stock"+Productos.codigoP} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="staticBackdropLabel">Aumentar stock:</h5>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <form>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Nombre</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeNombreP}
                                                                                    name="nombre"
                                                                                    placeholder={Productos.nombreP}
                                                                                    disabled
                                                                                />
                                                                            </div>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Cantidad</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeCantidadAu}
                                                                                    name="cantidad_au"
                                                                                    placeholder="Aumente la cantidad de stock que se ingresará"
                                                                                />
                                                                            </div>

                                                                        </form>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                                        <button type="button" className="btn btn-primary"
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => this.modifyItemStock(Productos._id, Productos.cantidadP)}>Sí</button>
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