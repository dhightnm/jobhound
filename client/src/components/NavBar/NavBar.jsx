import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from '../../css/NavBar.module.css';

import Home from '../Home/Home';
import Login from "../authentication/login";
import Navigation from "../../Navigation";

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
        <h1 >Welcome to Jobhound</h1> 
    <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
        </Switch>
        </div>
    </BrowserRouter>
        </div>
    )
}
export default NavBar;
