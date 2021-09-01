import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import Navbar from './navbar'
//http://localhost:4000 para cada /api/

export default class Categorias extends Component {

    state = {
        categorias: [],
        nombre: "",
        codigo: ""
    }
    onChangeNombre = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }
    onChangeCodigo = (e) => {
        this.setState({
            codigo: e.target.value
        })
    }

    async componentDidMount() {
        this.getCategorias();
        console.log(this.state.categorias)
    }

    getCategorias = async () => {
        const res = await axios.get('https://sistema-almacen-beta.herokuapp.com/api/categorias/');
        this.setState({ categorias: res.data });
    }

    onSubmit = async (e) => {
        const res = await axios.post('https://sistema-almacen-beta.herokuapp.com/api/categorias/', {
            nombre: this.state.nombre,
            codigo: this.state.codigo
        })
        console.log(res)
        this.getCategorias();

    }

    modifyCategory = async (id) => {
        console.log(id);
        await axios.put('https://sistema-almacen-beta.herokuapp.com/api/categorias/'+ id, {
            nombre: this.state.nombre,
            codigo: this.state.codigo
        })
        this.getCategorias();

    }

    deleteCategoria = async (id) => {
        await axios.delete('https://sistema-almacen-beta.herokuapp.com/api/categorias/' + id)
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
                                    Dentro de este apartado usted como jefe de almacén puede clasificar
                                    los productos por categorías, así como agregar, modificar y eliminar categorías acordes
                                    a lo que se solicite, el sistema inicialmente muestra las opciones de añadir o modificar
                                    una categoría, con sus campos correspondientes, y también una lista de los que ya están
                                    registrados, para facilitar las operaciones de eliminar y modificar.
                                </p>
                            </div>
                        </div>
                        <div className="sep-peq"></div>
                        <div className="row justify-content-around">
                            <div className="col-4 text-center">
                                <button
                                    className="btn btn-secondary btn-outline-dark"
                                    data-bs-toggle="modal" data-bs-target="#añadir_cat">
                                    Añadir
                                </button>
                                <div className="modal fade" id="añadir_cat" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Añadir categoría:</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>

                                                    <div className="mb-4">
                                                        <p className="form-label text-start">Nombre:</p>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChangeNombre}
                                                            name="nombre"
                                                            placeholder="Escriba el nombre de la categoría"
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
                                            <th scope="col">Modificar</th>
                                            <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.categorias.map(categorias =>
                                                <tr key={categorias._id}>
                                                    <td>{categorias.nombre}</td>
                                                    <td>{categorias.codigo}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-secondary btn-outline-dark"
                                                            data-bs-toggle="modal" data-bs-target={"#"+categorias.nombre}>
                                                            Modificar
                                                        </button>
                                                        <div className="modal fade" id={categorias.nombre} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                                                                    placeholder= "Escriba el nombre de la categoría"
                                                                                />
                                                                            </div>

                                                                            <div className="mb-4">
                                                                                <p className="form-label text-start">Código</p>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    onChange={this.onChangeCodigo}
                                                                                    name="codigo"
                                                                                    placeholder="Escriba el código"
                                                                                />
                                                                            </div>

                                                                        </form>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                                        <button type="button" className="btn btn-primary"
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => this.modifyCategory(categorias._id)}>Sí</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-secondary btn-outline-dark"
                                                            data-bs-toggle="modal" data-bs-target={"#e"+categorias.nombre}>
                                                            Eliminar
                                                        </button>
                                                        <div className="modal fade" id={"e"+categorias.nombre} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="staticBackdropLabel">Confirmación para eliminar:</h5>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        ¿Está seguro que desea eliminar el item escogido?
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                                        <button type="button" className="btn btn-primary" id={categorias._id}
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => this.deleteCategoria(categorias._id)}>Sí</button>
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