import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react'
import './index.css';
import App from './App';

//Var entorno para el dominio y client id de autenticación
const domain = "dev-rt-4763v.us.auth0.com"
const client_id = "Xuk0ZL8LQkknvonHuZjblp7kclUuOHRa"


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain}
      clientId={client_id} 
      redirectUri={window.location.origin} >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


