import React from 'react';
import { Route, Switch } from "react-router-dom";

// components list
import Home from "./components/home/";
import About from "./components/about/";
import Contact from "./components/contact/";
import Login from "./components/login/";
import Registration from "./components/registration/";
import Privacy from "./components/privacy";



const routes = (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/about" component={About}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/registration" component={Registration}/>
        <Route  path="/privacy" component={Privacy}/>
    </Switch>
);

export default routes