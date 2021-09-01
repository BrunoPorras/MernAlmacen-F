import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Sidebar extends Component {

    sidebar_items = {
        campos: [{
            href: "/home",
            name_item: "Inicio",
            icon: "bi bi-house lead p-3 mr-2"
        }, {
            href: "/proveedores",
            name_item: "Proveedores",
            icon: "bi bi-truck lead p-3 mr-2"
        }, {
            href: "/categorias",
            name_item: "Categorías",
            icon: "bi bi-tags lead p-3 mr-2"
        }, {
            href: "/trabajadores",
            name_item: "Trabajadores",
            icon: "bi bi-people lead p-3 mr-2"
        }, {
            href: "/registros",
            name_item: "Registros",
            icon: "bi bi-clipboard-data lead p-3 mr-2"
        }, {
            href: "/entrada-productos",
            name_item: "Entrada de productos",
            icon: "bi bi-box-arrow-in-down lead p-3 mr-2"
        }, {
            href: "/salida-productos",
            name_item: "Salida de productos",
            icon: "bi bi-box-arrow-up lead p-3 mr-2"
        }, {
            href: "/gestionar-items",
            name_item: "Gestionar items",
            icon: "bi bi-box-seam lead p-3 mr-2"
        }]
    }

    render() {
        return (
            <div className="side_bar bg-dark shadow">
                <div className="logo">
                    <h4 className="text-light font-weight-bold">Gestión de almacén</h4>
                </div>
                <div className="menu">
                    {
                        this.sidebar_items.campos.map(campos =>
                            <Link className="d-block p-3 text-light text-decoration-none a_class" to={campos.href} key={campos.name_item}>
                                <i className={campos.icon}></i>{campos.name_item}
                            </Link>
                        )
                    }
                </div>
            </div>

        )
    }
}