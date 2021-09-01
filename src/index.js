import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react'
import './index.css';
import App from './App';

//Var entorno para el dominio y client id de autenticación
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const client_id = process.env.REACT_APP_AUTH0_CLIEND_ID;


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain}
      clientId={client_id} 
      redirec={window.location.origin} >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


