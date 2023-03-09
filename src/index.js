import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import toastr
import "toastr/build/toastr.min.css";
import "toastr/build/toastr.min.js";
// import bootstrap 5.2
import "bootstrap/dist/css/bootstrap.min.css";
// import react router
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();