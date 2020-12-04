import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth0ProviderWithHistory from "./components/auth0-provider-with-history";
import {Auth0Provider} from "@auth0/auth0-react";
require("dotenv").config();

ReactDOM.render(

    <Auth0ProviderWithHistory
      domain= "dev-3ygr2oj4.us.auth0.com"
      clientId = "vKf6lU1wjHEgC3xBc2lQ3nfamBLbWEcJ"
      redirectUri = {window.location.origin}>
      <App />
  </Auth0ProviderWithHistory>
    
  ,
  document.getElementById('root')
);
reportWebVitals();
