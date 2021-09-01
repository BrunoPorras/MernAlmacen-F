import React, { Component } from 'react'

export default class Intmain2 extends Component {

    
    render() {
        return (
            <div className="p-3">
                <div className="container-fluid">
                    <div className="row p-3 justify-content-around">
                        <div className="col-5 border border-4 text-center p-3">
                            <h1>¿A quiénes ayudamos?</h1>
                            <p className="fs-4">A todo emprendedor que necesite llevar un control mejor estructurado de su almacén</p>
                        </div>
                        <div className="col-5">
                            <p className="fs-2">
                                Empieza a trabajar con nosotros para la <span className="fw-bold">Gestión de tu almacén</span>
                            </p>
                            <p>
                                Descubre nuestras funcionalidades y ventajas para ver si coincide con lo que tú como emprendedor en este tipo de negocio necesitas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}