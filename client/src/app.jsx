import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppliedTo from "./components/job status/appliedTo";
import NavBar from "./components/NavBar/NavBar";

import Home from './components/Home/Home';
import Login from "./components/authentication/login";
import Navigation from "./Navigation";

const App = (props) => {

  return (
    <>
    <NavBar />
    {/* <div>
      This is the Home Screen
    </div>
    <a href="/login"><button >Login1</button> </a>
    <AppliedTo /> */}
    {/* <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
    </BrowserRouter> */}
    </>
    
  )
};

export default App;
