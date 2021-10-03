import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from '../../css/NavBar.module.css';
import { NavLink } from 'react-router-dom';


import Home from '../Home/Home';
import Login from "../authentication/login";

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <h1 >Welcome to Jobhound</h1> 
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'> Login</NavLink>
            </div>
        </div> 
    )
}
export default NavBar;
