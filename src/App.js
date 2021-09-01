import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './components/Icons/bootstrap-icons.css'
import './App.css';

//Hasta antes de iniciar sesión:
import RegistroUsuarios from './components/RegistroUsuarios'
import LoginUsuario from './components/LoginUsuario'
import Inicio from './components/Inicio'

//Luego de haber iniciado sesión:
import Home from './components/main/home'
import Categorias from './components/main/Categorias'
import Proveedores from './components/main/Proveedores';
import Trabajadores from './components/main/Trabajadores';
import Entrada_p from './components/main/Entrada_p';
import Salida_p from './components/main/Salida_p';
import Registro from './components/main/Registros';
import Items from './components/main/Items';


function App() {
  
  return (
    <Router>
      <Route path = "/" exact component = {Inicio} />
      <Route path = "/login" component = {LoginUsuario} />
      <Route path = "/register" component = {RegistroUsuarios} />

      <Route path = "/home" component = {Home} />
      <Route path = "/categorias" component = {Categorias} />
      <Route path = "/proveedores" component = {Proveedores} />
      <Route path = "/trabajadores" component = {Trabajadores} />
      <Route path = "/entrada-productos" component = {Entrada_p} />
      <Route path = "/salida-productos" component = {Salida_p} />
      <Route path = "/registros" component = {Registro} />
      <Route path = "/items" component = {Items} />
    </Router>
  );
}

export default App;
