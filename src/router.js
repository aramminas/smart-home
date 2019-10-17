import React from 'react';
import { Route, Switch } from "react-router-dom";

// components list
import Home from "./components/Home/";



const routes = (
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
);

export default routes