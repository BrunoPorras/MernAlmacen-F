import React, { Component } from 'react'

export default class Intmain extends Component {

    
    render() {
        return (
                <div className="container-fluid">
                    <div className="row p-3 justify-content-around">
                        <div className="col-5">
                            <p className="fs-1">
                                Empieza a trabajar con nosotros para la <span className="fw-bold">Gestión de tu almacén</span>
                            </p>
                            <p>
                                Descubre nuestras funcionalidades y ventajas para ver si coincide con lo que tú como emprendedor en este tipo de negocio necesitas
                            </p>
                        </div>
                        <div className="col-5 border border-4 text-center p-3">
                            <h1>¿Qué es esto?</h1>
                            <p className="fs-4">Un sistema para el control y la gestión adecuada de un almacén, no solo con funcionalidades básicas sino ¡mucho más!</p>
                        </div>
                    </div>
                </div>
        )
    }
}