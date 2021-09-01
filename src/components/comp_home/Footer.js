import React, { Component } from 'react'

export default class Footer extends Component {

    
    render() {
        return (
            <div className="p-5 bg-dark">
                <div className="container w-50 pt-5">
                    <div className="row justify-content-md-center">
                        <div className="col text-center">
                            <a href="/">
                                <button className="btn btn-lg rounded-pill btn-warning w-10 p-3 shadow-sm font-weight-bold">Contáctanos</button>
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-md-center py-5">
                        <div className="col text-center font-weight-light">
                            <p className="text-white">Motivos de reporte:<br />
                                -Encontrar bugs o errores dentro de la página.<br />
                                -Solicitar sugerencias o cambios.<br />
                                -Opiniones personales del sitio como resultado.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}