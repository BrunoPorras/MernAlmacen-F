import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import Navbar from './navbar'
//http://localhost:4000 para cada /api/

export default class Categorias extends Component {

    state = {
        items: [],
        nombre: "",
        codigo: "",
        categoria: "",
        proveedor: "",
        precio: "",
        cantidad: 0
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



    async componentDidMount() {
        this.getItems();
        console.log(this.state.items)
    }

    getItems = async () => {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/items/');
        this.setState({ items: res.data });
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

    modifyItem = async (id) => {
        console.log(id);
        await axios.put('https://sistema-almacen-beta.herokuapp.com/api/items/' + id, {
            nombreP: this.state.nombre,
            codigoP: this.state.codigo,
            categoriaP: this.state.categoria,
            proveedorP: this.state.proveedor,
            precioP: this.state.precio,
            cantidadP: this.state.cantidad
        })
        this.getItems();

    }

    deleteItem = async (id) => {
        await axios.delete('https://sistema-almacen-beta.herokuapp.com/api/items/' + id)
        console.log(id)
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
                                    Dentro de este apartado usted como jefe de almacén
                                    puede ver a detalle los diversos productos registrados
                                    en el almacén.
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
                                            <th scope="col">Precio</th>
                                            <th scope="col">Cantidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.items.map(items =>
                                                <tr key={items._id}>
                                                    <td>{items.nombreP}</td>
                                                    <td>{items.codigoP}</td>
                                                    <td>{items.categoriaP}</td>
                                                    <td>{items.proveedorP}</td>
                                                    <td>{items.precioP}</td>
                                                    <td>{items.cantidadP}</td>
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