import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import './css/NavBar.module.css';
//Dammit Alex
ReactDom.render(
<BrowserRouter>
<App/>
</BrowserRouter>, document.getElementById('App'));