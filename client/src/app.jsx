import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppliedTo from "./components/job status/appliedTo";
import NavBar from "./components/NavBar/NavBar";

import Home from './components/Home/Home';
import Login from "./components/authentication/login";
import SignUp from './components/authentication/SignUp';
// import Navigation from "./Navigation";

const App = (props) => {

  return (
    <>
    <BrowserRouter>
    <div>
      
    <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
    </BrowserRouter>
    {/* <div>
      This is the Home Screen
    </div>
    <a href="/login"><button >Login1</button> </a>
    <AppliedTo /> */}
    </>
    
  )
};

export default App;
