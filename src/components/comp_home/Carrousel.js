import React, { Component } from 'react'
import car_1 from './../imagenes/Alm1.jpg'
import car_2 from './../imagenes/Alm2.jpg'
import car_3 from './../imagenes/Alm3.jpg'

export default class Carrousel extends Component {
    
    render() {
        return (
            <div className="carousel slide" id="mainSlider" data-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#mainSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#mainSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#mainSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={car_1} className="d-block w-100" alt="Almacen vacio" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Empiece con el pie derecho</h1>
                            <p>Si ustedestá comenzando en el negocio, hágalo bien desde el inicio.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={car_2} className="d-block w-100" alt="Almacen organizado" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Mantenga todo en orden</h1>
                            <p>Con nosotros usted puede tener bien registrado cada producto.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={car_3} className="d-block w-100" alt="Almacen lleno" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>No le tema al cambio</h1>
                            <p>Mueva productos, solicite pedidos, envíos y mucho más.</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#mainSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        )
    }
}