import React, { Component } from 'react'

export default class Footer extends Component {

    
    render() {
        return (
            <div className="p-5 bg-dark">
                <div className="container w-50 pt-5">
                    <div className="row justify-content-md-center">
                        <div className="col text-center">
                            <p className="fs-4 text-light">Para contacto enviar un correo a: alefran2020@gmail.com</p>
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