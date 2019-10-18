import React from 'react';
import { Route, Switch } from "react-router-dom";

// components list
import Home from "./components/Home/";
import Users from "./components/Users/";
import Admin from "./components/Admin/";

const routes = (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/user/:id" component={Users}/>
        <Route path="/admin/:id" component={Admin}/>
    </Switch>
);

export default routes